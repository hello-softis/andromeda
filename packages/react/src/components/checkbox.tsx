import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import type { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const checkboxVariants = tv({
  base: 'bg-grey-900 rounded-sm leading-[0] cursor-pointer overflow-hidden box-border flex justify-center items-center border-2 border-solid border-grey-300 focus:border-softis-mid group aria-checked:bg-softis-light',
  variants: {
    sizes: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8'
    }
  }
});

const indicatorVariants = tv({
  variants: {
    sizes: {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    }
  }
});

export interface CheckboxProps extends ComponentProps<typeof Checkbox.Root>, VariantProps<typeof checkboxVariants> {}

export function CheckBox({ sizes, ...props }: CheckboxProps) {
  return (
    <Checkbox.Root
      {...props}
      className={checkboxVariants({sizes})}
    >
      <Checkbox.CheckboxIndicator asChild className={indicatorVariants({ sizes })}>
        <CheckIcon className='text-white font-fold' />
      </Checkbox.CheckboxIndicator>
    </Checkbox.Root>
  );
}
