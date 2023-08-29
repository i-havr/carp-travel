import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface MenuModalProps {
  children: ReactNode;
}

export const MenuModal: React.FC<MenuModalProps> = ({ children }) => {
  const menuModalRoot = document.getElementById('menu-modal-root');
  if (!menuModalRoot) return null;

  return createPortal(children, menuModalRoot);
};
