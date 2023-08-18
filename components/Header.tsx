import React from "react";
import { Navigation } from "./Navigation";

const NavList = ["About", "Services", "Career", "Gallery", "Contacts"];

export const Header = () => {
  return (
    <header>
      <Navigation></Navigation>
    </header>
  );
};
