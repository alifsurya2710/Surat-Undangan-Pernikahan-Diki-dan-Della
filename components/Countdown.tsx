'use client'

import { useEffect, useState } from 'react'
import CountdownTimer from 'react-countdown'

export default function Countdown() {
  const [targetDate, setTargetDate] = useState<Date | null>(null)

  useEffect(() => {
    // Set target date: 15 June 2025, 10:00 AM
    setTargetDate(new Date(2025, 5, 15, 10, 0, 0))
  }, [])

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <div className="text-2xl text-pink-600">Hari Bahagia Telah Tiba Selamat Yaa! ❤️</div>
    }
    
    return (
      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-lg mx-auto">
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-3 md:p-6 border border-slate-100">
            <div className="text-2xl md:text-5xl font-bold text-slate-800">{days}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mt-1">Hari</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-3 md:p-6 border border-slate-100">
            <div className="text-2xl md:text-5xl font-bold text-slate-800">{hours}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mt-1">Jam</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-3 md:p-6 border border-slate-100">
            <div className="text-2xl md:text-5xl font-bold text-slate-800">{minutes}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mt-1">Menit</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-3 md:p-6 border border-slate-100">
            <div className="text-2xl md:text-5xl font-bold text-slate-800">{seconds}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mt-1">Detik</div>
          </div>
        </div>
      </div>
    )
  }

  if (!targetDate) return null

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-playfair text-slate-800 mb-4 tracking-tight">
            Menuju Hari Bahagia ❤️
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>
        </div>
        <CountdownTimer date={targetDate} renderer={renderer} />
      </div>
    </section>
  )
}