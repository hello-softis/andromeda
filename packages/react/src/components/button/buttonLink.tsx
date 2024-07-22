import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../../index.css';

const linkVariants = tv({
  base: 'font-sans font-medium relative transition-all',
  variants: {
    colors: {
      primary: 'text-nebula-400 after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out',
      secondary: 'text-grey-200 hover:text-grey-100',
      tertiary: 'text-grey-300 hover:text-grey-200',
    },
    sizes: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
    disable: {
      false: 'opacity-100 cursor-pointer',
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    colors: 'primary',
    sizes: 'md',
  }
})

export interface LinkProps
  extends ComponentProps<'a'>,
    VariantProps<typeof linkVariants> {
  children: ReactNode
  disable: boolean
}

export function Link({ children, colors, sizes, disable, ...props }: LinkProps) {
  return (
    <a {...props} className="relative">
      <span className={linkVariants({ colors, sizes, disable,  })}>
        {children}
      </span>
    </a>
  );
}
