'use client'

import { Heart, Instagram } from 'lucide-react'
import SplitText from './animate-ui/text/SplitText'

export default function Couple() {
  return (
    <section id="couple" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Decorative Elements - Subtle for mobile */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] aspect-square bg-accent/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] aspect-square bg-accent/5 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <p className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4">The Happy Couple</p>
          <SplitText
            text="Mempelai Berbahagia ♡︎"
            tag="h2"
            className="text-4xl md:text-7xl font-playfair text-primary mb-6 md:mb-8 leading-tight w-full"
            splitType="words"
            delay={50}
          />
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/30"></div>
            <div className="p-2 border border-accent/20 rounded-full">
              <Heart className="w-4 h-4 text-accent animate-pulse" />
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start max-w-5xl mx-auto">
          {/* Groom */}
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 group animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <div className="relative">
              <div className="w-56 h-72 md:w-72 md:h-96 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/groom.png" alt="Diki Setiawan" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              {/* Decorative Frame - Scaled for mobile */}
              <div className="absolute -inset-3 border border-accent/20 rounded-[3.5rem] md:rounded-[4.5rem] -z-0 group-hover:rotate-2 transition-transform duration-500" />
              <div className="absolute -inset-3 border border-accent/10 rounded-[3.5rem] md:rounded-[4.5rem] -z-0 rotate-3 group-hover:rotate-6 transition-transform duration-700" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl md:text-4xl font-playfair text-primary font-bold">Diki Setiawan</h3>
              <p className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">Putra dari</p>
              <div className="space-y-1">
                <p className="text-primary/60 font-playfair italic text-base md:text-lg">Bpk.</p>
                <p className="text-primary/60 font-playfair italic text-base md:text-lg">& Ibu Atih</p>
              </div>
              <div className="pt-4 flex justify-center">
                <a href="https://www.instagram.com/diki_setiawan_ven/" target="_blank" className="inline-flex items-center gap-2 text-primary/40 hover:text-accent transition-all text-[10px] font-bold uppercase tracking-widest">
                  <Instagram className="w-3.5 h-3.5" /> @DikiSetiawan
                </a>
              </div>
            </div>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 group md:mt-24 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
            <div className="relative">
              <div className="w-56 h-72 md:w-72 md:h-96 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/bride.png" alt="Della Arno Venda" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              {/* Decorative Frame - Scaled for mobile */}
              <div className="absolute -inset-3 border border-accent/20 rounded-[3.5rem] md:rounded-[4.5rem] -z-0 group-hover:-rotate-2 transition-transform duration-500" />
              <div className="absolute -inset-3 border border-accent/10 rounded-[3.5rem] md:rounded-[4.5rem] -z-0 -rotate-3 group-hover:-rotate-6 transition-transform duration-700" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-4xl font-playfair text-primary font-bold">Della Arno Venda</h3>
              <p className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">Putri dari</p>
              <div className="space-y-1">
                <p className="text-primary/60 font-playfair italic text-base md:text-lg">Bpk. Hadi Wijaya</p>
                <p className="text-primary/60 font-playfair italic text-base md:text-lg">& Ibu Mispunah Indrawati</p>
              </div>
              <div className="pt-4 flex justify-center">
                <a href="https://www.instagram.com/dllrvndaaa/" target="_blank" className="inline-flex items-center gap-2 text-primary/40 hover:text-accent transition-all text-[10px] font-bold uppercase tracking-widest">
                  <Instagram className="w-3.5 h-3.5" /> @DellaArnoVenda
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section - Refined for mobile */}
        <div className="mt-20 md:mt-32 text-center max-w-2xl mx-auto px-4 animate-in fade-in zoom-in duration-1000 delay-700 fill-mode-both">
          <div className="inline-block p-8 md:p-12 glass rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -mr-12 -mt-12" />
            <p className="text-primary/60 font-playfair italic text-base md:text-xl leading-relaxed">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
            </p>
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-[9px] mt-6 md:mt-8">— Ar-Rum: 21</p>
          </div>
        </div>
      </div>
    </section>
  )
}
