'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard as CardIcon } from 'lucide-react'

interface CreditCardProps {
  type?: 'gray-dark' | 'gold' | 'blue' | 'classic'
  bankName?: string
  accountNumber?: string
  accountHolder?: string
  logo?: string
}

const CreditCard: React.FC<CreditCardProps> = ({
  type = 'gray-dark',
  bankName = 'BANK NAME',
  accountNumber = '•••• •••• •••• ••••',
  accountHolder = 'ACCOUNT HOLDER',
  logo
}) => {
  const getBackground = () => {
    switch (type) {
      case 'gray-dark':
        return 'bg-gradient-to-br from-zinc-800 via-zinc-900 to-black'
      case 'gold':
        return 'bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600'
      case 'blue':
        return 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900'
      default:
        return 'bg-gradient-to-br from-slate-100 to-slate-300'
    }
  }

  const getTextColor = () => {
    return type === 'classic' ? 'text-slate-800' : 'text-white'
  }

  const getSecondaryTextColor = () => {
    return type === 'classic' ? 'text-slate-500' : 'text-white/60'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative w-full aspect-[1.58/1] min-h-[190px] rounded-[20px] md:rounded-[24px] px-6 py-7 md:px-8 md:py-8 shadow-2xl overflow-hidden ${getBackground()} ${getTextColor()} group`}
    >
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl md:blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl md:blur-2xl pointer-events-none" />
      
      {/* Gloss overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Card Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Top Row: Bank Name and Chip */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium opacity-70">
              Personal Account
            </span>
            <span className="text-lg md:text-xl font-bold tracking-tight">
              {bankName}
            </span>
          </div>
          <div className="w-10 h-7 md:w-12 md:h-9 bg-gradient-to-br from-amber-200 to-amber-500 rounded-md relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 border border-black/10 rounded-md" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-black/20" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-black/20" />
          </div>
        </div>

        {/* Middle Row: Card Number */}
        <div className="my-2">
          <p className={`font-mono drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis ${
            accountNumber.length > 13 
              ? 'text-base sm:text-lg md:text-xl tracking-normal' 
              : 'text-lg sm:text-xl md:text-2xl tracking-[0.05em] md:tracking-[0.1em]'
          }`}>
            {accountNumber.match(/.{1,4}/g)?.join(' ')}
          </p>
        </div>

        {/* Bottom Row: Holder Name and Icon */}
        <div className="flex justify-between items-center mb-1">
          <div className="flex flex-col min-w-0">
            <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold ${getSecondaryTextColor()}`}>
              Account Holder
            </span>
            <span className="text-sm md:text-base font-semibold tracking-wide truncate mt-0.5">
              {accountHolder}
            </span>
          </div>
          <div className="w-11 h-11 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center p-2 shadow-lg shrink-0 ml-3 border border-white/20">
            {logo ? (
                <img 
                  src={logo} 
                  alt={bankName} 
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
            ) : (
                <CardIcon className="w-5 h-5 md:w-8 md:h-8 text-black/20" />
            )}
          </div>
        </div>
      </div>

      {/* Subtle Border Overlay */}
      <div className="absolute inset-0 border border-white/10 rounded-[20px] md:rounded-[24px] pointer-events-none" />

      {/* Overlay Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </motion.div>
  )
}

export default CreditCard
