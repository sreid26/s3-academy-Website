import React, { useState, useMemo, Suspense } from 'react';
import { Icon } from '@iconify/react';
// Official S3 Academic Calendar 2025-2026 PDF
const CALENDAR_PDF_URL = "/assets/docs/S3_Academic_Calendar_2025-2026.pdf";

// Lazy load the PDF modal to keep the main bundle light
const CalendarPDFModal = React.lazy(() => import('./components/CalendarPDFModal').then(module => ({ default: module.CalendarPDFModal })));
import { CAL_EVENTS, EventCategory, CalendarEvent } from '../data/academicCalendar_2025_2026';
import { downloadCalendarICS } from '../utils/generateIcs';

const FILTERS: (EventCategory | 'All')[] = ['All', 'HOLIDAYS_NO_SCHOOL', 'TESTING', 'EVENTS', 'REPORT_CARDS', 'VIRTUAL_DAY'];

const Calendar = () => {
    const [showToast, setShowToast] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All' as EventCategory | 'All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const filteredEvents = useMemo(() => {
        let events = CAL_EVENTS;
        if (activeFilter !== 'All') {
            events = events.filter(e => e.category === activeFilter);
        }
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            events = events.filter(e =>
                e.title.toLowerCase().includes(query) ||
                (e.description && e.description.toLowerCase().includes(query))
            );
        }
        return events;
    }, [activeFilter, searchQuery]);

    const getFilterCount = (filter: EventCategory | 'All') => {
        if (filter === 'All') return CAL_EVENTS.length;
        return CAL_EVENTS.filter(e => e.category === filter).length;
    };

    const handleDownloadICS = () => {
        downloadCalendarICS(CAL_EVENTS, 'S3_Academic_Calendar_2025-2026.ics');
    };

    const handleDownloadSingleICS = (e: any, event: CalendarEvent) => {
        e.stopPropagation();
        e.preventDefault();
        downloadCalendarICS([event], `S3_${event.title.replace(/\s+/g, '_')}.ics`);
    };

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        // Adjust for timezone offset to prevent off-by-one errors when parsing ISO strings
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date.toLocaleDateString('en-US', options);
    };

    const getCategoryColor = (category: EventCategory) => {
        switch (category) {
            case 'HOLIDAYS_NO_SCHOOL': return 'bg-red-50 text-red-600 border-red-200';
            case 'TESTING': return 'bg-blue-50 text-blue-600 border-blue-200';
            case 'REPORT_CARDS': return 'bg-green-50 text-green-600 border-green-200';
            case 'VIRTUAL_DAY': return 'bg-purple-50 text-purple-600 border-purple-200';
            case 'EVENTS': return 'bg-gold/10 text-[#a37920] border-gold/30';
            default: return 'bg-slate-100 text-slate-600 border-slate-200';
        }
    };

    const getCategoryIcon = (category: EventCategory) => {
        switch (category) {
            case 'HOLIDAYS_NO_SCHOOL': return 'solar:moon-sleep-bold-duotone';
            case 'TESTING': return 'solar:pen-new-square-bold-duotone';
            case 'REPORT_CARDS': return 'solar:document-add-bold-duotone';
            case 'VIRTUAL_DAY': return 'solar:laptop-minimalistic-bold-duotone';
            case 'EVENTS': return 'solar:star-fall-bold-duotone';
            default: return 'solar:calendar-bold-duotone';
        }
    };

    const formatFilterLabel = (filter: EventCategory | 'All') => {
        if (filter === 'All') return 'All';
        if (filter === 'HOLIDAYS_NO_SCHOOL') return 'Holidays/No School';
        if (filter === 'REPORT_CARDS') return 'Report Cards';
        if (filter === 'VIRTUAL_DAY') return 'Virtual Day';
        return filter.charAt(0) + filter.slice(1).toLowerCase();
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-12 font-sans relative">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header Block */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block">
                                Academics
                            </span>
                            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200">
                                Updated: Feb 2026
                            </span>
                        </div>
                        <h1 className="sectionHeadline mb-4">
                            Academic Calendar
                        </h1>
                        <p className="text-slate-500 font-medium max-w-xl">
                            Key dates, testing windows, breaks, and school events for the 2025–2026 Academic Year.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto overflow-hidden">
                        <button
                            onClick={handleShare}
                            className="flex-1 sm:flex-none flex items-center justify-center py-3.5 px-6 bg-transparent border border-slate-200 text-navy hover:border-navy hover:bg-slate-50 font-black uppercase text-xs tracking-widest rounded transition-all shadow-sm"
                            aria-label="Share page"
                        >
                            <Icon icon="solar:share-circle-bold" className="w-5 h-5 mr-2 text-slate-400" />
                            Share
                        </button>
                        <button
                            onClick={() => setIsPdfModalOpen(true)}
                            className="flex-1 sm:flex-none flex items-center justify-center py-3.5 px-6 bg-white border border-slate-200 text-navy hover:border-gold hover:bg-gold/5 font-black uppercase text-xs tracking-widest rounded transition-all shadow-sm"
                        >
                            <Icon icon="solar:document-text-bold-duotone" className="w-5 h-5 mr-2 text-gold" />
                            View PDF
                        </button>
                        <button
                            onClick={handleDownloadICS}
                            className="flex-1 sm:flex-none flex items-center justify-center py-3.5 px-8 bg-gold hover:bg-[#b08530] text-navy font-black uppercase text-xs tracking-widest rounded transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Icon icon="solar:calendar-add-bold" className="w-5 h-5 mr-2" />
                            Add to Calendar (.ICS)
                        </button>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex flex-wrap items-center gap-2">
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border flex items-center gap-2 ${activeFilter === filter
                                    ? 'bg-navy text-white border-navy shadow-md'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-gold hover:text-navy hover:bg-slate-50 shadow-sm'
                                    }`}
                            >
                                {formatFilterLabel(filter)}
                                <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${activeFilter === filter ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {getFilterCount(filter)}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="w-full md:w-64 relative">
                        <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search event..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-shadow placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Events Grid / List */}
                <div className="bg-slate-50 rounded-[28px] border border-slate-200 shadow-inner p-4 md:p-8 min-h-[500px]">
                    {filteredEvents.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-20 text-slate-400">
                            <Icon icon="solar:box-minimalistic-bold-duotone" className="w-16 h-16 mb-4 opacity-50 text-slate-300" />
                            <p className="text-lg font-bold uppercase tracking-widest text-navy mb-2">No Dates Found</p>
                            <p className="font-medium max-w-sm">There are no calendar events matching the current filter. Try selecting 'All' to see the full year.</p>
                            <button onClick={() => setActiveFilter('All')} className="mt-6 text-gold hover:text-navy font-bold uppercase text-xs tracking-widest border-b-2 border-gold pb-1 transition-colors">
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredEvents.map(event => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
                                >
                                    {/* Subtle top glow */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl border ${getCategoryColor(event.category)}`}>
                                            <Icon icon={getCategoryIcon(event.category)} className="w-6 h-6" />
                                        </div>
                                        <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            {event.shortLabel}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-start gap-2 mb-2">
                                        <h3 className="cardTitle text-xl md:text-2xl group-hover:text-gold transition-colors">
                                            {event.title}
                                        </h3>
                                        {!event.isTentative && (
                                            <button
                                                onClick={(e) => handleDownloadSingleICS(e, event)}
                                                className="opacity-0 group-hover:opacity-100 shrink-0 text-slate-300 hover:text-gold transition-all duration-300 transform hover:scale-110 focus:outline-none"
                                                aria-label="Add to my calendar"
                                                title="Add to my calendar"
                                            >
                                                <Icon icon="solar:calendar-add-bold-duotone" className="w-6 h-6" />
                                            </button>
                                        )}
                                    </div>

                                    <div className="flex items-center text-sm font-bold text-slate-500 mb-4 tracking-wide gap-2">
                                        <Icon icon="solar:calendar-mark-bold-duotone" className="w-4 h-4 text-gold" />
                                        <time dateTime={event.start}>{formatDate(event.start)}</time>
                                        {event.end && (
                                            <>
                                                <span className="text-slate-300">—</span>
                                                <time dateTime={event.end}>{formatDate(event.end)}</time>
                                            </>
                                        )}
                                    </div>

                                    {
                                        event.description && (
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed mt-auto border-t border-slate-100 pt-4">
                                                {event.description}
                                            </p>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-12">
                    <p className="text-sm text-slate-400 font-medium pb-2 border-b border-slate-100 inline-block">
                        Need an offline, printable version? <button onClick={() => setIsPdfModalOpen(true)} className="text-gold hover:text-navy cursor-pointer font-bold transition-colors">View the PDF</button> or <a href={CALENDAR_PDF_URL} download className="text-gold hover:text-navy font-bold transition-colors">Download it directly</a>.
                    </p>
                </div>
            </div>

            {/* React-PDF Custom Modal (Lazy Loaded) */}
            {
                isPdfModalOpen && (
                    <Suspense fallback={
                        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/80 backdrop-blur-sm">
                            <Icon icon="solar:refresh-circle-bold-duotone" className="w-12 h-12 text-gold animate-spin" />
                        </div>
                    }>
                        <CalendarPDFModal isOpen={isPdfModalOpen} onClose={() => setIsPdfModalOpen(false)} pdfUrl={CALENDAR_PDF_URL} />
                    </Suspense>
                )
            }

            {/* Copy Toast */}
            <div
                className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-navy text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transition-all duration-300 z-50 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}
            >
                <Icon icon="solar:check-circle-bold" className="text-gold w-5 h-5" />
                <span className="font-bold text-sm tracking-wide">Link copied to clipboard</span>
            </div>
        </div >
    );
};

export default Calendar;
