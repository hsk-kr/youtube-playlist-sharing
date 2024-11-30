'use client';

import { twMerge } from 'tailwind-merge';

export default function Tag({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      role="button"
      className={twMerge(
        'px-4 py-2 rounded-lg text-sm',
        active
          ? 'bg-red-600 text-white font-bold'
          : 'bg-white border border-slate-500 text-red-600 hover:bg-red-500 hover:text-white transition-all'
      )}
    >
      {label}
    </div>
  );
}
