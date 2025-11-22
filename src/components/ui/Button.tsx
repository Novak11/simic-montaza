'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background',
          {
            'bg-accent hover:bg-accent-hover text-white focus:ring-accent': variant === 'primary',
            'bg-secondary hover:bg-secondary/80 text-white focus:ring-secondary': variant === 'secondary',
            'border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent': variant === 'outline',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
            'animate-glow-pulse': glow,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
