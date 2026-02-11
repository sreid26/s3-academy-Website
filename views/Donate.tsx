import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { SkewedButton } from './components/SkewedButton';

const S3_BRAND = {
  navy: '#0B1D3A',
  gold: '#C89B3C',
};

interface SponsorPackage {
  title: string;
  price: string;
  bestFor: string;
  benefits: string[];
  buttonText: string;
  featured?: boolean;
}

const sponsorPackages: SponsorPackage[] = [
  {
    title: "White Sponsor",
    price: "$2,500",
    bestFor: "local businesses starting a partnership",
    benefits: [
      "6 complimentary game tickets (current season)",
      "3 promo table opportunities at home games",
      "Logo placement on S3 Academy website"
    ],
    buttonText: "Become a White Sponsor"
  },
  {
    title: "Silver Sponsor",
    price: "$5,000",
    bestFor: "stronger in-person visibility",
    benefits: [
      "8 complimentary game tickets",
      "4 promo table opportunities at home games",
      "Logo placement on S3 Academy website",
      "Flyers available for distribution at games"
    ],
    buttonText: "Become a Silver Sponsor"
  },
  {
    title: "Platinum Sponsor",
    price: "$7,500",
    bestFor: "premium visibility + gym presence",
    benefits: [
      "10 complimentary game tickets",
      "5 promo table opportunities at home games",
      "Logo placement on S3 Academy website",
      "Flyers available for distribution at games",
      "Personalized sponsor banner displayed in the gym"
    ],
    buttonText: "Become a Platinum Sponsor"
  },
  {
    title: "Gold Elite Sponsor",
    price: "$10,000",
    bestFor: "maximum exposure + top-tier branding",
    benefits: [
      "10 complimentary game tickets",
      "6 promo table opportunities at home games",
      "Logo + full-page website ad",
      "Logo + link included in S3 email communications",
      "Personalized sponsor banner displayed in the gym"
    ],
    buttonText: "Become a Gold Elite Sponsor",
    featured: true
  }
];

export const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>('$100');
  const amounts = ['$25', '$50', '$100', 'Custom'];

  return (
    <div className="bg-[#0B1A2A] min-h-screen font-body text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 bg-[#001F3F] overflow-hidden border-b-8 border-gold">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069"
            alt="Gym Action at Shining Star Academy"
            className="w-full h-full object-cover grayscale hero-zoom"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h4 className="font-black uppercase tracking-[0.4em] mb-4 text-gold animate-pulse">
            Invest in Excellence
          </h4>
          <h1 className="text-6xl md:text-[8rem] font-header text-white uppercase italic tracking-tighter leading-none mb-8">
            Fuel the <br /> <span className="text-gold">Dream</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-xl font-medium leading-relaxed italic border-l-4 border-gold/50 pl-6">
            Your support provides the tools for elite student-athletes to excel in the classroom and dominate on the court at Shining Star Academy.
          </p>
        </div>
      </section>

      {/* ================= GIVING PRIORITIES GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-gold font-black uppercase tracking-[0.4em] mb-4 text-sm">Giving Priorities</h4>
          <h2 className="text-6xl md:text-7xl font-header leading-none uppercase tracking-tight">
            CHOOSE WHERE TO <br />
            <span className="text-gold">MAKE AN IMPACT</span>
          </h2>
          <div className="h-1.5 w-32 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "SCHOLARSHIPS & TUITION ASSISTANCE",
              desc: "Provide access for talented student-athletes who demonstrate financial need, ensuring that no dream is deferred due to circumstances.",
              icon: "solar:hand-stars-bold-duotone"
            },
            {
              title: "ACADEMIC EXCELLENCE FUND",
              desc: "Support curriculum development, technology, classroom resources, and faculty professional development to maintain NCAA-aligned rigor.",
              icon: "solar:square-academic-cap-bold-duotone"
            },
            {
              title: "BASKETBALL & ATHLETE DEVELOPMENT",
              desc: "Fund elite coaching, travel for national competition, training equipment, and sports performance programs.",
              icon: "solar:basketball-bold-duotone"
            },
            {
              title: "CAMPUS & FACILITIES ENHANCEMENTS",
              desc: "Invest in state-of-the-art facilities, campus improvements, and the environments where our scholars train and learn.",
              icon: "solar:buildings-bold-duotone"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#152438] p-12 border border-white/5 rounded-xl hover:border-gold/30 transition-all duration-500 group relative">
              <Icon icon={item.icon} className="text-gold mb-10 group-hover:scale-110 transition-transform" width="56" aria-hidden="true" />
              <h3 className="text-3xl font-header text-white mb-6 tracking-wide uppercase">{item.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-lg italic opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORPORATE SPONSORSHIP PACKAGES ================= */}
      <section className="py-24 bg-offWhite text-navy">
        <div className="container-tight px-4">
          <div className="text-center mb-16">
            <h4 className="text-gold font-black uppercase tracking-[0.4em] mb-4 text-sm">Partnership Opportunities</h4>
            <h2 className="text-5xl md:text-7xl font-header leading-none uppercase tracking-tight mb-6">Corporate <br /><span className="text-gold">Sponsorships</span></h2>
            <p className="text-slate-500 font-medium italic text-lg max-w-2xl mx-auto">Align your brand with excellence and support the next generation of leaders and champions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24 items-stretch">
            {sponsorPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 ${pkg.featured ? 'border-gold scale-105 z-10' : 'border-transparent hover:border-slate-100'}`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-gold text-navy font-black text-[10px] px-4 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-widest z-20">
                    Featured Sponsor
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-3xl font-header uppercase italic tracking-tight mb-1">{pkg.title}</h3>
                  <div className="text-4xl font-header text-gold mb-4">{pkg.price}</div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-[11px] font-black uppercase tracking-widest text-slate-400">
                    Best for: <span className="text-navy">{pkg.bestFor}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex gap-3 items-start text-sm font-medium text-slate-600 leading-snug">
                      <Icon icon="solar:check-circle-bold" className="text-gold w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 font-header text-xl uppercase tracking-widest transition-all rounded-lg focus:outline-none focus:ring-4 focus:ring-gold/50 ${pkg.featured
                      ? 'bg-gold text-navy shadow-lg hover:bg-[#b88d35]'
                      : 'bg-navy text-white hover:bg-[#1a2d4d]'
                    }`}
                  aria-label={`Inquire about ${pkg.title} sponsorship at ${pkg.price}`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* SPONSOR INQUIRY FORM */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
              <div className="flex flex-col md:flex-row gap-12 items-center mb-12 border-b border-slate-100 pb-12">
                <div className="flex-shrink-0 w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon icon="solar:case-round-bold-duotone" className="text-gold w-12 h-12" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-4xl font-header uppercase italic text-navy mb-2">Sponsor Inquiry</h3>
                  <p className="text-slate-500 font-medium text-lg italic">Ready to partner? Fill out the form below and our leadership team will contact you within 24 hours.</p>
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="company-name" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                  <input id="company-name" type="text" placeholder="e.g. Acme Performance" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy focus:border-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Name</label>
                  <input id="contact-name" type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy focus:border-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email-address" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input id="email-address" type="email" placeholder="john@company.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy focus:border-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone-number" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <input id="phone-number" type="tel" placeholder="(804) 555-0123" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy focus:border-gold outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="preferred-package" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Preferred Package</label>
                  <select id="preferred-package" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy focus:border-gold outline-none transition-all appearance-none cursor-pointer">
                    <option>Select a Sponsorship Tier</option>
                    <option>White Sponsor — $2,500</option>
                    <option>Silver Sponsor — $5,000</option>
                    <option>Platinum Sponsor — $7,500</option>
                    <option>Gold Elite Sponsor — $10,000</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="notes" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Notes / Preferred Game Dates</label>
                  <textarea id="notes" rows={4} placeholder="Tell us about your brand goals or specific games you'd like to target..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy focus:border-gold outline-none transition-all resize-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Logo (Optional)</label>
                  <button type="button" className="w-full border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-gold transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-gold/50">
                    <Icon icon="solar:cloud-upload-bold-duotone" className="text-slate-300 group-hover:text-gold mx-auto mb-2" width="40" aria-hidden="true" />
                    <p className="text-xs font-bold text-slate-400 group-hover:text-gold uppercase tracking-widest">Click to upload SVG, PNG, or AI file</p>
                  </button>
                </div>
                <div className="md:col-span-2 pt-4">
                  <SkewedButton variant="navy" className="w-full py-5 text-2xl shadow-2xl">SUBMIT SPONSORSHIP INQUIRY</SkewedButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECURE DONATION PORTAL (Individual Giving) ================= */}
      <section className="py-24 bg-navy relative overflow-hidden border-y border-white/5 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold transform skew-x-12 translate-x-32 opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-header uppercase italic tracking-tighter mb-8 leading-none">
              Individual <br /> <span className="text-gold">Contributions</span>
            </h2>
            <div className="bg-[#152438] p-8 rounded-xl border-l-8 border-gold mb-10 shadow-xl">
              <p className="text-2xl text-slate-100 font-header italic leading-relaxed">
                Help us reach our current goal of <span className="text-gold font-bold text-3xl">$5,000</span> for our Giving Tuesday student development campaign.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: 'Online Giving', desc: 'Secure one-time or recurring gifts through our encrypted portal.', icon: 'solar:card-2-bold-duotone' },
                { title: 'Corporate Matching', desc: 'Check with your employer to double your impact for our scholars.', icon: 'solar:buildings-bold-duotone' },
                { title: 'Equipment Sponsorship', desc: 'Sponsor tools like biometrics or high-tech weight room gear.', icon: 'solar:settings-bold-duotone' }
              ].map((way, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-all duration-300">
                    <Icon icon={way.icon} width="32" className="text-gold group-hover:text-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-header italic uppercase tracking-widest text-2xl text-white group-hover:text-gold transition-colors">{way.title}</h4>
                    <p className="text-sm text-slate-400 font-medium italic">{way.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative rounded-2xl text-navy overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gold"></div>
            <h3 className="text-4xl font-header uppercase italic text-navy mb-10 tracking-tight">SECURE DONATION</h3>

            <fieldset className="mb-8">
              <legend className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-4">Select Contribution Amount</legend>
              <div className="grid grid-cols-2 gap-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setSelectedAmount(amt)}
                    aria-pressed={selectedAmount === amt}
                    className={`py-4 border-2 font-header text-2xl uppercase tracking-widest transition-all rounded-lg transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold/50 ${selectedAmount === amt
                        ? 'bg-navy text-white border-navy shadow-lg'
                        : 'bg-white text-navy border-slate-200 hover:border-gold'
                      }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </fieldset>

            {selectedAmount === 'Custom' && (
              <div className="mb-6 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="relative">
                  <label htmlFor="custom-donation-amount" className="sr-only">Enter Custom Amount</label>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold" aria-hidden="true">$</span>
                  <input
                    id="custom-donation-amount"
                    type="number"
                    placeholder="Enter Custom Amount"
                    className="w-full p-4 pl-8 border-2 border-slate-200 rounded-lg font-bold text-navy outline-none focus:border-gold"
                    aria-label="Custom donation amount in dollars"
                  />
                </div>
              </div>
            )}

            <button
              className="w-full py-6 font-header text-3xl uppercase tracking-widest text-navy bg-gold shadow-2xl hover:bg-[#E2AF46] hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-navy/20 transition-all duration-300 rounded-lg mb-8"
              aria-label="Submit donation and proceed to payment"
            >
              PROCEED TO DONATE
            </button>

            <div className="flex flex-col items-center">
              <div className="flex justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 mb-6">
                <Icon icon="logos:visa" width="40" aria-label="Visa" />
                <Icon icon="logos:mastercard" width="40" aria-label="Mastercard" />
                <Icon icon="logos:paypal" width="40" aria-label="Paypal" />
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">
                <Icon icon="solar:lock-password-bold" className="inline mr-1" aria-hidden="true" /> Secure 256-bit Encrypted Transaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WAYS TO GIVE ================= */}
      <section className="bg-[#0B1A2A] py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-header uppercase italic tracking-tighter">Support Options</h2>
            <div className="h-1 w-20 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "BY CHECK",
                content: (
                  <div className="text-slate-400 font-medium leading-relaxed italic space-y-1">
                    <p>Make checks payable to <strong className="text-white">"S3 Academy"</strong> and mail to:</p>
                    <p className="text-gold font-black uppercase text-xs tracking-[0.2em] pt-4 block">S3 Academy Development Office</p>
                    <address className="text-slate-200 font-bold not-italic tracking-tight">1201 Commerce Street<br />Petersburg, VA 23803</address>
                  </div>
                ),
                icon: "solar:letter-bold-duotone"
              },
              {
                title: "EMPLOYER MATCHING",
                content: (
                  <p className="text-slate-400 font-medium leading-relaxed italic">
                    Many employers match charitable gifts. Check with your HR department to double your impact and support more student-athletes.
                  </p>
                ),
                icon: "solar:buildings-3-bold-duotone"
              },
              {
                title: "PLANNED & LEGACY GIVING",
                content: (
                  <p className="text-slate-400 font-medium leading-relaxed italic">
                    Include S3 Academy in your estate plans. Contact our Development Office to discuss bequests, trusts, and other legacy gift options.
                  </p>
                ),
                icon: "solar:star-bold-duotone"
              },
              {
                title: "GIVE BY PHONE",
                content: (
                  <p className="text-slate-400 font-medium leading-relaxed italic">
                    Call our Development Office at <strong className="text-white" aria-label="Call 804-732-2255">(804) 732-2255</strong> to make a gift over the phone with our specialized staff.
                  </p>
                ),
                icon: "solar:phone-bold-duotone"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#152438] p-12 border border-white/5 rounded-2xl group hover:border-gold/20 transition-all shadow-xl">
                <Icon icon={item.icon} className="text-gold mb-8 opacity-60 group-hover:opacity-100 transition-opacity" width="48" aria-hidden="true" />
                <h3 className="text-3xl font-header text-white mb-6 uppercase tracking-widest italic">{item.title}</h3>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUESTIONS ABOUT GIVING ================= */}
      <section className="py-32 bg-slate-50 text-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Icon icon="solar:chat-round-dots-bold-duotone" className="text-gold mx-auto mb-8 opacity-40" width="80" aria-hidden="true" />
          <h2 className="text-5xl md:text-7xl font-header uppercase italic tracking-tighter mb-4">QUESTIONS ABOUT GIVING?</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto mb-10"></div>
          <p className="text-slate-500 font-medium text-2xl mb-14 italic max-w-2xl mx-auto">Our Development Office is here to help. Reach out to discuss your giving options.</p>

          <div className="bg-white p-12 shadow-2xl rounded-3xl border border-slate-100 text-left space-y-8 max-w-2xl mx-auto transform transition-all hover:translate-y-[-8px]">
            <a href="mailto:giving@s3academy.com" className="flex items-center gap-8 group focus:outline-none focus:ring-2 focus:ring-gold rounded-xl p-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                <Icon icon="solar:letter-bold-duotone" className="text-gold group-hover:text-navy" width="32" aria-hidden="true" />
              </div>
              <span className="font-bold text-2xl text-slate-700 tracking-tight">giving@s3academy.com</span>
            </a>
            <a href="tel:8047322255" className="flex items-center gap-8 group focus:outline-none focus:ring-2 focus:ring-gold rounded-xl p-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                <Icon icon="solar:phone-bold-duotone" className="text-gold group-hover:text-navy" width="32" aria-hidden="true" />
              </div>
              <span className="font-bold text-2xl text-slate-700 tracking-tight">(804) 732-2255</span>
            </a>
            <div className="flex items-start gap-8 group p-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                <Icon icon="solar:map-point-bold-duotone" className="text-gold group-hover:text-navy" width="32" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <p className="font-black uppercase text-xs tracking-[0.3em] text-gold mb-1">Development Office</p>
                <address className="font-bold text-2xl text-slate-700 leading-tight not-italic">
                  S3 Academy<br />
                  1201 Commerce Street<br />
                  Petersburg, VA 23803
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY BANNER ================= */}
      <section className="py-24 text-center px-4 bg-gold">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-header uppercase italic tracking-tighter text-navy leading-none">
            "ATHLETICISM IS A GIFT, BUT <span className="bg-navy text-gold px-4 py-1 inline-block mt-2 shadow-2xl">HARD WORK IS A REQUIREMENT.</span>"
          </h2>
          <p className="mt-8 font-black uppercase tracking-[0.6em] text-xs text-navy/60">
            — THE S3 ACADEMY PHILOSOPHY
          </p>
        </div>
      </section>

    </div>
  );
};