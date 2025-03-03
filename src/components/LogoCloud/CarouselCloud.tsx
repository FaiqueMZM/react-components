import React, { useRef, useEffect } from "react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// swiper autoplay module
SwiperCore.use([Autoplay]);

const DefaultCloud: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const logos = [
    {
      alt: "Transistor",
      src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      alt: "Reform",
      src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      alt: "Tuple",
      src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    },
    {
      alt: "SavvyCal",
      src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    },
    {
      alt: "Statamic",
      src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    },
    {
      alt: "Transistor",
      src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      alt: "Reform",
      src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      alt: "Tuple",
      src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    },
    {
      alt: "SavvyCal",
      src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    },
    {
      alt: "Statamic",
      src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    },
  ];

  useEffect(() => {
    swiperRef.current = new SwiperCore(".swiper", {
      slidesPerView: "auto", // default slides per view
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 4000,
      spaceBetween: 50,
      direction: "horizontal",
      freeMode: true,
      breakpoints: {
        320: {
          // for screen size >=320
          slidesPerView: 3,
          spaceBetween: 10,
        },
        900: {
          // for screen size >=900
          slidesPerView: "auto",
          spaceBetween: 30,
        },
      },
    });

    return () => {
      swiperRef.current?.destroy();
    };
  }, []);

  return (
    <section className="bg-white border-gray-300">
      <div className="py-10 sm:py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="swiper mt-10 overflow-hidden">
            <div className="swiper-wrapper flex space-x-6">
              {logos.map((logo, index) => (
                <div
                  className="swiper-slide flex justify-center items-center shrink-0 w-auto"
                  key={index}
                >
                  <img
                    alt={logo.alt}
                    src={logo.src}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultCloud;
