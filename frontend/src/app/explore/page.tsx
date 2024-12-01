import { ComponentProps } from 'react';
import Search from '@/components/Search';
import PlaylistCard from '../../components/ui/PlaylistCard';
import Button from '@/components/ui/Button';
import { AiOutlinePlus } from 'react-icons/ai';

const playlists: ComponentProps<typeof PlaylistCard>[] = [
  {
    title: 'Learn Javascript',
    desc: 'Javascript from beginner to expert!',
    thumbnail: 'https://img.youtube.com/vi/o1IaduQICO0/maxresdefault.jpg',
    version: 1,
    score: 5,
    reviews: 30,
    subscribers: 20,
    subscribed: false,
    favorite: true,
    tags: ['programming', 'javascript'],
  },
  {
    title: 'Learn German',
    desc: 'For German learners, never',
    thumbnail: 'https://img.youtube.com/vi/CK1AqDsJ2RY/maxresdefault.jpg',
    version: 1,
    score: 3,
    reviews: 2,
    subscribers: 20,
    subscribed: true,
    favorite: true,
    tags: ['language', 'german'],
  },
  {
    title: 'Get Motivated',
    desc: 'You need a motivation? You are in the right playlist!',
    thumbnail: 'https://img.youtube.com/vi/xg60VxyK-9I/maxresdefault.jpg',
    version: 3,
    score: 1,
    reviews: 3,
    subscribers: 20,
    subscribed: false,
    favorite: true,
    tags: ['motivation', 'self-esteem'],
  },
];

export default function Explore() {
  return (
    <>
      <div className="w-full max-w-5xl p-4 mx-auto">
        <div className="relative">
          <Search />
          <Button className="absolute top-0 right-0 hidden sm:block">
            Create Playlist
          </Button>
        </div>
        <div className="p-4 flex flex-wrap gap-2 justify-center sm:justify-start">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.title} {...playlist} />
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
