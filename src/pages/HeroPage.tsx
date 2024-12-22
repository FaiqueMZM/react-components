import React from "react";
import { useParams } from "react-router-dom";
import DefaultHero from "../components/Hero/DefaultHero";
import OverlayHero from "../components/Hero/OverlayHero";

const HeroPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultHero />;
    case "overlay":
      return <OverlayHero />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Footer variation not found!
        </div>
      );
  }
};

export default HeroPage;
