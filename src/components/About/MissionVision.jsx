// components/about/MissionVision.jsx
const MissionVision = () => {
  return (
    <section className="bg-white dark:bg-bg-dk  pb-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Our Mission */}
        <div data-aos="fade-up" className="relative ml-2 sm:ml-0">
        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold dark:border-accent-dk z-0 rounded-md" />

          {/* Offset Border */}
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-black dark:border-white z-0 rounded-md" />
           {/* Vision Content Box */}
          <div className="relative p-8 sm:p-10 bg-bg-light dark:bg-bg-dark rounded-md shadow-lg z-10 transition duration-300 hover:shadow-xl">
            <h2 className="text-4xl sm:text-4xl font-bold text-text-primary dark:text-white mb-4">
              Our <span className="text-gold dark:text-accent-dk">Mission</span>
            </h2>
            <p className="text-text-secondary dark:text-white text-lg leading-relaxed tracking-wide">
               At <span className="font-semibold">Essenzia</span>, our mission is to craft exceptional fragrances that evoke memories, emotions, and timeless elegance. We strive to elevate the everyday experience through scent — making luxury feel personal and expressive. We believe that fragrance is not just a product but an intimate extension of one’s identity. Our creations are designed to tell stories — your stories — through curated blends that embody beauty, heritage, and creativity. 
            </p>
          </div>
         
        </div>

        {/* Our Vision */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative ml-3 sm:ml-0">
          {/* Outer Border - Gold */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold dark:border-accent-dk z-0 rounded-md" />

          {/* Inner Border - Black */}
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-black dark:border-white z-0 rounded-md" />

          {/* Vision Content Box */}
          <div className="relative p-8 sm:p-10 bg-bg-light dark:bg-bg-dark rounded-md shadow-lg z-10 transition duration-300 hover:shadow-xl">
            <h2 className="text-4xl sm:text-4xl font-bold text-text-primary dark:text-white mb-4">
              Our <span className="text-gold dark:text-accent-dk">Vision</span>
            </h2>
            <p className="text-text-secondary dark:text-white text-lg leading-relaxed tracking-wide">
              We envision a world where fragrance is more than a product — it’s a language. Our goal is to become a globally recognized brand known for its artisanal quality, sustainability, and emotional connection with customers. As we grow, we are committed to becoming pioneers in the fragrance world — blending innovation with timeless elegance, staying rooted in authenticity, and building a legacy that speaks to hearts across generations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
