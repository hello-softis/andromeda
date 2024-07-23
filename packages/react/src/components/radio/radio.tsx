import type { ComponentProps } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import '../../index.css';

export interface RadioProps extends ComponentProps<typeof RadixRadioGroup.Item> {
  label: string;
  value: string;
  id: string;
  defaultChecked?: boolean
}

export function Radio({ label, value, id, defaultChecked, ...props }: RadioProps) {
  return (
    <div className="flex items-center">
      <RadixRadioGroup.Item
        className="bg-white w-6 h-6 rounded-full hover:bg-grey-100 outline-none cursor-default"
        value={value}
        id={id}
        {...props}
      >
        <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-softis-mid" />
      </RadixRadioGroup.Item>
      <label className="text-white text-md leading-none font-sans font-normal pl-4" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
