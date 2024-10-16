import type { ReactNode, ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const tagVariants = tv({
  base: 'bg-slate-200 hover:bg-slate-300 dark:bg-grey-600 dark:hover:bg-grey-500 inline-flex items-center rounded-full transition-all gap-1 ml-5 text-grey-800 dark:text-grey-100 font-bold font-sans',
  variants: {
    size: {
      sm: 'text-xs px-3 h-6',
      md: 'text-xs px-3 h-7',
      lg: 'text-sm px-4 h-8',
    },
    disabled: {
      true: 'opacity-50 border-2 bg-transparent hover:bg-slate-100 hover:border-slate-100 dark:hover:bg-grey-500 dark:hover:border-grey-500 border-grey-200 dark:border-grey-600 text-grey-400 dark:text-grey-200',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
  },
})

const deleteTagVariants = tv({
  base: 'relative bg-slate-400 dark:bg-grey-800 rounded-full flex items-center justify-center font-sans border border-transparent',
  variants: {
    size: {
      sm: 'h-3 w-3 ml-1.5 -mr-2',
      md: 'h-4 w-4 ml-2 -mr-1.5',
      lg: 'h-5 w-5 ml-2.5 -mr-2',
    },
    disabled: {
      true: 'opacity-50 border-2 bg-transparent hover:bg-slate-100 hover:border-slate-100 dark:hover:bg-grey-500 dark:hover:border-grey-500 border-grey-200 dark:border-grey-600 text-grey-400 dark:text-grey-200',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TagProps
  extends ComponentProps<'button'>,
    VariantProps<typeof tagVariants> {
  children: ReactNode
  size?: keyof typeof tagVariants.variants.size
  disabled?: boolean
  className?: string
}

export interface DeleteIconProps
  extends VariantProps<typeof deleteTagVariants> {
  children: ReactNode
  size?: keyof typeof deleteTagVariants.variants.size
  className?: string
}

export function Tag({
  children,
  size,
  disabled,
  className,
  ...props
}: TagProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${tagVariants({ size, disabled })} ${className}`}
    >
      {children}
    </button>
  )
}

export function DeleteIcon({ size, children, className }: DeleteIconProps) {
  return (
    <span
      className={`${deleteTagVariants({ size })} ${className} hover:opacity-90`}
    >
      {children}
    </span>
  )
}

export function TagDelete({
  children,
  size,
  disabled,
  className,
  ...props
}: TagProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${tagVariants({ size, disabled })} ${className} hover:bg-slate-200 dark:hover:bg-grey-600 disabled:pointer-events-none`}
    >
      {children}
    </button>
  )
}
