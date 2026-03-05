export type EventCategory = 'HOLIDAYS_NO_SCHOOL' | 'REPORT_CARDS' | 'EVENTS' | 'TESTING' | 'VIRTUAL_DAY';

export interface CalendarEvent {
    id: string;
    title: string;
    start: string; // "YYYY-MM-DD"
    end?: string;  // "YYYY-MM-DD"
    category: EventCategory;
    shortLabel: string;
    description?: string;
    allDay: boolean;
    audience?: "All" | "Students" | "Families";
    isTentative?: boolean;
}

export const CAL_EVENTS: CalendarEvent[] = [
    {
        id: 'evt-first-day',
        title: 'First Day of School',
        start: '2025-08-25',
        category: 'EVENTS',
        shortLabel: 'Events',
        allDay: true,
    },
    {
        id: 'evt-labor-day',
        title: 'Labor Day (No School)',
        start: '2025-09-01',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-columbus-day',
        title: 'Columbus Day',
        start: '2025-10-13',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-veterans-day',
        title: 'Veterans Day',
        start: '2025-11-11',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-q1-report',
        title: 'Q1 Report Card',
        start: '2025-11-12',
        category: 'REPORT_CARDS',
        shortLabel: 'Report Cards',
        allDay: true,
    },
    {
        id: 'evt-thanksgiving',
        title: 'Thanksgiving Holiday',
        start: '2025-11-26',
        end: '2025-11-28',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-holiday-break',
        title: 'Holiday Break',
        start: '2025-12-22',
        end: '2026-01-02',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-mlk-day',
        title: 'MLK Holiday',
        start: '2026-01-19',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-q2-report',
        title: 'Q2 Report Card',
        start: '2026-01-23',
        category: 'REPORT_CARDS',
        shortLabel: 'Report Cards',
        allDay: true,
    },
    {
        id: 'evt-virtual-day',
        title: 'Virtual Day',
        start: '2026-02-13',
        category: 'VIRTUAL_DAY',
        shortLabel: 'Virtual Day',
        allDay: true,
    },
    {
        id: 'evt-winter-break',
        title: 'Winter Break',
        start: '2026-02-16',
        end: '2026-02-20',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-senior-night',
        title: 'Senior Night',
        start: '2026-02-28', // Placeholder
        category: 'EVENTS',
        shortLabel: 'Events',
        allDay: true,
        isTentative: true,
        description: 'TBD (Feb 2026)'
    },
    {
        id: 'evt-q3-report',
        title: 'Q3 Report Card',
        start: '2026-03-27',
        category: 'REPORT_CARDS',
        shortLabel: 'Report Cards',
        allDay: true,
    },
    {
        id: 'evt-spring-break',
        title: 'Spring Break',
        start: '2026-03-30',
        end: '2026-04-03',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-good-friday',
        title: 'Good Friday',
        start: '2026-04-03',
        category: 'HOLIDAYS_NO_SCHOOL',
        shortLabel: 'No School',
        allDay: true,
    },
    {
        id: 'evt-prom',
        title: 'Prom',
        start: '2026-04-30', // Placeholder
        category: 'EVENTS',
        shortLabel: 'Events',
        allDay: true,
        isTentative: true,
        description: 'TBD (Apr 2026)'
    },
    {
        id: 'evt-graduation',
        title: 'Graduation',
        start: '2026-05-21',
        category: 'EVENTS',
        shortLabel: 'Events',
        allDay: true,
    },
    {
        id: 'evt-q4-report',
        title: 'Q4 Report Card',
        start: '2026-05-29',
        category: 'REPORT_CARDS',
        shortLabel: 'Report Cards',
        allDay: true,
    }
];
