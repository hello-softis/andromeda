import { useState, useEffect, type ComponentProps } from 'react';
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
  disabled?: boolean;
  defaultValue?: string;
}

export function RadioGroup({ disabled, defaultValue, ...props }: RadioGroupProps) {
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
        <Radio label="Default" value="default" id="r1" />
        <Radio label="Comfortable" value="comfortable" id="r2" />
        <Radio label="Compact" value="compact" id="r3" />
      </RadixRadioGroup.Root>
    </form>
  );
}
