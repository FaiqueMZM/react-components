import React from "react";

const BigCloud: React.FC = () => {
  const logos = [
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png",
    "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png",
  ];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            Trusted by world-class companies, design teams & popular designers
          </h2>
        </div>

        {/* desktop view */}
        <div className="hidden md:grid items-center max-w-4xl grid-cols-4 mx-auto mt-12 md:mt-20 gap-x-10 gap-y-16">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                className="object-contain w-full h-8 mx-auto"
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* mobile view */}
        <div className="grid items-center max-w-4xl grid-cols-3 mx-auto mt-12 md:hidden gap-x-6 gap-y-10">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                className="object-contain w-full h-8 mx-auto"
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-base text-center text-gray-500 md:mt-20">
          and, 1000+ more companies
        </p>
      </div>
    </section>
  );
};

export default BigCloud;
