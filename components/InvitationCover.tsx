'use client'

import { MailOpen } from 'lucide-react'
import { LiquidButton } from './animate-ui/primitives/buttons/liquid'
import SplitText from './animate-ui/text/SplitText'

interface InvitationCoverProps {
  onOpen: () => void
}

export default function InvitationCover({ onOpen }: InvitationCoverProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-primary">
      {/* Cinematic Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_top] md:bg-center scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      
      {/* Luxury Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/40 to-primary/95" />
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-[1px]" />

      {/* Decorative elements */}
      <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-white/20 rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-[25%] right-[15%] w-1 h-1 bg-accent/20 rounded-full blur-sm animate-pulse delay-700" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-lg mx-auto">
        <div className="space-y-6 md:space-y-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 md:w-12 h-px bg-accent/30" />
            <SplitText
              text="The Wedding Invitation"
              className="text-accent/80 font-bold uppercase tracking-[0.4em] text-[7px] md:text-[10px] w-full"
              delay={30}
              duration={0.8}
              splitType="words"
            />
            <div className="w-8 md:w-12 h-px bg-accent/30" />
          </div>
          
          <div className="space-y-1.5 md:space-y-3">
            <div className="overflow-hidden">
              <SplitText
                text="The Wedding Of"
                tag="h1"
                className="text-white/30 font-playfair italic text-xs md:text-xl tracking-widest leading-tight w-full"
                delay={50}
                duration={1}
                splitType="words"
              />
            </div>

            <div className="py-2 space-y-2 md:space-y-4">
              <div className="overflow-hidden">
                <SplitText
                  text="DIKI SETIAWAN"
                  tag="h2"
                  className="text-xl md:text-5xl font-playfair text-white tracking-[0.2em] uppercase leading-none w-full drop-shadow-2xl"
                  delay={50}
                  duration={1}
                  splitType="chars"
                />
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-white/20" />
                <p className="text-accent font-playfair italic text-lg md:text-3xl">&</p>
                <div className="h-px w-8 bg-white/20" />
              </div>

              <div className="overflow-hidden">
                <SplitText
                  text="DELLA ARNO VENDA"
                  tag="h2"
                  className="text-xl md:text-5xl font-playfair text-white tracking-[0.2em] uppercase leading-none w-full drop-shadow-2xl"
                  delay={80}
                  duration={1}
                  splitType="chars"
                />
              </div>
            </div>
          </div>

          <div className="max-w-[200px] md:max-w-md mx-auto">
            <p className="text-white/50 font-playfair italic text-[9px] md:text-base leading-relaxed animate-in fade-in duration-1000 delay-500">
              Menemukan cinta dalam kesederhanaan, menyatukan langkah dalam kebahagiaan yang abadi.
            </p>
          </div>

          <div className="pt-2 md:pt-8 animate-in fade-in zoom-in duration-700 delay-700 fill-mode-both">
            <LiquidButton
              onClick={onOpen}
              className="group relative inline-flex items-center gap-2.5 bg-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-[8px] md:text-xs tracking-[0.2em] uppercase shadow-2xl transition-all active:scale-95 [--liquid-button-background-color:var(--color-accent)]"
            >
              <MailOpen className="w-3 h-3 md:w-4 md:h-4 text-primary group-hover:text-white transition-colors duration-300" />
              <span className="text-primary group-hover:text-white transition-colors duration-300">Buka Undangan</span>
            </LiquidButton>
          </div>
        </div>
      </div>

      {/* Decorative Bottom */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 text-center animate-bounce">
        <div className="inline-flex flex-col items-center gap-2">
          <p className="text-accent/20 text-[7px] uppercase tracking-[0.5em] font-bold">
            Scroll
          </p>
          <div className="w-px h-4 md:h-6 bg-accent/20" />
        </div>
      </div>
    </div>
  )
}