import Link from 'next/link';

interface ListWithIconProps {
  name: string;
  icon: React.ReactElement;
  href: string;
}

const ListWithIcon = ({ name, icon, href }: ListWithIconProps) => {
  return (
    <li>
      <Link href={href} target='_blank'>
        {icon} {name}
      </Link>
    </li>
  );
};

export default ListWithIcon;
