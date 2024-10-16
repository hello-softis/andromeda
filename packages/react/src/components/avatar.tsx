'use client'

import type { ReactNode, ComponentProps } from 'react'
import { createContext, useContext } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import * as Avatar from '@radix-ui/react-avatar'

// create a context to store the theme
const AvatarThemeContext = createContext<
  'creator' | 'default' | 'educator' | 'moderator' | 'company' | undefined
>(undefined)

function useAvatarTheme() {
  const context = useContext(AvatarThemeContext)
  if (!context) {
    throw new Error('useAvatarTheme must be used within an AvatarRoot')
  }
  return context
}

const avatarRootVariants = tv({
  base: 'rounded-full inline-block overflow-hidden outline text-slate-100 font-bold leading-none',
  variants: {
    size: {
      xs: 'w-8 h-8 outline-1 outline-offset-2 text-xs',
      sm: 'w-12 h-12 outline-[2px] outline-offset-[3px] text-sm',
      md: 'w-14 h-14 outline-[2px] outline-offset-4 text-md',
      lg: 'w-20 h-20 outline-[3px] outline-offset-4 text-2xl',
      xl: 'w-40 h-40 outline-[4px] outline-offset-[6px] text-6xl',
    },
    theme: {
      default: 'outline-grey-100',
      creator: 'outline-danger-light',
      educator: 'outline-softis-mid',
      moderator: 'outline-success-light',
      company: 'outline-grey-600',
    },
  },
  defaultVariants: {
    size: 'md',
    theme: 'creator',
  },
})

const labelVariants = tv({
  variants: {
    theme: {
      default: 'bg-grey-100 text-grey-800',
      creator: 'bg-danger-light text-slate-50',
      educator: 'bg-softis-mid text-slate-50',
      moderator: 'bg-success-light text-grey-800',
      company: 'bg-grey-600 text-slate-50',
    },
  },
})

export interface AvatarProps
  extends ComponentProps<typeof Avatar.Root>,
    VariantProps<typeof avatarRootVariants> {
  children?: ReactNode
  src?: string
  fallback?: string
  alt?: string
  className?: string
  name?: string
}

export function AvatarRoot({
  children,
  className,
  size,
  theme = 'default',
}: AvatarProps) {
  return (
    <AvatarThemeContext.Provider value={theme}>
      <div className="relative w-min">
        <Avatar.Root
          className={`${avatarRootVariants({ size, theme })} ${className}`}
        >
          {children}
        </Avatar.Root>
      </div>
    </AvatarThemeContext.Provider>
  )
}

export function AvatarImage({ className, src, alt }: AvatarProps) {
  return (
    <Avatar.Image
      src={src}
      alt={alt}
      className={`w-full h-full object-cover rounded-full ${className}`}
    />
  )
}

export function AvatarFallback({ children, className }: AvatarProps) {
  return (
    <Avatar.Fallback
      className={`flex items-center justify-center text-center w-full h-full bg-softis-light ${className}`}
    >
      {children}
    </Avatar.Fallback>
  )
}

export function Label({ children, className }: AvatarProps) {
  const theme = useAvatarTheme()
  const labelTheme = labelVariants({ theme })

  return (
    <div
      className={`absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 font-bold leading-normal text-xxs text-center px-3 py-1 rounded text-nowrap whitespace-nowrap ${labelTheme} ${className}`}
    >
      {children}
    </div>
  )
}