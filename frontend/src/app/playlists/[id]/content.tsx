'use client';

import PlaylistCard from '@/components/ui/PlaylistCard';
import Image from 'next/image';
import { AiOutlineLeft } from 'react-icons/ai';
import { ComponentProps } from 'react';
import { useRouter } from 'next/navigation';

export default function PlaylistDetailContent({
  id,
  title,
  desc,
  author,
  thumbnail,
  version,
  score,
  numReviews,
  numSubscribers,
  subscribed,
  tags,
}: ComponentProps<typeof PlaylistCard>) {
  const router = useRouter();

  return (
    <div className="w-full mx-auto p-4 max-w-5xl">
      <div className="w-full flex justify-center h-60 bg-slate-50 rounded overflow-hidden relative">
        <Image
          src={thumbnail}
          width={480}
          height={270}
          alt={title}
          className="object-cover w-full opacity-90"
        />
        <div
          className="absolute left-1 top-1 size-8 bg-red-500 flex justify-center items-center text-white text-xl hover:bg-red-600 transition-all cursor-pointer rounded"
          onClick={router.back}
        >
          <AiOutlineLeft />
        </div>
      </div>
    </div>
  );
}
