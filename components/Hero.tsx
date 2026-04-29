'use client'

import { useState } from 'react'
import { ChevronUp, Scroll } from 'lucide-react'
import SplitText from './animate-ui/text/SplitText'

interface HeroProps {
  onNavigate: (tab: string) => void
  onShowCover: () => void
}

export default function Hero({ onNavigate, onShowCover }: HeroProps) {
  const [showMenu, setShowMenu] = useState(false)

  const menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'Agenda', value: 'agenda' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Hadiah', value: 'gift' },
    { label: 'Ucapan', value: 'wishes' },
  ]

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_top] md:bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary" />
      <div className="absolute inset-0 bg-primary/5" />

      {/* Simplified Decorative Elements */}
      <div className="absolute top-10 left-[5%] w-24 h-24 md:w-64 md:h-64 bg-accent/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-[5%] w-32 h-32 md:w-96 md:h-96 bg-gold-light/10 rounded-full blur-2xl animate-pulse delay-700" />

      {/* Menu Controls */}
      <div className="absolute top-5 left-5 z-40">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="glass-dark px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 md:gap-3 text-white font-medium hover:bg-white/30 transition-all transform active:scale-95 group"
        >
          <div className="bg-accent rounded-full p-1 group-hover:rotate-180 transition-transform duration-500">
            <ChevronUp className={`w-2 h-2 md:w-3 md:h-3 transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`} />
          </div>
          <span className="tracking-[0.2em] uppercase text-[8px] md:text-xs font-bold">Menu</span>
        </button>

        {/* Floating Menu Card */}
        {showMenu && (
          <div className="mt-3 glass-dark rounded-[2rem] p-5 md:p-8 w-56 md:w-72 animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
            <p className="text-accent/60 text-[8px] font-bold uppercase tracking-[0.2em] mb-4">Navigasi</p>
            <ul className="space-y-3.5 md:space-y-5">
              {menuItems.map((item) => (
                <li key={item.value}>
                  <button 
                    onClick={() => {
                      onNavigate(item.value)
                      setShowMenu(false)
                    }}
                    className="text-white hover:text-accent font-playfair text-base md:text-xl block transition-all tracking-wide text-left w-full group flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <div className="w-0 group-hover:w-5 md:group-hover:w-8 h-px bg-accent transition-all duration-300" />
                  </button>
                </li>
              ))}
              <li className="pt-4 mt-2 border-t border-white/10">
                <button 
                  onClick={onShowCover}
                  className="text-white/40 hover:text-white text-[8px] font-bold block transition-all tracking-[0.2em] text-left w-full uppercase flex items-center gap-2"
                >
                  <Scroll className="w-2.5 h-2.5" />
                  Kembali ke Sampul
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-sm md:max-w-xl px-6 flex flex-col items-center">
        <div className="glass p-8 md:p-16 rounded-[3rem] md:rounded-[6rem] flex flex-col items-center text-center space-y-6 md:space-y-12 animate-in fade-in zoom-in duration-1000">
          
          {/* Top Ornament */}
          <div className="w-16 h-16 md:w-36 md:h-36 relative">
            <img 
              src="/images/gold-logo.png" 
              alt="Decoration" 
              className="w-full h-full object-contain brightness-110"
            />
          </div>

          {/* Names */}
          <div className="space-y-4 md:space-y-6">
            <div className="overflow-hidden">
              <SplitText
                text="DIKI SETIAWAN"
                tag="h2"
                className="text-xl md:text-5xl font-playfair text-primary tracking-[0.2em] uppercase leading-none w-full"
                delay={50}
                duration={0.8}
                splitType="chars"
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-accent/20" />
              <p className="text-lg md:text-3xl italic font-playfair text-accent">&</p>
              <div className="h-px w-8 bg-accent/20" />
            </div>

            <div className="overflow-hidden">
              <SplitText
                text="DELLA ARNO VENDA"
                tag="h2"
                className="text-xl md:text-5xl font-playfair text-primary tracking-[0.2em] uppercase leading-none w-full"
                delay={80}
                duration={1}
                splitType="chars"
              />
            </div>
          </div>

          {/* Bottom Ornament */}
          <div className="w-16 h-16 md:w-36 md:h-36 relative">
            <img 
              src="/images/gold-logo.png" 
              alt="Decoration" 
              className="w-full h-full object-contain brightness-110"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-primary/20 text-[7px] font-bold uppercase tracking-[0.4em] rotate-90 origin-left ml-2">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/30 to-transparent" />
      </div>
    </section>
  )
}