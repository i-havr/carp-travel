import React from 'react';
import { Link } from 'react-scroll';

interface NavLink {
  id: string;
  title: string;
}

interface Props {
  closeMenu?: (() => void) | undefined;
}

const navLinks: NavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'career', title: 'Career' },
  { id: 'gallery', title: 'Gallery' },
  { id: 'contacts', title: 'Contacts' },
];

export const NavMenu: React.FC<Props> = ({ closeMenu }: Props) => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-12 md:flex-row md:gap-6 xl:gap-14">
        {navLinks.map(nav => (
          <li
            key={nav.id}
            className="text-lg leading-[1.21] tracking-[1.4px] md:text-sm"
          >
            <Link
              className="cursor-pointer"
              to={`${nav.id}`}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
