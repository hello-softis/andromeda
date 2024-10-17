import type { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import * as Switch from '@radix-ui/react-switch'

const switchVariants = tv({
  base: 'w-[72px] h-6 bg-slate-300 dark:bg-grey-800 rounded-full relative data-[state=checked]:bg-softis-mid outline-0',
  variants: {
    disabled: {
      false: '',
      true: 'opacity-50 pointer-events-none',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export interface SwitchProps
  extends ComponentProps<typeof Switch.Root>,
    VariantProps<typeof switchVariants> {
  children: ReactNode
  className?: string
  disabled?: boolean
}

export function SwitchRoot({
  children,
  className,
  disabled,
  ...props
}: SwitchProps) {
  return (
    <Switch.Root
      {...props}
      disabled={disabled}
      className={`${switchVariants({ disabled })} ${className}`}
    >
      {children}
    </Switch.Root>
  )
}

export function SwitchThumb({
  className,
  ...props
}: ComponentProps<typeof Switch.Thumb>) {
  return (
    <Switch.Thumb
      className={`block w-8 h-4 bg-grey-100 rounded-full transition-transform duration-100 ease-out translate-x-1 will-change-transform data-[state=checked]:translate-x-[34px] ${className}`}
      {...props}
    />
  )
}

SwitchRoot.displayName = 'SwitchRoot'
SwitchThumb.displayName = 'SwitchThumb'