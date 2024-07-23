import { useEffect, useState, type ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import * as RadixSlider from '@radix-ui/react-slider';
import '../index.css';

const sliderVariants = tv({
  base: 'relative flex items-center select-none touch-none w-full cursor-grab',
  variants: {
    disabled: {
      false: 'opacity-100',
      true: 'opacity-50 cursor-not-allowed'
    }
  }
})

export interface SliderProps extends ComponentProps<typeof RadixSlider.Root>, VariantProps<typeof sliderVariants> {
  disabled: boolean;
  initialValue: number[];
  maxValue: number;
}

export function Slider({ disabled, initialValue, maxValue, ...props }: SliderProps) {
  const [defaultValue, setDefaultValue] = useState<number[]>(initialValue);
  const [maximumValue, setMaximumValue] = useState(maxValue);

  useEffect(() => {
    setDefaultValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setMaximumValue(maxValue);
  }, [maxValue]);

  return (
    <div className='w-full max-w-[300px]'>
      <RadixSlider.Root
        className={sliderVariants({ disabled })}
        disabled={disabled}
        defaultValue={defaultValue}
        max={maximumValue}
        {...props}
      >
        <RadixSlider.Track className="bg-grey-950 relative grow rounded-full h-2">
          <RadixSlider.Range className="absolute bg-softis-mid rounded-full h-full" />
        </RadixSlider.Track>  
        <RadixSlider.Thumb
          className="block w-4 h-4 bg-softis-light shadow-softis-mid rounded-[10px] transition-all focus:outline-none hover:shadow-[0_0_0_8px] hover:shadow-[#996dff29] active:shadow-[0_0_0_12px] active:shadow-[#996dff29] active:cursor-grabbing"
          aria-label="Volume"
        />
      </RadixSlider.Root>
    </div>
  );
}
