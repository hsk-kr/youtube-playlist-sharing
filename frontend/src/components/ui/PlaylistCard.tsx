'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { AiFillStar, AiOutlineTeam } from 'react-icons/ai';
import Button from './Button';
import Link from './Link';
import Avatar from './Avatar';

export interface Props {
  id: number;
  title: string;
  desc: string;
  author: string;
  thumbnail: string;
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
  id,
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
    <div
      key={id}
      className="card bg-base-100 w-full h-80 shadow-xl transition-all hover:scale-105"
    >
      <figure>
        <Link href={`playlists/${id.toString()}`} className="cursor-pointer">
          <Image
            src={thumbnail}
            width={480}
            height={270}
            alt={title}
            className="object-cover"
          />
        </Link>
      </figure>
      <div className="card-body p-2">
        <div className="flex gap-2 items-center cursor-pointer hover:text-red-500 transition-all w-fit max-w-full">
          <Avatar className="w-6" />
          <span className="text-sm truncate flex-1">Nickname</span>
        </div>
        <div className="flex justify-between">
          <ReviewScore numReviews={numReviews} score={score} />
          <div className="flex gap-1 items-center text-sm">
            <AiOutlineTeam /> {numSubscribers}
          </div>
        </div>
        <Link href={`playlists/${id.toString()}`} className="cursor-pointer">
          <h2 className="card-title text-lg line-clamp-2 break-all">
            <div className="badge badge-neutral mr-2">v{version}</div>
            {title}
          </h2>
          <p className="line-clamp-2 text-sm h-10 max-h-10">{desc}</p>
        </Link>
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
