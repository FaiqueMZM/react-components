import React from "react";
import { DefaultBotNav } from "../components/BottomNavBar";
import { useParams } from "react-router-dom";

const BotNavBarPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultBotNav />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Navbar variation not found!
        </div>
      );
  }
};
export default BotNavBarPage;
