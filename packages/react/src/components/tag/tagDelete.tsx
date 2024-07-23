import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../../index.css';
import { Cross1Icon } from '@radix-ui/react-icons';

const tagDeleteVariants = tv({
  base: 'bg-grey-600 inline-flex items-center justify-center rounded-full transition-all',
  variants: {
    sizes: {
      sm: 'h-6 px-3',
      md: 'h-7 px-3',
      lg: 'h-8 px-4',
    },
    disable: {
      false: 'opacity-100 ',
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

const deleteVariant = tv({
  base: 'relative bg-grey-800 rounded-full flex items-center justify-center',
  variants: {
    sizes: {
      sm: 'h-3 w-3 ml-[6px] mr-[-8px]',
      md: 'h-4 w-4 ml-[6.5px] mr-[-7.5px]',
      lg: 'h-5 w-5 ml-[7px] mr-[-8px]',
    },
    disable: {
      false: 'cursor-pointer',
      true: 'cursor-not-allowed',
    },
  },
  defaultVariants: {
    sizes: 'md',
  }
})

export interface TagDeleteProps
  extends ComponentProps<'button'>,
    VariantProps<typeof tagDeleteVariants> {
  children: ReactNode
  disable: boolean
}

export function TagDelete({ children, sizes, disable, ...props }: TagDeleteProps) {
  return (
    <button {...props} className={tagDeleteVariants({ sizes, disable })}>
      <span className={textVariants({ sizes })}>
        {children}
      </span>
      <span className={deleteVariant({ sizes })}>
        <Cross1Icon className='text-white hover:text-grey-200 size-2' />
      </span> 
    </button>
  );
}
