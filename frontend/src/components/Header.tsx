'use client';

import { luckiestGuy } from '@/res/fonts';
import Avatar from './ui/Avatar';
import { IoMdMenu } from 'react-icons/io';
import IconButton from './ui/IconButton';
import { useEffect, useState } from 'react';
import Link from './ui/Link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavOpen = () => setNavOpen((prevNavOpen) => !prevNavOpen);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <div className="bg-red-600 text-white flex justify-center px-4 h-14 relative">
      <div className="flex justify-between items-center w-full max-w-[1024px] h-full box-border">
        <IconButton
          id="navToggle"
          className="size-8 md:hidden"
          icon={IoMdMenu}
          onClick={toggleNavOpen}
        />
        <div className="flex gap-6 items-center">
          <Link href="/" className="justify-center">
            <h1 className={`${luckiestGuy.className} text-xl`}>YPS</h1>
          </Link>
          <nav className="hidden md:flex gap-4 text-sm items-center">
            <Link href="/" activeClassName="font-bold">
              Home
            </Link>
            <Link href="/explore" activeClassName="font-bold">
              Explore
            </Link>
          </nav>
        </div>
        <div className="flex justify-center items-center">
          <Avatar />
        </div>
      </div>
      <div
        className={`absolute top-full h-fit z-10 left-0 right-0 bg-red-600 overflow-hidden md:hidden ${navOpen ? 'max-h-[140px]' : 'max-h-0'} transition-all duration-500`}
      >
        <nav className="flex flex-col text-sm">
          <Link
            href="/"
            className="font-bold p-4 transition-all hover:bg-red-500"
            activeClassName="font-bold bg-red-500"
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="p-4 transition-all hover:bg-red-500"
            activeClassName="font-bold bg-red-500"
          >
            Explore
          </Link>
        </nav>
      </div>
    </div>
  );
}
