import React from "react";
import { useParams } from "react-router-dom";
import DefaultHero from "../components/Hero/DefaultHero";
import OverlayHero from "../components/Hero/OverlayHero";
import ImageHero from "../components/Hero/ImageHero";
import VideoHero from "../components/Hero/VideoHero";
import SimpleHero from "../components/Hero/SimpleHero";
import ImageOverlayHero from "../components/Hero/ImageOverlayHero";

const HeroPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultHero />;
    case "simple":
      return <SimpleHero />;
    case "overlay":
      return <OverlayHero />;
    case "image":
      return <ImageHero />;
    case "video":
      return <VideoHero />;
    case "imageOverlay":
      return <ImageOverlayHero />;
    case "videoOverlay":
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Hero variation not found!
        </div>
      );
  }
};

export default HeroPage;
