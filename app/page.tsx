'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Couple from '@/components/Couple'
import Event from '@/components/Event'
import Gallery from '@/components/Gallery'
import Gift from '@/components/Gift'
import Wishes from '@/components/Wishes'
import Footer from '@/components/Footer'
import InvitationCover from '@/components/InvitationCover'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCover, setShowCover] = useState(true)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    // Simulasi loading
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  const handleOpenInvitation = () => {
    setShowCover(false)
    window.scrollTo(0, 0)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center relative overflow-hidden">
        {/* Background Ornaments for loading - Optimized for mobile */}
        <div className="absolute top-[-5%] left-[-5%] w-[35%] aspect-square bg-accent/5 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] aspect-square bg-accent/5 rounded-full blur-[80px] animate-pulse delay-1000" />
        
        <div className="text-center relative z-10 space-y-6 md:space-y-8">
          <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto">
            <div className="absolute inset-0 border-t border-accent rounded-full animate-spin"></div>
            <div className="absolute inset-1 border-r border-primary/10 rounded-full animate-spin duration-[3000ms]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-0.5 h-0.5 bg-accent rounded-full"></div>
            </div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <p className="text-primary/30 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px]">The Wedding of</p>
            <p className="text-primary font-playfair italic text-lg md:text-xl tracking-wide">Mempersiapkan Kebahagiaan...</p>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="bg-secondary min-h-screen">
      {showCover ? (
        <InvitationCover onOpen={handleOpenInvitation} />
      ) : (
        <main className="animate-in fade-in duration-1000 overflow-hidden min-h-screen flex flex-col">
          <div className="flex-grow">
            {activeTab === 'home' && (
              <div className="animate-in fade-in duration-700">
                <Hero onNavigate={setActiveTab} onShowCover={() => setShowCover(true)} />
                <Couple />
              </div>
            )}

            {activeTab === 'agenda' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Hero onNavigate={setActiveTab} onShowCover={() => setShowCover(true)} />
                <Event />
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Hero onNavigate={setActiveTab} onShowCover={() => setShowCover(true)} />
                <Gallery />
              </div>
            )}

            {activeTab === 'gift' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Hero onNavigate={setActiveTab} onShowCover={() => setShowCover(true)} />
                <Gift />
              </div>
            )}

            {activeTab === 'wishes' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Hero onNavigate={setActiveTab} onShowCover={() => setShowCover(true)} />
                <Wishes />
              </div>
            )}
          </div>
          <Footer />
        </main>
      )}
    </div>
  )
}