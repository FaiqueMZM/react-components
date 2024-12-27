import React from "react";
import { DefaultNav, StickyNav, TransparentNav } from "../components/NavBar";
import { useParams } from "react-router-dom";
import ImageNav from "../components/NavBar/ImageNav";

const NavbarPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultNav />;
    case "sticky":
      return <StickyNav />;
    case "transparent":
      return <TransparentNav />;
    case "image":
      return <ImageNav />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Navbar variation not found!
        </div>
      );
  }
};

export default NavbarPage;
