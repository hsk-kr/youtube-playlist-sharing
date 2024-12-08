'use client';

import PlaylistCard from '@/components/ui/PlaylistCard';
import Image from 'next/image';
import { AiOutlineLeft } from 'react-icons/ai';
import { ComponentProps, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BodyBgColor from '@/components/ui/BodyBgColor';

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

  useEffect(() => {}, []);

  return (
    <div className="w-full mx-auto p-4 max-w-5xl">
      <BodyBgColor color="gray" />
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
      <div className="flex">
        <div className="flex-[2]">
          <div className="bg-white px-4 py-2 rounded-lg">
            <h1 className="text-4xl pb-2">{title}</h1>
            <p className="p-2 rounded text-gray-600 text-sm">{desc}</p>
          </div>
          <div>Playlist</div>
          <div>Review</div>
        </div>
        <div className="flex-1">
          <div>author information</div>
          <div>{version}</div>
          <div>subscribers and subscribe button</div>
        </div>
      </div>
    </div>
  );
}
