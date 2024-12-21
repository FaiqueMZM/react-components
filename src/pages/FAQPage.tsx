import React from "react";
import { useParams } from "react-router-dom";
import DetailedFAQ from "../components/FAQ/DetailedFAQ";
import AccordionFAQ from "../components/FAQ/AccordionFAQ";

const FAQPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "detailed":
      return <DetailedFAQ />;
    case "accordion":
      return <AccordionFAQ />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          Footer variation not found!
        </div>
      );
  }
};

export default FAQPage;
