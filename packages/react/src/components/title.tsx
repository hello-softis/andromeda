import React, { ReactNode, ComponentProps, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const titleVariants = tv({
  base: 'text-grey-900 dark:text-grey-100 font-sans',
  variants: {
    size: {
      xs: 'text-md',
      sm: 'text-xl',
      base: 'text-2xl',
      lg: 'text-4xl',
      xl: 'text-6xl',
      '2xl': 'text-7xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
  },
})

export interface TitleProps
  extends ComponentProps<'h1'>,
    VariantProps<typeof titleVariants> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: keyof typeof titleVariants.variants.size
  weight?: keyof typeof titleVariants.variants.weight
  className?: string
}

export const Title = forwardRef<HTMLElement, TitleProps>(function Title(
  { children, size, weight, className, as = 'h1', ...props },
  ref,
) {
  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: `${titleVariants({ size, weight })} ${className}`,
    },
    children,
  )
})

Title.displayName = 'Title'