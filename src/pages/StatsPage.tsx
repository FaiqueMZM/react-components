import React from "react";
import { useParams } from "react-router-dom";
import DefaultStats from "../components/Stats/DefaultStats";
import LogoStats from "../components/Stats/LogoStats";

const StatsPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultStats />;
    case "logo":
      return <LogoStats />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Stats variation not found!
        </div>
      );
  }
};

export default StatsPage;
