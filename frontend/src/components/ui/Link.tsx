import { ComponentProps } from 'react';
import { default as NextJSLink } from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  activeClassName?: string;
} & ComponentProps<typeof NextJSLink>;

export default function Link({ activeClassName, className, ...rest }: Props) {
  const pathname = usePathname();

  const active =
    activeClassName !== undefined &&
    rest.href !== undefined &&
    ((rest.href === '/' && pathname === '/') ||
      (rest.href !== '/' && pathname.startsWith(rest.href.toString())));

  const linkClassName = `${className}${active ? ` ${activeClassName}` : ''}`;

  return <NextJSLink {...rest} className={linkClassName} />;
}
