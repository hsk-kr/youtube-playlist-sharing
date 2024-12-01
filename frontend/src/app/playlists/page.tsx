import { ComponentProps } from 'react';
import PlaylistCard from '../../components/ui/PlaylistCard';
import PlaylistsContent from './content';

const playlists: ComponentProps<typeof PlaylistCard>[] = [
  {
    id: 1,
    title: 'Learn Javascript',
    desc: 'Javascript from beginner to expert!',
    author: 'hsk.coder@gmail.com',
    thumbnail: 'https://img.youtube.com/vi/o1IaduQICO0/maxresdefault.jpg',
    version: 1,
    score: 5,
    numReviews: 30,
    numSubscribers: 20,
    subscribed: false,
    tags: ['programming', 'javascript'],
  },
  {
    id: 2,
    title: 'Learn German',
    desc: 'For German learners, never',
    author: 'hsk.coder@gmail.com',
    thumbnail: 'https://img.youtube.com/vi/xg60VxyK-9I/maxresdefault.jpg',
    version: 1,
    score: 3,
    numReviews: 2,
    numSubscribers: 20,
    subscribed: true,
    tags: ['language', 'german'],
  },
  {
    id: 3,
    title: 'Get Motivated',
    desc: 'You need a motivation? You are in the right playlist!',
    author: 'hsk.coder@gmail.com',
    thumbnail: 'https://img.youtube.com/vi/CK1AqDsJ2RY/maxresdefault.jpg',
    version: 3,
    score: 1,
    numReviews: 3,
    numSubscribers: 20,
    subscribed: false,
    tags: ['motivation', 'self-esteem'],
  },
];

export default function Playlists() {
  return <PlaylistsContent playlists={playlists} />;
}
