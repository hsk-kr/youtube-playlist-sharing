import PlaylistCard from '@/components/ui/PlaylistCard';
import { ComponentProps } from 'react';
import PlaylistDetailContent from './content';

const playlist: ComponentProps<typeof PlaylistCard> = {
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
};

export default async function PlaylistDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <PlaylistDetailContent {...playlist} />;
}
