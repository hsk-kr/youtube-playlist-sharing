'use client';

import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<HTMLDivElement>;

export default function Avatar({ className, ...rest }: Props) {
  return (
    <div className={twMerge('avatar w-8', className)} {...rest}>
      <div className="w-full rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
    </div>
  );
}
