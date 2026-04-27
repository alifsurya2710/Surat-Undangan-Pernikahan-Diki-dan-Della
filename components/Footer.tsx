import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-playfair text-white mb-4 md:mb-6 tracking-widest uppercase">Diki & Della</h2>
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="h-px w-6 md:w-8 bg-accent/30" />
            <p className="text-accent font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px]">The Beginning of Forever</p>
            <div className="h-px w-6 md:w-8 bg-accent/30" />
          </div>
          <p className="text-white/40 font-playfair italic text-base md:text-lg max-w-lg mx-auto leading-relaxed px-4">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri."
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pt-10 md:pt-12 border-t border-white/5">
          <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 flex items-center gap-2">
            © 2025 Diki & Della. Made with <Heart className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent fill-accent" />
          </p>
          <a 
            href="https://www.instagram.com/_mochalifsurya14_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-accent/60 hover:text-accent transition-all duration-300"
          >
            Development By <span className="underline underline-offset-4">Moch Alif Surya Ramadhan</span>
          </a>
        </div>
      </div>

      {/* Subtle corner gradients */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px] -mr-24 -mb-24" />
      <div className="absolute top-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px] -ml-24 -mt-24" />
    </footer>
  )
}

