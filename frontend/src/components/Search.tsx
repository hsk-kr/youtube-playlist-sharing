'use client';

import { AiOutlineSearch } from 'react-icons/ai';
import Tag from './ui/Tag';

export default function Search() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-1">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
        />
        <SearchButton />
      </div>
      <Filter />
    </div>
  );
}

const Filter = () => {
  const tags = ['Recent', 'Likes', 'Programming', 'Motivation'];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} active={tag === 'Recent'} />
      ))}
    </div>
  );
};

const SearchButton = () => {
  return (
    <div
      className="size-12 flex justify-center items-center bg-red-600 text-xl rounded-lg select-none hover:bg-red-500 transition-colors cursor-pointer"
      role="button"
    >
      <AiOutlineSearch color="white" />
    </div>
  );
};
