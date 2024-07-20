import * as Avatar from '@radix-ui/react-avatar';
import type { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const avatarVariants = tv({
  base: 'rounded-full inline-block overflow-hidden outline',
  variants: {
    sizes: {
      xs: 'w-8 h-8 outline-[3px] outline-offset-4',
      sm: 'w-12 h-12 outline-[3px] outline-offset-4',
      md: 'w-14 h-14 outline-4 outline-offset-8',
      lg: 'w-20 h-20 outline-4 outline-offset-8',
      xl: 'w-40 h-40 outline-[5px] outline-offset-8',
    },
    theme: {
      default: 'outline-grey-100',
      creator: 'outline-danger-light',
      educator: 'outline-softis-light',
      moderator: 'outline-success-light',
      company: 'outline-grey-600'
    }
  },
  defaultVariants: {
    sizes: 'xl',
    theme: 'default'
  },
});

const themeColors = {
  default: 'grey-100',
  creator: 'danger-light',
  educator: 'softis-light',
  moderator: 'success-light',
  company: 'grey-600',
};

const textColors = {
  default: 'grey-900',
  creator: 'white',
  educator: 'white',
  moderator: 'grey-900',
  company: 'white',
};

export interface AvatarProps extends ComponentProps<typeof Avatar.Root>, VariantProps<typeof avatarVariants> {
  name: string
  src: string
  label?: string
}

export function Avatars({ sizes, name, src, theme, label, ...props }: AvatarProps) {
  const outlineColor = themeColors[theme || 'default'];
  const textColor = textColors[theme || 'default'];

  return (
    <div className="relative">
      <Avatar.Root {...props} className={avatarVariants({ sizes, theme })}>
        <Avatar.Image className="w-full h-full object-cover rounded-full bg-softis-light" src={src} alt={name} />
      </Avatar.Root>
      {label && sizes === 'xl' && (
        <div className={`absolute bottom-[-0.75rem] left-1/2 transform -translate-x-1/2 bg-${outlineColor} text-${textColor} font-semibold text-xs px-2 py-1 rounded`}>
          {label}
        </div>
      )}
    </div>
  );
}
