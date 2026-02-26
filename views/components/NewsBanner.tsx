import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const NewsBanner = () => {
    const newsItems = [
        {
            category: "Program News",
            title: "S3 Academy Fields National Schedule Against Top US Programs",
            date: "FEBRUARY 18, 2026",
            image: "https://tse2.mm.bing.net/th/id/OIP.KxQg6u8mIr3lb9TY9H69EgHaHa?pid=Api&P=0",
            link: "https://www.maxpreps.com/va/petersburg/shining-stars-sports-academy-s3/"
        },
        {
            category: "Game Result",
            title: "Lady Panthers Secure 18-8 Record in Regular Season Play",
            date: "FEBRUARY 10, 2026",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&fm=webp",
            link: "https://www.maxpreps.com/va/petersburg/shining-stars-sports-academy-s3/basketball/girls/"
        },
        {
            category: "Player Spotlight",
            title: "Syvannah Dawson Named McDonald's All American Nominee",
            date: "FEBRUARY 15, 2026",
            image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&fm=webp",
            link: "https://www.instagram.com/vannah.theh00per/"
        }
    ];

    return (
        <section className="py-24 bg-offWhite border-y border-slate-200">
            <div className="container-tight">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-4 gap-6">
                    <div>
                        <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">
                            Press & Updates
                        </span>
                        <h2 className="text-navy text-4xl md:text-6xl font-header font-bold uppercase tracking-tight leading-none">
                            In The News
                        </h2>
                        <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gold mt-6"></div>
                    </div>
                    <Link to="/news" className="btn-outline shrink-0 text-sm mx-auto md:mx-0">
                        VIEW ALL NEWS
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {newsItems.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                            {/* Image Wrapper */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="font-sans absolute top-4 left-4 bg-navy text-gold text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-10">
                                    {item.category}
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-4">
                                    <Icon icon="solar:calendar-bold" className="text-gold w-4 h-4" />
                                    <span className="font-sans text-slate-400 text-[10px] font-bold tracking-widest uppercase">
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="font-sans font-bold text-xl md:text-[22px] uppercase tracking-wide text-navy leading-tight mb-6 group-hover:text-gold transition-colors flex-grow">
                                    {item.title}
                                </h3>
                                <div className="font-sans mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-navy font-bold text-xs uppercase tracking-widest group-hover:text-gold transition-colors">
                                    Read Article <Icon icon="solar:arrow-right-line-duotone" className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsBanner;
