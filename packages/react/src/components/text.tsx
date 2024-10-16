import type { ReactNode, ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { forwardRef } from 'react'

const textVariants = tv({
  base: 'text-grey-800 dark:text-grey-200 font-sans',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
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
    weight: 'medium',
  },
})

export interface TextProps
  extends ComponentProps<'p'>,
    VariantProps<typeof textVariants> {
  children: ReactNode
  size?: keyof typeof textVariants.variants.size
  weight?: keyof typeof textVariants.variants.weight
  className?: string
}

export const Text = forwardRef<React.ElementRef<'p'>, TextProps>(function Text(
  { children, size, weight, className, ...props },
  ref,
) {
  return (
    <p
      ref={ref}
      {...props}
      className={`${textVariants({ size, weight })} ${className}`}
    >
      {children}
    </p>
  )
})