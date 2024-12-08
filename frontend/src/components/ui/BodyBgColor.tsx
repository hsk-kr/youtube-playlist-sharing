import { useEffect } from 'react';

export default function BodyBgColor({ color }: { color: 'gray' }) {
  useEffect(() => {
    let bgColor: string | undefined = undefined;

    if (color === 'gray') {
      bgColor = '#F3F4F6';
    }

    if (!bgColor) return;

    const bodyOriginColor = document.body.style.backgroundColor;

    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = bodyOriginColor;
    };
  }, []);

  return null;
}
