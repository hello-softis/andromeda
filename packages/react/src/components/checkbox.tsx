import type { ReactNode, ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import * as Checkbox from '@radix-ui/react-checkbox'

const checkboxVariants = tv({
  base: 'bg-grey-800 rounded-sm leading-[0] cursor-pointer overflow-hidden box-border flex justify-center items-center border-2 border-solid border-grey-300 focus:border-2 focus:border-solid focus:border-softis-mid group aria-checked:bg-softis-light aria-checked:border-softis-light',
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const checkboxIndicatorVariants = tv({
  variants: {
    size: {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface CheckboxProps
  extends VariantProps<typeof Checkbox.Root>,
    VariantProps<typeof checkboxVariants> {
  children: ReactNode
  className?: string
  size?: keyof typeof checkboxVariants.variants.size
}

export function CheckboxRoot({
  children,
  className,
  disabled,
  size,
  ...props
}: ComponentProps<typeof Checkbox.Root> & CheckboxProps) {
  return (
    <Checkbox.Root
      {...props}
      disabled={disabled}
      className={`${checkboxVariants({ size, disabled })} ${className}`}
    >
      {children}
    </Checkbox.Root>
  )
}

export function CheckboxIndicator({
  className,
  size,
  children,
  ...props
}: ComponentProps<typeof Checkbox.Indicator> & CheckboxProps) {
  return (
    <Checkbox.Indicator
      asChild
      className={`${checkboxIndicatorVariants({ size })} ${className}`}
      {...props}
    >
      {children}
    </Checkbox.Indicator>
  )
}

CheckboxRoot.displayName = 'CheckboxRoot'
CheckboxIndicator.displayName = 'CheckboxIndicator'