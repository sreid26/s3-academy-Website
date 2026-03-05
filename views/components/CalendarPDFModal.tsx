import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface CalendarPDFModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
}

export const CalendarPDFModal: React.FC<CalendarPDFModalProps> = ({ isOpen, onClose, pdfUrl }) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1.0);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.6));
    const handleResetZoom = () => setScale(1.0);

    const handlePrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
    const handleNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-modal-title"
        >
            <div
                ref={modalRef}
                className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col h-[90vh] md:h-[85vh] transition-all animate-fade-in-up relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Custom Toolbar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 relative z-10 shrink-0">
                    <div>
                        <h3 id="pdf-modal-title" className="font-header text-xl md:text-2xl font-bold uppercase tracking-tight text-navy m-0 leading-none">
                            Printable Calendar
                        </h3>
                        <p className="font-sans text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">
                            S3 Academy 2025-26
                        </p>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Zoom Controls */}
                        <div className="hidden md:flex items-center bg-white border border-slate-200 rounded-full shadow-sm p-1">
                            <button onClick={handleZoomOut} className="p-1.5 text-slate-500 hover:text-navy hover:bg-slate-50 rounded-full transition-colors" aria-label="Zoom out" disabled={scale <= 0.6}>
                                <Icon icon="solar:minus-circle-line-duotone" className="w-5 h-5" />
                            </button>
                            <button onClick={handleResetZoom} className="px-3 font-sans text-xs font-bold text-navy min-w-[3rem] text-center" aria-label="Reset zoom">
                                {Math.round(scale * 100)}%
                            </button>
                            <button onClick={handleZoomIn} className="p-1.5 text-slate-500 hover:text-navy hover:bg-slate-50 rounded-full transition-colors" aria-label="Zoom in" disabled={scale >= 2.5}>
                                <Icon icon="solar:add-circle-line-duotone" className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Download */}
                        <a
                            href={pdfUrl}
                            download
                            className="flex items-center justify-center p-2.5 bg-gold/10 hover:bg-gold text-navy rounded-full transition-colors"
                            aria-label="Download PDF"
                            title="Download PDF"
                        >
                            <Icon icon="solar:download-minimalistic-bold" className="w-5 h-5" />
                        </a>

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="p-2.5 bg-slate-200 hover:bg-red-500 hover:text-white text-navy rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 ml-2"
                            aria-label="Close viewer"
                        >
                            <Icon icon="solar:close-square-bold" className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* PDF Document Area */}
                <div className="flex-1 overflow-auto bg-[#e5e7eb] flex justify-center py-6 px-4 relative">
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="flex flex-col items-center"
                        loading={
                            <div className="flex flex-col items-center justify-center h-full text-navy/50">
                                <Icon icon="solar:refresh-circle-bold-duotone" className="w-12 h-12 animate-spin mb-4 text-gold" />
                                <p className="font-sans font-bold uppercase tracking-widest text-sm">Loading PDF...</p>
                            </div>
                        }
                        error={
                            <div className="flex flex-col items-center justify-center h-full text-red-500">
                                <Icon icon="solar:danger-triangle-bold-duotone" className="w-12 h-12 mb-4" />
                                <p className="font-sans font-bold text-sm">Failed to load PDF file.</p>
                            </div>
                        }
                    >
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            className="shadow-xl"
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                        />
                    </Document>
                </div>

                {/* Footbar / Pagination */}
                {numPages && numPages > 1 && (
                    <div className="bg-white border-t border-slate-100 py-3 px-6 flex items-center justify-center gap-4 shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
                        <button
                            onClick={handlePrevPage}
                            disabled={pageNumber <= 1}
                            className={`p-2 rounded-full transition-colors ${pageNumber <= 1 ? 'text-slate-300 cursor-not-allowed' : 'text-navy hover:bg-slate-100'}`}
                            aria-label="Previous page"
                        >
                            <Icon icon="solar:alt-arrow-left-line-duotone" className="w-6 h-6" />
                        </button>
                        <span className="font-sans text-sm font-bold text-navy">
                            Page {pageNumber} of {numPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={pageNumber >= numPages}
                            className={`p-2 rounded-full transition-colors ${pageNumber >= numPages ? 'text-slate-300 cursor-not-allowed' : 'text-navy hover:bg-slate-100'}`}
                            aria-label="Next page"
                        >
                            <Icon icon="solar:alt-arrow-right-line-duotone" className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
