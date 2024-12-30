import React from "react";
import { DefaultBotNav, RoundedBotNav } from "../components/BottomNavBar";
import { useParams } from "react-router-dom";

const BotNavBarPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultBotNav />;
    case "rounded":
      return <RoundedBotNav />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Bot Navbar variation not found!
        </div>
      );
  }
};
export default BotNavBarPage;
