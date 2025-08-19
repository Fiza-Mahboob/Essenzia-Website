// InstagramFeed.jsx
import React from "react";

const InstagramFeed = () => {
  const images = [
    "/media/images/p1.jpg",
    "/media/images/p2.jpg",
    "/media/images/p3.jpg",
    "/media/images/p4.jpg",
    "/media/images/p5.jpg",
    "/media/images/p6.jpg",
    "/media/images/p7.jpg",
    "/media/images/p8.jpg",
    "/media/images/p9.jpg",
    "/media/images/p10.jpg",
  ]; // Add your own images here

  return (
    <section className="w-full pt-2 pb-20 px-4 sm:px-8 md:px-16 bg-white dark:bg-bg-dk">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-text-primary dark:text-white mb-10">
          See What’s Trending <span className="text-gold dark:text-accent-dk">@Essenzia</span>
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[240px] h-[320px] rounded-3xl overflow-hidden shadow-xl snap-start transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/essenzia.oud?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gold dark:bg-accent-dk text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
