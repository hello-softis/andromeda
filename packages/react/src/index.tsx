import type { ComponentProps, ReactNode } from 'react'
import './styles/index.css'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center',
  variants: {
    colors: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },
    sizes: {
      default: 'py-2 font-default',
      full: 'w-full h-11',
    },
    defaultVariants: {
      colors: 'primary',
      sizes: 'default',
    },
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function App({ children, colors, sizes, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ colors, sizes })}>
      {children}
    </button>
  )
}
