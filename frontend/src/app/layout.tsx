import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { robotoMono } from '@/res/fonts';

export const metadata: Metadata = {
  title: 'YPS: Youtube Playlist Sharing',
  description: 'Youtube Plist Sharing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${robotoMono.className} flex flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
