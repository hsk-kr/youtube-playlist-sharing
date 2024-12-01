'use client';

import { ComponentProps } from 'react';
import Search from '@/components/Search';
import PlaylistCard from '../../components/ui/PlaylistCard';
import Button from '@/components/ui/Button';
import { AiOutlinePlus } from 'react-icons/ai';

export default function PlaylistsContent({
  playlists,
}: {
  playlists: ComponentProps<typeof PlaylistCard>[];
}) {
  return (
    <>
      <div className="w-full max-w-5xl p-4 mx-auto">
        <div className="relative">
          <Search />
          <Button className="absolute top-0 right-0 hidden sm:block">
            Create Playlist
          </Button>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center sm:justify-start">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} {...playlist} />
          ))}
        </div>
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg text-red-500"></span>
        </div>
      </div>
      <div className="fixed size-12 text-3xl cursor-pointer transition-all font-bold right-4 bottom-4 bg-red-600 text-white rounded-full flex justify-center items-center sm:hidden">
        <AiOutlinePlus />
      </div>
    </>
  );
}
