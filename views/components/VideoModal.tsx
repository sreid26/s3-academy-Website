import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoId: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Close when clicking outside the modal content
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-md p-4 animate-fade-in"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-gold transition-colors duration-300 z-[101]"
                aria-label="Close video"
            >
                <Icon icon="mdi:close" className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <div
                ref={modalRef}
                className="relative w-full max-w-5xl bg-black rounded-2xl md:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_30px_rgba(200,155,60,0.15)] ring-1 ring-white/10"
            >
                {/* 16:9 Aspect Ratio Container */}
                <div className="relative w-full pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                        title="S3 Academy Campus Tour"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
