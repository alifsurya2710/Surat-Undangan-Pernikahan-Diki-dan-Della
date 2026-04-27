'use client'

import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react'
import SplitText from './animate-ui/text/SplitText'

export default function Event() {
  const events = [
    {
      title: "Akad Nikah",
      date: "Minggu, 11 Mei 2025",
      time: "08:00 WIB - Selesai",
      location: "Kediaman Mempelai Wanita",
      address: "Blok. Sabtu Rt.02/Rw.05 Ds. Karanganyar Kec. Dawuan Kab. Majalengka",
      mapLink: "https://maps.app.goo.gl/yQ3qR5R6R7R8R9"
    },
    {
      title: "Resepsi Pernikahan",
      date: "Minggu, 11 Mei 2025",
      time: "10:00 WIB - Selesai",
      location: "Kediaman Mempelai Wanita",
      address: "Blok. Sabtu Rt.02/Rw.05 Ds. Karanganyar Kec. Dawuan Kab. Majalengka",
      mapLink: "https://maps.app.goo.gl/yQ3qR5R6R7R8R9"
    }
  ]

  return (
    <section id="schedule" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <p className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Save The Date</p>
          <SplitText
            text="Agenda Bahagia ♡︎"
            tag="h2"
            className="text-4xl md:text-7xl font-playfair text-primary mb-6 md:mb-8 tracking-tight w-full"
            splitType="words"
            delay={40}
          />
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/30"></div>
            <p className="text-primary/60 font-playfair italic text-base md:text-xl">Momen sakral penyatuan janji suci ♡︎</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30"></div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group glass rounded-[2.5rem] overflow-hidden transition-all duration-700 md:hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8 md:p-12 space-y-8 md:space-y-10">
                <div className="space-y-3 relative">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">The Celebration</span>
                  <h3 className="text-3xl md:text-5xl font-playfair text-primary tracking-wide relative z-10">{event.title}</h3>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-accent/20 group-hover:bg-accent transition-colors duration-500" />
                </div>

                <div className="space-y-6 md:space-y-8">
                  {/* Date */}
                  <div className="flex items-center gap-5 md:gap-6 group/item">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-accent/10 flex items-center justify-center text-accent shadow-sm group-hover/item:bg-accent group-hover/item:text-white transition-all duration-500">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-primary/40 mb-0.5 md:mb-1">Hari & Tanggal</p>
                      <p className="text-primary font-medium text-base md:text-xl">{event.date}</p>
                    </div>
                  </div>
                  
                  {/* Time */}
                  <div className="flex items-center gap-5 md:gap-6 group/item">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-accent/10 flex items-center justify-center text-accent shadow-sm group-hover/item:bg-accent group-hover/item:text-white transition-all duration-500">
                      <Clock className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-primary/40 mb-0.5 md:mb-1">Waktu Acara</p>
                      <p className="text-primary font-medium text-base md:text-xl">{event.time}</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start gap-5 md:gap-6 group/item">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-accent/10 flex items-center justify-center text-accent shadow-sm shrink-0 group-hover/item:bg-accent group-hover/item:text-white transition-all duration-500">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-primary/40 mb-0.5 md:mb-1">Lokasi Acara</p>
                      <p className="text-primary font-medium text-base md:text-xl leading-snug">{event.location}</p>
                      <p className="text-xs md:text-sm text-primary/50 mt-1.5 md:mt-2 leading-relaxed max-w-[240px] md:max-w-xs">{event.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 md:pt-6">
                  <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] py-4 md:py-5 rounded-2xl hover:bg-accent transition-all active:scale-[0.98] shadow-2xl shadow-primary/20 group/btn"
                  >
                    <span>Petunjuk Lokasi</span>
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

