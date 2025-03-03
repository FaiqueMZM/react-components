import React from "react";
import DefaultFooter from "../components/Footer/DefaultFooter";
import { useParams } from "react-router-dom";
import { SimpleFooter } from "../components/Footer";
import OneLineFooter from "../components/Footer/OneLineFooter";

const FooterPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "default":
      return <DefaultFooter />;
    case "simple":
      return <SimpleFooter />;
    case "oneline":
      return <OneLineFooter />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Footer variation not found!
        </div>
      );
  }
};

export default FooterPage;
