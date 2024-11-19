import { Luckiest_Guy, Roboto_Mono } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
});
