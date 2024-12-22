import React from "react";
import { useParams } from "react-router-dom";
import DefaultHero from "../components/Hero/DefaultHero";
import OverlayHero from "../components/Hero/OverlayHero";
import ImageHero from "../components/Hero/ImageHero";

const HeroPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultHero />;
    case "overlay":
      return <OverlayHero />;
    case "image":
      return <ImageHero />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Footer variation not found!
        </div>
      );
  }
};

export default HeroPage;
