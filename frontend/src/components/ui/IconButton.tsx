import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  id?: string;
  className?: string;
  onClick?: VoidFunction;
}

export default function IconButton({
  icon: Icon,
  className: cn,
  id,
  onClick,
}: Props) {
  return (
    <Icon
      onClick={onClick}
      className={`cursor-pointer transition-all hover:scale-95${cn ? ` ${cn}` : ''}`}
      id={id}
    />
  );
}
