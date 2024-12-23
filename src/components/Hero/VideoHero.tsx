import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const VideoHero: React.FC = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const handleVideoPlay = () => {
    setVideoVisible(true);
  };

  return (
    <>
      <section className="bg-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                    Brand new
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  The quick, brown fox
                  <br className="hidden md:block" />
                  jumps over{" "}
                  <span className="inline-block text-deep-purple-accent-400">
                    a lazy dog
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
                >
                  <span className="mr-3">Start Shopping</span>
                  <ShoppingCartIcon className="w-5" />
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
                >
                  Get 15% discount
                </a>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              {!isVideoVisible ? (
                <div
                  className="relative cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src="https://img.youtube.com/vi/WO2b03Zdu4Q/maxresdefault.jpg"
                    alt="Video Thumbnail"
                  />
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 hover:bg-opacity-25">
                    <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl hover:scale-110">
                      <svg
                        className="w-10 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-56 sm:h-96 rounded shadow-lg"
                  src="https://www.youtube.com/embed/WO2b03Zdu4Q?autoplay=1"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                //     if the video is local
                //   <video
                //     className="w-full h-56 sm:h-96 rounded shadow-lg"
                //     controls
                //     preload="auto"
                //   >
                //     <source src="/videos/sample-video.mp4" type="video/mp4" />
                //     Your browser does not support the video tag.
                //   </video>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoHero;
