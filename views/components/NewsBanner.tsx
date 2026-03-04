import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const NewsBanner = () => {
    const newsItems = [
        {
            category: "Game Result",
            title: "S3 Academy Dominates IMG Academy Blue 67-31 at Big Shots Myrtle Beach SLAM",
            date: "JANUARY 2026",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&fm=webp",
            link: "https://www.maxpreps.com/va/petersburg/shining-stars-sports-academy-s3/"
        },
        {
            category: "Player Spotlight",
            title: "Syvannah Dawson Named 2026 McDonald's All American Nominee",
            date: "FEBRUARY 15, 2026",
            image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&fm=webp",
            link: "https://www.instagram.com/vannah.theh00per/"
        },
        {
            category: "Program News",
            title: "S3 Academy Prepares for highly-anticipated 'Battle of the Burg!' Rivalry Matchup",
            date: "DECEMBER 6, 2025",
            image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&fm=webp",
            link: "https://www.youtube.com/watch?v=s3academy"
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
                        <h2 className="s3-type-premium s3-section-title text-4xl md:text-6xl font-header font-bold uppercase tracking-tight leading-none">
                            In The News
                        </h2>
                        <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gold mt-6"></div>
                    </div>
                    <Link to="/news" className="btn-outline shrink-0 text-sm mx-auto md:mx-0">
                        VIEW ALL NEWS
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 px-4">
                    {/* Featured Article */}
                    <a href={newsItems[0].link} target="_blank" rel="noopener noreferrer" className="lg:col-span-7 xl:col-span-8 group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(11,29,58,0.08)] transition-all duration-500 hover:-translate-y-1 border border-slate-100">
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px] overflow-hidden">
                            <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            <div className="font-sans absolute top-5 left-5 bg-navy text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-sm shadow-md z-10 border-l-[3px] border-gold">
                                {newsItems[0].category}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Icon icon="solar:calendar-bold" className="text-gold w-4 h-4" />
                                    <span className="font-sans text-slate-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                        {newsItems[0].date}
                                    </span>
                                </div>
                                <h3 className="cardTitle text-2xl md:text-3xl lg:text-4xl mb-6 group-hover:text-gold transition-colors">
                                    {newsItems[0].title}
                                </h3>
                            </div>
                            <div className="font-sans pt-6 border-t border-slate-100 flex items-center text-navy font-bold text-xs uppercase tracking-widest group-hover:text-gold transition-colors w-max">
                                <span className="group-hover:underline decoration-gold underline-offset-4">Read Article</span> <Icon icon="solar:arrow-right-line-duotone" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                            </div>
                        </div>
                    </a>

                    {/* Secondary Articles */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 md:gap-8 h-full">
                        {newsItems.slice(1).map((item, idx) => (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" key={idx} className="group cursor-pointer flex flex-col sm:flex-row lg:flex-col xl:flex-row h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_15px_30px_rgba(11,29,58,0.06)] transition-all duration-500 hover:-translate-y-1 border border-slate-100 flex-1">
                                <div className="relative w-full sm:w-2/5 lg:w-full xl:w-2/5 aspect-[4/3] sm:aspect-auto lg:aspect-[4/3] xl:aspect-auto shrink-0 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                                    <div className="font-sans absolute top-3 left-3 bg-navy text-white text-[8px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm shadow-md z-10 border-l-2 border-gold">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Icon icon="solar:calendar-bold" className="text-gold w-3.5 h-3.5" />
                                            <span className="font-sans text-slate-400 text-[9px] font-bold tracking-widest uppercase">
                                                {item.date}
                                            </span>
                                        </div>
                                        <h3 className="cardTitle text-lg md:text-xl mb-4 group-hover:text-gold transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="font-sans pt-4 mt-auto border-t border-slate-100 flex items-center text-navy font-bold text-[10px] md:text-xs uppercase tracking-widest group-hover:text-gold transition-colors w-max">
                                        <span className="group-hover:underline decoration-gold underline-offset-4">Read Article</span> <Icon icon="solar:arrow-right-line-duotone" className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsBanner;
