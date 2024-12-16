import React from "react";
import { DefaultNav, StickyNav, TransparentNav } from "../components/NavBar";
import { useParams } from "react-router-dom";

const NavbarPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultNav />;
    case "sticky":
      return <StickyNav />;
    case "transparent":
      return <TransparentNav />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Navbar variation not found!
        </div>
      );
  }
};

export default NavbarPage;
