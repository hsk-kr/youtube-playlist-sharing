import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  color?: 'primary';
  variant?: 'solid' | 'outlined';
  hoverAnimation?: 'opacity' | 'scale';
}

export default function Button({
  color = 'primary',
  variant = 'solid',
  hoverAnimation = 'opacity',
  className,
  ...rest
}: Props) {
  let buttonClassName = 'px-4 py-2 rounded-lg transition-all';

  switch (color) {
    case 'primary':
      buttonClassName = twMerge(
        buttonClassName,
        variant === 'solid'
          ? 'bg-red-600 text-white'
          : 'text-red-600 bg-white border border-red-600'
      );
      break;
  }

  switch (hoverAnimation) {
    case 'opacity':
      buttonClassName = twMerge(buttonClassName, 'hover:opacity-80');
      break;
    case 'scale':
      buttonClassName = twMerge(buttonClassName, 'hover:scale-105');
      break;
  }

  buttonClassName = twMerge(buttonClassName, className);

  return <button className={buttonClassName} {...rest} />;
}
