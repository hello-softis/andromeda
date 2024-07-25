import { useState, useEffect, type ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { Radio } from './radio';
import '../../index.css';

const radioGroupVariants = tv({
  base: 'flex flex-col gap-4',
  variants: {
    disabled: {
      false: 'opacity-100',
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export interface RadioGroupProps extends ComponentProps<typeof RadixRadioGroup.Root>, VariantProps<typeof radioGroupVariants> {
  children: ReactNode
  disabled?: boolean;
  defaultValue?: string;
}

export function RadioGroup({ children, disabled, defaultValue, ...props }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  return (
    <form>
      <RadixRadioGroup.Root
        className={`${radioGroupVariants({ disabled })} group`}
        aria-label="View density"
        value={selectedValue} 
        onValueChange={setSelectedValue}
        {...props}
      >
        {children}
      </RadixRadioGroup.Root>
    </form>
  );
}
