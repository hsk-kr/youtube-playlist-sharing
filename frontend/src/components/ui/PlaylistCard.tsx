'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { AiFillStar, AiOutlineTeam } from 'react-icons/ai';
import Button from './Button';

export interface Props {
  title: string;
  thumbnail: string;
  desc: string;
  score: number;
  version: number;
  numSubscribers: number;
  subscribed: boolean;
  numReviews: number;
  // the maximum number of tags shown in the screen is two.
  tags: string[];
}

function ReviewScore({
  numReviews,
  score,
}: Pick<Props, 'numReviews' | 'score'>) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <AiFillStar
        key={i}
        className={twMerge(
          '',
          i <= score ? 'text-yellow-400' : 'text-gray-500'
        )}
      />
    );
  }

  return (
    <div className="flex items-center text-sm gap-1">
      <div className="flex">{stars}</div>({numReviews})
    </div>
  );
}

export default function PlaylistCard({
  title,
  thumbnail,
  desc,
  score,
  version,
  subscribed,
  numSubscribers,
  numReviews,
  tags,
}: Props) {
  return (
    <div className="card bg-base-100 w-full h-80 shadow-xl cursor-pointer transition-all hover:scale-105">
      <figure>
        <Image
          src={thumbnail}
          width={480}
          height={270}
          alt={title}
          className="object-cover"
        />
      </figure>
      <div className="card-body p-2 ">
        <div className="flex justify-between">
          <ReviewScore numReviews={numReviews} score={score} />
          <div className="flex gap-1 items-center text-sm">
            <AiOutlineTeam /> {numSubscribers}
          </div>
        </div>
        <h2 className="card-title text-lg">
          <div className="badge badge-neutral">v{version}</div>
          {title}
        </h2>
        <p className="line-clamp-2 text-sm h-10 max-h-10">{desc}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <div
              className="badge badge-outline badge-error text-xs select-none cursors-pointer hover:scale-105"
              role="button"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions justify-center mt-1">
          <Button
            variant={subscribed ? 'outlined' : 'solid'}
            className="w-full"
          >
            {subscribed ? 'unsubscribe' : 'subscribe'}
          </Button>
        </div>
      </div>
    </div>
  );
}
