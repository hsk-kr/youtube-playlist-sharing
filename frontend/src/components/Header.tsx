'use client';

import { luckiestGuy } from '@/res/fonts';
import Link from 'next/link';
import Avatar from './ui/Avatar';

export default function Header() {
  return (
    <div className="bg-red-600 text-white flex justify-center">
      <div className="flex justify-between items-center w-[1024px] h-14 box-border">
        <div className="flex gap-6 items-center">
          <Link href="#">
            <h1 className={`${luckiestGuy.className} text-xl`}>YPS</h1>
          </Link>
          <nav className="flex gap-4 text-sm items-center">
            <Link href="#" className="font-bold">
              Home
            </Link>
            <Link href="#">Explore</Link>
          </nav>
        </div>
        <div className="flex justify-center items-center">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
