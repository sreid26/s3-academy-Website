import { CalendarEvent } from '../data/academicCalendar_2025_2026';

// Formats a YYYY-MM-DD date to YYYYMMDD
const formatICSDate = (dateStr: string) => {
    return dateStr.replace(/-/g, '');
};

// Generates a unique UID for ICS
const generateUID = (id: string) => {
    return `${id}-${Date.now()}@s3academy.com`;
};

/**
 * Converts an array of CalendarEvent objects into a valid ICS string
 * and triggers a browser download.
 */
export const downloadCalendarICS = (events: CalendarEvent[], filename = 'S3_Academy_Calendar.ics') => {
    let icsContent =
        `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//S3 Academy//Academic Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

    const validEvents = events.filter(e => !e.isTentative);

    validEvents.forEach((event) => {
        const dtStart = formatICSDate(event.start);

        // In ICS, end dates for all-day events are exclusive.
        // If there's an end date, we add 1 day to it conceptually, 
        // but a simple approach for multiple day events in JS is parsing it:
        let dtEnd = dtStart;
        if (event.end) {
            const eDate = new Date(event.end);
            eDate.setDate(eDate.getDate() + 1);
            dtEnd = eDate.toISOString().split('T')[0].replace(/-/g, '');
        } else {
            // Single day all-day event
            const eDate = new Date(event.start);
            eDate.setDate(eDate.getDate() + 1);
            dtEnd = eDate.toISOString().split('T')[0].replace(/-/g, '');
        }

        icsContent +=
            `BEGIN:VEVENT
UID:${generateUID(event.id)}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${dtStart}
DTEND;VALUE=DATE:${dtEnd}
SUMMARY:${event.title}
DESCRIPTION:${event.description || ''}
END:VEVENT
`;
    });

    icsContent += `END:VCALENDAR`;

    // Create a Blob and trigger download
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
