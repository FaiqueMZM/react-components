import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const BoxAccordionFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "How to create an account?",
      answer: "Lorem ipsum dolor sit amet...",
    },
    {
      question: "How can I make payment using Paypal?",
      answer: "Lorem ipsum dolor sit amet...",
    },
    {
      question: "Can I cancel my plan?",
      answer: "Lorem ipsum dolor sit amet...",
    },
    {
      question: "How can I reach support?",
      answer: "Lorem ipsum dolor sit amet...",
    },
  ];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-18">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do so
            mer ciras
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer ${
                activeIndex === index ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              <button
                type="button"
                className="flex items-center text-left justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default BoxAccordionFAQ;
