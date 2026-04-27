'use client'

import { useState, useEffect } from 'react'
import { Send, User, MessageSquare, Trash2, Heart } from 'lucide-react'
import SplitText from './animate-ui/text/SplitText'

export default function Wishes() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [wishes, setWishes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  // Initialize userId and fetch wishes
  useEffect(() => {
    // Check for existing userId or create a new one
    let storedUserId = localStorage.getItem('wedding_wishes_user_id')
    if (!storedUserId) {
      storedUserId = 'user_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('wedding_wishes_user_id', storedUserId)
    }
    setUserId(storedUserId)
    
    fetchWishes()
  }, [])

  const fetchWishes = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/wishes')
      const data = await response.json()
      if (Array.isArray(data)) {
        setWishes(data)
      }
    } catch (error) {
      console.error('Failed to fetch wishes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    
    if (!name || name.trim() === '') {
      alert('Mohon isi nama Anda terlebih dahulu.')
      return
    }
    if (!message || message.trim() === '') {
      alert('Mohon isi ucapan Anda terlebih dahulu.')
      return
    }
    if (submitting) return

    try {
      setSubmitting(true)
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, ownerId: userId })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setName('')
        setMessage('')
        fetchWishes() // Refresh list
        setTimeout(() => setIsSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Failed to send wish:', error)
      alert('Gagal mengirim ucapan. Silakan periksa koneksi database Anda.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (wishId: string) => {
    if (confirm('Hapus ucapan Anda?')) {
      try {
        const response = await fetch(`/api/wishes/${wishId}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          setWishes(wishes.filter(wish => wish.id !== wishId))
        }
      } catch (error) {
        console.error('Failed to delete wish:', error)
      }
    }
  }

  return (
    <section id="wishes" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <p className="text-accent font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4">Messages & Wishes</p>
          <SplitText
            text="Ucapan & Doa ♡︎"
            tag="h2"
            className="text-4xl md:text-7xl font-playfair text-primary mb-6 md:mb-8 tracking-tight w-full"
            splitType="words"
            delay={40}
          />
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-accent/30"></div>
            <p className="text-primary/60 font-playfair italic text-base md:text-xl">Berikan doa tulus untuk awal perjalanan kami ♡︎</p>
            <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-accent/30"></div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Form Section */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <div className="glass rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <h3 className="text-xl md:text-2xl font-playfair text-primary mb-8 md:mb-10 flex items-center gap-3 md:gap-4">
                <div className="p-2.5 bg-primary/5 rounded-2xl">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                Tulis Ucapan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="space-y-2.5 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] text-primary/40 block ml-1">
                    Nama Lengkap
                  </label>
                  <div className="relative group/input">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary/30 group-focus-within/input:text-accent transition-colors" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-13 pr-6 py-4.5 md:py-5 bg-white/50 border border-transparent rounded-[1.8rem] md:rounded-[2rem] focus:bg-white focus:border-accent/30 focus:ring-0 transition-all text-sm md:text-base text-primary placeholder:text-primary/20"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] text-primary/40 block ml-1">
                    Ucapan & Doa Tulus
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-6 md:px-8 py-5 md:py-6 bg-white/50 border border-transparent rounded-[2rem] md:rounded-[2.5rem] focus:bg-white focus:border-accent/30 focus:ring-0 transition-all text-sm md:text-base text-primary placeholder:text-primary/20 resize-none"
                    placeholder="Tuliskan harapan terbaik Anda..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full bg-primary text-white font-bold py-5 md:py-6 rounded-[1.8rem] md:rounded-[2rem] md:hover:bg-accent transition-all active:scale-[0.98] flex items-center justify-center gap-3 md:gap-4 shadow-2xl shadow-primary/20 text-[10px] md:text-sm tracking-[0.2em] uppercase disabled:opacity-50"
                >
                  {submitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  {submitting ? 'Mengirim...' : 'Kirim Ucapan'}
                </button>

                {isSubmitted && (
                  <p className="text-center text-[10px] font-bold text-green-600 uppercase tracking-widest">
                    Pesan terkirim dengan kasih! ✨
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6 max-h-[600px] md:max-h-[700px] overflow-y-auto pr-2 md:pr-4 custom-scrollbar-premium">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                <p className="text-primary/40 text-[10px] font-bold uppercase tracking-[0.3em]">Memuat doa-doa...</p>
              </div>
            ) : wishes.length === 0 ? (
              <div className="text-center py-16 glass rounded-[2.5rem] border-dashed border-accent/20 border-2">
                <p className="text-primary/30 font-playfair italic text-lg">Jadilah yang pertama memberikan doa...</p>
              </div>
            ) : (
              wishes.map((wish, index) => (
                <div 
                  key={wish.id}
                  className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group/wish animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-slate-800 flex items-center justify-center text-white text-base md:text-lg font-bold shrink-0 shadow-lg">
                      {wish.name.charAt(0)}
                    </div>
                    <div className="space-y-2 md:space-y-3 flex-grow">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-primary text-sm md:text-lg tracking-tight">{wish.name}</h4>
                        <Heart className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent fill-accent" />
                      </div>
                      <p className="text-primary/70 text-sm md:text-lg leading-relaxed italic font-playfair">
                        "{wish.message}"
                      </p>
                    </div>

                    {(wish.ownerId === userId) && (
                      <button
                        onClick={() => handleDelete(wish.id)}
                        className="p-2 text-primary/10 hover:text-red-500 transition-all opacity-0 group-hover/wish:opacity-100"
                        title="Hapus Ucapan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


