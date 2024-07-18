import type { ComponentProps } from 'react';
import '../index.css';

export interface BoxProps extends ComponentProps<'div'> {
}

export function Box() {
  return (
    <div className='w-80 h-80 rounded-md bg-shape-secondary hover:bg-shape-tertiary'>
    </div>
  );
}