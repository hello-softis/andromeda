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
      educator: 'outline-softis-mid',
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
  default: 'bg-grey-100',
  creator: 'bg-danger-light',
  educator: 'bg-softis-mid',
  moderator: 'bg-success-light',
  company: 'bg-grey-600',
};

const textColors = {
  default: 'text-grey-900',
  creator: 'text-white',
  educator: 'text-white',
  moderator: 'text-grey-900',
  company: 'text-white',
};

const fallBackText = tv({
  base: 'text-white font-bold leading-none',
  variants: {
    sizes: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-2xl',
      xl: 'text-6xl',
    }
  }
})

export interface AvatarProps extends ComponentProps<typeof Avatar.Root>, VariantProps<typeof avatarVariants> {
  name: string;
  src: string;
  label?: string;
}

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
};

export function Avatars({ sizes, name, src, theme, label, ...props }: AvatarProps) {
  const outlineColor = themeColors[theme || 'default'];
  const textColor = textColors[theme || 'default'];
  const fallback = getInitials(name); 

  return (
    <div className="relative">
      <Avatar.Root {...props} className={avatarVariants({ sizes, theme })}>
        <Avatar.Image className="w-full h-full object-cover rounded-full bg-grey-900" src={src} alt={name} />
        <Avatar.Fallback className="flex items-center justify-center text-center w-full h-full bg-softis-light" delayMs={600}>
          <span className={fallBackText({ sizes })}>{fallback}</span>
        </Avatar.Fallback>
      </Avatar.Root>
      {label && sizes === 'xl' && (
        <div className={`absolute bottom-[-0.75rem] left-1/2 transform -translate-x-1/2 ${outlineColor} ${textColor} font-bold leading-normal text-xxs text-center px-3 py-1 rounded text-nowrap whitespace-nowrap`}>
          {label.toUpperCase()}
        </div>
      )}
    </div>
  );
}