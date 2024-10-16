import type { ReactNode, ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { forwardRef } from 'react'
import { Spinner } from './Spinner'

const buttonVariants = tv({
  base: 'flex items-center justify-center rounded-md transition-all focus:shadow-md w-auto font-bold gap-3',
  variants: {
    color: {
      primary:
        'bg-softis-mid hover:bg-softis-light text-grey-900 dark:text-grey-50',
      secondary:
        'border-2 border-solid border-softis-mid hover:border-softis-light text-grey-900 dark:text-grey-50',
      tertiary:
        'hover:bg-grey-500 dark:hover:bg-shape-tertiary text-grey-900 dark:text-grey-50',
      danger:
        'bg-slate-50 dark:bg-shape-secondary hover:bg-slate-100 hover:dark:bg-shape-tertiary text-danger-base dark:text-danger-light',
    },
    size: {
      xs: 'h-6 px-4 text-xs',
      sm: 'h-7 px-4 text-xs',
      md: 'h-8 px-4 text-xs',
      lg: 'h-10 px-6 text-sm',
      xl: 'h-12 px-8 text-sm',
    },
    full: {
      true: 'w-full',
      false: '',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    full: false,
    disabled: false,
  },
})

const buttonIconVariants = tv({
  base: 'flex items-center justify-center rounded-md transition-all focus:outline-none',
  variants: {
    color: {
      primary: 'bg-softis-mid hover:bg-softis-light',
      secondary:
        'bg-slate-100 hover:bg-grey-50 dark:bg-shape-secondary dark:hover:bg-shape-tertiary',
      tertiary: 'dark:hover:bg-shape-tertiary hover:bg-slate-50',
    },
    size: {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'lg',
    disabled: false,
  },
})

const buttonLinkVariants = tv({
  base: 'font-medium relative transition-all after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out',
  variants: {
    color: {
      primary:
        'text-nebula-400 hover:text-nebula-500 dark:text-nebula-300 dark:hover:text-nebula-200',
      secondary:
        'text-grey-200 hover:text-grey-100 dark:text-grey-100 dark:hover:text-grey-50',
      tertiary:
        'text-grey-300 hover:text-grey-200 dark:text-grey-200 dark:hover:text-grey-100',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    disabled: false,
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
  color?: keyof typeof buttonVariants.variants.color
  size?: keyof typeof buttonVariants.variants.size
  full?: boolean
  disabled?: boolean
  loading?: boolean
}

export interface ButtonIconProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonIconVariants> {
  children: ReactNode
  className?: string
  color?: keyof typeof buttonIconVariants.variants.color
  size?: keyof typeof buttonIconVariants.variants.size
  disabled?: boolean
  loading?: boolean
}

export interface ButtonLinkProps
  extends ComponentProps<'a'>,
    VariantProps<typeof buttonLinkVariants> {
  children: ReactNode
  className?: string
  color?: keyof typeof buttonLinkVariants.variants.color
  size?: keyof typeof buttonLinkVariants.variants.size
  disabled?: boolean
}

export const Button = forwardRef<React.ElementRef<'button'>, ButtonProps>(
  function Button(
    { children, className, disabled, full, color, size, ...props },
    ref,
  ) {
    return (
      <button
        {...props}
        ref={ref}
        disabled={disabled}
        className={`${buttonVariants({ color, size, full, disabled })} ${className}`}
      >
        {children}
      </button>
    )
  },
)

export function ButtonEmptyState({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      {...props}
      className={`bg-transparent max-w-80 w-full h-12 px-3 border border-solid border-grey-600 hover:border-[3px] hover:border-grey-500 flex items-center justify-center rounded-md transition-all focus:shadow-md text-white hover:text-grey-100 font-sans font-normal text-lg gap-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      {children}
    </button>
  )
}

export function ButtonIcon({
  children,
  className,
  color,
  size,
  disabled,
  loading = false,
  ...props
}: ButtonIconProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${buttonIconVariants({ color, size, disabled })} ${className}`}
    >
      {loading === false ? (
        <span className="text-grey-800 dark:text-slate-50">{children}</span>
      ) : (
        <Spinner />
      )}
    </button>
  )
}

export function ButtonLink({
  children,
  className,
  color,
  size,
  disabled,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={`${buttonLinkVariants({ color, size, disabled })} ${className}`}
    >
      {children}
    </a>
  )
}
