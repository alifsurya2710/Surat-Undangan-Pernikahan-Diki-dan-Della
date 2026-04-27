'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LiquidButtonProps extends HTMLMotionProps<'button'> {
  delay?: string;
  fillHeight?: string;
  hoverScale?: number;
  tapScale?: number;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ 
    children, 
    className, 
    delay = '0s', 
    fillHeight = '100%', 
    hoverScale = 1.05, 
    tapScale = 0.95, 
    ...props 
  }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        className={cn(
          'group relative inline-flex items-center justify-center overflow-hidden transition-colors duration-300',
          className
        )}
        style={{
          // @ts-ignore
          '--liquid-button-fill-height': fillHeight,
          '--liquid-button-delay': delay,
        }}
        {...props}
      >
        <div className="relative z-10 flex items-center justify-center gap-[inherit] w-full h-full">
          {children}
        </div>
        <div 
          className="absolute inset-x-0 bottom-0 z-0 h-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[var(--liquid-button-fill-height)]"
          style={{
            backgroundColor: 'var(--liquid-button-background-color, var(--color-primary))',
            transitionDelay: 'var(--liquid-button-delay)',
          }}
        />
      </motion.button>
    );
  }
);

LiquidButton.displayName = 'LiquidButton';