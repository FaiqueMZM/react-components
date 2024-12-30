import React from "react";
import { useParams } from "react-router-dom";
import DetailedFAQ from "../components/FAQ/DetailedFAQ";
import AccordionFAQ from "../components/FAQ/AccordionFAQ";
import BoxAccordionFAQ from "../components/FAQ/BoxAccordionFAQ";

const FAQPage: React.FC = () => {
  const { variation } = useParams<{ variation: string }>();

  switch (variation) {
    case "detailed":
      return <DetailedFAQ />;
    case "accordion":
      return <AccordionFAQ />;
    case "box":
      return <BoxAccordionFAQ />;
    default:
      return (
        <div className="text-red-500 text-center mt-4">
          FAQ variation not found!
        </div>
      );
  }
};

export default FAQPage;
