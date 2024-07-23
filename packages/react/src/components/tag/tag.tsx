import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../../index.css';
import { Cross1Icon } from '@radix-ui/react-icons';

const tagVariants = tv({
  base: 'bg-grey-600 inline-flex items-center justify-center rounded-full transition-all gap-[7px] ml-[-20px]',
  variants: {
    sizes: {
      sm: 'h-6 px-3',
      md: 'h-7 px-3',
      lg: 'h-8 px-4',
    },
    disable: {
      false: 'opacity-100 hover:bg-grey-500',
      true: 'opacity-50 cursor-not-allowed bg-transparent border-2 border-solid border-grey-600',
    },
  },
  defaultVariants: {
    sizes: 'md',
  }
})

const textVariants = tv({
  base: 'font-sans font-bold',
  variants: {
    sizes: {
      sm: 'text-[10px]',
      md: 'text-xs',
      lg: 'text-sm',
    },
    disable: {
      false: 'text-white',
      true: 'text-grey-200',
    },
  },
  defaultVariants: {
    sizes: 'sm',
  }
})

export interface TagProps
  extends ComponentProps<'button'>,
    VariantProps<typeof tagVariants> {
  children: ReactNode
  disable: boolean
}

export function Tag({ children, sizes, disable, ...props }: TagProps) {
  return (
    <button {...props} className={tagVariants({ sizes, disable })}>
      <span className={textVariants({ sizes })}>
        {children}
      </span>
    </button>
  );
}
