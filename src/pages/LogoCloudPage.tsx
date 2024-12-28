import React from "react";
import { useParams } from "react-router-dom";
import DefaultCloud from "../components/LogoCloud/DefaultCloud";
import BigCloud from "../components/LogoCloud/BigCloud";
import DetailedCloud from "../components/LogoCloud/DetailedCloud";
import CarouselCloud from "../components/LogoCloud/CarouselCloud";

const StatsPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultCloud />;
    case "big":
      return <BigCloud />;
    case "detailed":
      return <DetailedCloud />;
    case "carousel":
      return <CarouselCloud />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Logo cloud variation not found!
        </div>
      );
  }
};

export default StatsPage;
