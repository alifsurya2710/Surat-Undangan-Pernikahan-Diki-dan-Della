'use client'

import { useState } from 'react'
import { Copy, Check, Heart, Gift as GiftIcon } from 'lucide-react'
import CreditCard from '@/components/shared-assets/credit-card/credit-card'
import SplitText from './animate-ui/text/SplitText'

export default function Gift() {
  const [copied, setCopied] = useState<string | null>(null)

  const accounts = [
    {
      bank: 'BCA',
      number: '3790587684',
      name: 'Diki Setiawan',
      logo: '/images/bca.png'
    },
    {
      bank: 'BRI',
      number: '034401149529503',
      name: 'Della Arno Venda',
      logo: '/images/bri.png'
    },
    {
      bank: 'DANA',
      number: '08977893975',
      name: 'Diki Setiawan',
      logo: '/images/dana.png'
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="gift" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] aspect-square bg-accent/5 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-accent/5 rounded-full blur-[80px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="p-2.5 md:p-3 bg-accent/10 rounded-full animate-bounce">
              <GiftIcon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
          </div>
          <p className="text-accent font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4">Wedding Gift</p>
          <SplitText
            text="Tanda Kasih ♡︎"
            tag="h2"
            className="text-4xl md:text-7xl font-playfair text-primary mb-6 md:mb-8 tracking-tight w-full"
            splitType="words"
            delay={40}
          />
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-accent/30"></div>
            <p className="text-primary/60 font-playfair italic text-base md:text-xl max-w-2xl mx-auto">
              Tanda kasih tulus untuk mengawali perjalanan kami ♡︎.
            </p>
            <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-accent/30"></div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {accounts.map((account, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6 md:mb-8 transition-transform duration-500 md:group-hover:scale-105">
                <div className="scale-90 md:scale-100">
                  <CreditCard 
                    type="gray-dark"
                    bankName={account.bank}
                    accountNumber={account.number}
                    accountHolder={account.name}
                    logo={account.logo}
                  />
                </div>
                <div className="absolute -inset-2 md:-inset-4 border border-accent/10 rounded-[2.5rem] -z-10" />
              </div>
              
              <div className="w-full glass rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center space-y-4 md:space-y-6">
                <div className="text-center">
                  <span className="text-[9px] md:text-[10px] text-accent font-bold uppercase tracking-[0.3em] mb-1 md:mb-2 block">
                    Account Details
                  </span>
                  <span className="text-primary font-playfair font-bold tracking-wider text-lg md:text-2xl">
                    {account.number}
                  </span>
                  <p className="text-primary/40 text-[9px] md:text-xs font-bold uppercase tracking-widest mt-0.5 md:mt-1">A.N {account.name}</p>
                </div>
                
                <button 
                  onClick={() => copyToClipboard(account.number)}
                  className={`group flex items-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 w-full justify-center ${
                    copied === account.number 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-200' 
                    : 'bg-primary text-white md:hover:bg-accent shadow-2xl shadow-primary/20 active:scale-95'
                  }`}
                >
                  {copied === account.number ? (
                    <>
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Berhasil Disalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Salin Nomor Rekening
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 text-center max-w-2xl mx-auto p-8 md:p-12 glass rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden group">
          <Heart className="w-8 h-8 md:w-10 md:h-10 text-accent fill-accent/10 mx-auto mb-4 md:mb-6" />
          <p className="text-primary/60 font-playfair italic text-base md:text-xl leading-relaxed">
            "Terima kasih atas segala doa tulus dan perhatian yang Anda berikan kepada kami berdua. Kehadiran dan restu Anda adalah segalanya."
          </p>
        </div>
      </div>
    </section>
  )
}