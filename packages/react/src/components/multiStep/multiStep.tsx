import type { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { Text } from '../text';
import '../../index.css';

const multiStepVariants = tv({
  base: '',
  variants: {
    active: {
      true: 'bg-grey-100',
    },
  },
});

export interface MultiStepProps extends ComponentProps<'div'>, VariantProps<typeof multiStepVariants> {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1, ...props }: MultiStepProps) {
  return (
    <div className={multiStepVariants()} {...props}>
      <Text className='text-grey-200 font-xs'>Passo {currentStep} de {size}</Text>
      <div className='flex gap-2 mt-1'>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => (
          <div
            key={step}
            className={`h-1 flex-1 rounded-px ${currentStep >= step ? 'bg-grey-100' : 'bg-grey-600'}`}
          />
        ))}
      </div>
    </div>
  );
}
