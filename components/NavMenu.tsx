import React from 'react';

interface NavLink {
  id: string;
  title: string;
}

const navLinks: NavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'career', title: 'Career' },
  { id: 'gallery', title: 'Gallery' },
  { id: 'contacts', title: 'Contacts' },
];

export const NavMenu: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-12 md:flex-row md:gap-6 xl:gap-14">
        {navLinks.map(nav => (
          <li
            key={nav.id}
            className="text-lg leading-[1.21] tracking-[1.4px] md:text-sm"
            //   className={`${
            //     active === nav.title ? "text-white" : "text-secondary"
            //   } hover:text-white text-[18px] font-medium cursor-pointer`}
            //   onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
