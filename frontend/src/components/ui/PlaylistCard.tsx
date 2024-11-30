'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export interface Props {
  title: string;
  thumbnail: string;
  desc: string;
  score: number;
  version: number;
  subscribers: number;
  subscribed: boolean;
  reviews: number;
  favorite: boolean;
  tags: string[];
}

export default function PlaylistCard({
  title,
  thumbnail,
  desc,
  score,
  version,
  subscribed,
  subscribers,
  reviews,
  favorite,
  tags,
}: Props) {
  return (
    <div className="card bg-base-100 w-64 h-80 shadow-xl">
      <figure>
        <Image src={thumbnail} width={240} height={135} alt={title} />
      </figure>
      <div className="card-body p-4">
        <div className="flex gap-1">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2 className="card-title text-lg">
          <div className="badge badge-neutral">v{version}</div>
          {title}
        </h2>
        <p className="line-clamp-2 text-sm h-10 max-h-10">{desc}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <div className="badge badge-outline badge-error text-xs" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions justify-center mt-1">
          <button
            className={twMerge(
              'p-2 rounded-lg w-full transition-all hover:scale-105',
              subscribed
                ? 'bg-red-600 text-white'
                : 'text-red-600 bg-white border border-red-600'
            )}
          >
            {subscribed ? 'unsubscribe' : 'subscribe'}
          </button>
        </div>
      </div>
    </div>
  );
}
