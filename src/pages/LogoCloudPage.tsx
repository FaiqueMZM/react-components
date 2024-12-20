import React from "react";
import { useParams } from "react-router-dom";
import DefaultCloud from "../components/LogoCloud/DefaultCloud";

const StatsPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultCloud />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Footer variation not found!
        </div>
      );
  }
};

export default StatsPage;
