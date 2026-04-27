'use client'

import { useState } from 'react'
import { Send, User, Mail, Users, Calendar, Heart } from 'lucide-react'
import SplitText from './animate-ui/text/SplitText'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', attendance: '', guests: '1', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="rsvp" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-12 md:mb-16 overflow-hidden">
          <SplitText
            text="Konfirmasi Kehadiran Anda"
            tag="h2"
            className="text-4xl md:text-5xl font-playfair text-slate-800 mb-4 tracking-tight w-full"
            splitType="words"
            delay={40}
          />
          <p className="text-slate-500 font-playfair italic">Kehadiran Anda adalah kebahagiaan bagi kami ❤️</p>
          <div className="w-16 h-px bg-slate-200 mx-auto mt-6"></div>
        </header>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-6 md:p-12 relative">
            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-[0.05] pointer-events-none">
                <Heart className="w-24 h-24 md:w-32 md:h-32 text-slate-900 fill-slate-900" />
            </div>

            <p className="text-center text-slate-500 mb-8 md:mb-10 text-xs md:text-sm leading-relaxed px-4">
              Mohon konfirmasi kehadiran Anda sebelum tanggal <br className="hidden md:block" /> 
              <span className="font-bold text-slate-800 uppercase tracking-widest text-[10px] md:text-xs">1 Mei 2026</span>
            </p>
            
            {isSubmitted && (
              <div className="mb-6 md:mb-8 p-4 bg-slate-900 text-white rounded-2xl text-center animate-in zoom-in duration-300">
                <p className="font-playfair italic text-sm md:text-base">Terima kasih! Konfirmasi Anda telah kami terima. 🙏</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block ml-1">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 md:py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all text-sm md:text-base text-slate-700 placeholder:text-slate-300"
                      placeholder="Nama Anda"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 md:py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all text-sm md:text-base text-slate-700 placeholder:text-slate-300"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block ml-1">
                    Status Kehadiran
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="attendance"
                      required
                      value={formData.attendance}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 md:py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all text-sm md:text-base text-slate-700 appearance-none cursor-pointer"
                    >
                      <option value="">Status Kehadiran</option>
                      <option value="hadir">Akan Hadir</option>
                      <option value="tidak">Berhalangan Hadir</option>
                      <option value="ragu">Masih Ragu</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block ml-1">
                    Jumlah Tamu
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 md:py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all text-sm md:text-base text-slate-700 appearance-none cursor-pointer"
                    >
                      {[1,2,3,4].map(num => (
                        <option key={num} value={num}>{num} Orang</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block ml-1">
                  Ucapan & Doa
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 md:px-6 py-3.5 md:py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all text-sm md:text-base text-slate-700 placeholder:text-slate-300"
                  placeholder="Tulis ucapan dan doa tulus Anda..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-bold py-4 md:py-5 rounded-2xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-slate-200 text-sm md:text-base"
              >
                <Send className="w-5 h-5" />
                Kirim Konfirmasi
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-200 rounded-full blur-3xl -z-0 opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-200 rounded-full blur-3xl -z-0 opacity-20 translate-x-1/2 translate-y-1/2" />
    </section>
  )
}