import React from "react";
import { useParams } from "react-router-dom";
import DefaultCloud from "../components/LogoCloud/DefaultCloud";
import BigCloud from "../components/LogoCloud/BigCloud";
import DetailedCloud from "../components/LogoCloud/DetailedCloud";

const StatsPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultCloud />;
    case "big":
      return <BigCloud />;
    case "detailed":
      return <DetailedCloud />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Footer variation not found!
        </div>
      );
  }
};

export default StatsPage;
