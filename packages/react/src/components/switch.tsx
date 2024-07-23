import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import * as RadixSwitch from '@radix-ui/react-switch';
import '../index.css';

const switchVariants = tv({
  base: 'w-[72px] h-6 bg-grey-900 rounded-full relative data-[state=checked]:bg-softis-mid outline-0 cursor-default',
  variants: {
    disabled: {
      false: 'opacity-100',
      true: 'opacity-50 cursor-not-allowed',
    }
  },
  defaultVariants: {
    disabled: false,
  },
});

const textVariants = tv({
  base: 'text-md leading-none font-sans font-normal',
  variants: {
    disabled: {
      false: 'opacity-100 text-text-base',
      true: 'opacity-50 text-text-base',
    }
  },
  defaultVariants: {
    disabled: false,
  },
})

export interface SwitchProps extends ComponentProps<typeof RadixSwitch.Root>, VariantProps<typeof switchVariants> {
  children: ReactNode
  disabled: boolean
}

export function Switch({ children, disabled, ...props }: SwitchProps) {
  return (
    <form>
      <div className="flex items-center gap-4 w-full">
        <RadixSwitch.Root className={switchVariants({ disabled })}
          id="airplane-mode"
          disabled={disabled}
          {...props}
        >
          <RadixSwitch.Thumb className="block w-8 h-4 bg-grey-100 rounded-full transition-transform duration-100 ease-out translate-x-1 will-change-transform data-[state=checked]:translate-x-[34px] group-disabled:cursor-not-allowed" />
        </RadixSwitch.Root>
        <label className={textVariants({ disabled })} htmlFor="airplane-mode">
          {children}
        </label>
      </div>
    </form>
  );
}
