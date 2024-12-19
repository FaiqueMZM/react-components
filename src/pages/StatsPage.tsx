import React from "react";
import { useParams } from "react-router-dom";
import DefaultStats from "../components/Stats/DefaultStats";

const StatsPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultStats />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Footer variation not found!
        </div>
      );
  }
};

export default StatsPage;
