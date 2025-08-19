import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ayla Hassan",
    role: "Creative Director",
    image: "media/images/user1.jpg",
    quote: "Elegance is the only beauty that never fades.",
  },
  {
    name: "Raza Qureshi",
    role: "Master Perfumer",
    image: "media/images/user2.jpg",
    quote: "Each fragrance tells a story — let’s make yours unforgettable.",
  },
  {
    name: "Hira Sheikh",
    role: "Packaging & Design",
    image: "media/images/user3.jpg",
    quote: "Design is the silent ambassador of your brand.",
  },
  {
    name: "Danish Malik",
    role: "Marketing Strategist",
    image: "media/images/user4.jpg",
    quote: "Connecting your scent to the world.",
  },
  {
    name: "Sana Iqbal",
    role: "Client Success Lead",
    image: "media/images/user5.jpg",
    quote: "Our story starts with your satisfaction.",
  },
  {
    name: "Zeeshan Rauf",
    role: "Operations Head",
    image: "media/images/user6.jpg",
    quote: "Bringing elegance to execution.",
  },
];

const MeetOurTeam = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-bg-dk pb-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl text-center font-bold text-text-primary dark:text-white mb-4">
          Meet Our Team
        </h2>
        <p className="text-text-secondary text-center dark:text-gray-300 text-lg leading-relaxed">
          The creative forces behind our brand — shaping fragrance, elegance, and experience.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
           className="absolute top-1/2 -translate-y-1/2 -left-3 lg:-left-15 z-10 bg-card dark:bg-bg-dark text-gold dark:text-accent-dk p-3 rounded-full shadow-md flex"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-15 z-10 bg-card dark:bg-bg-dark text-gold dark:text-accent-dk p-3 rounded-full shadow-md flex"
        >
          <FaArrowRight size={20} />
        </button>

        {/* Team Cards */}
        <div
      ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-hidden scroll-smooth px-1"
             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >

          {teamMembers.map((member, index) => (
            <div
              key={index}
  className="w-[250px] sm:w-[280px] flex-shrink-0 bg-card dark:bg-bg-dark p-5 rounded-lg shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-gold dark:border-accent-dk mb-3"
              />
              <h4 className="text-xl font-medium text-center text-text-primary dark:text-white">
                {member.name}
              </h4>
              <p className="text-sm text-center text-text-primary dark:text-white uppercase">
                {member.role}
              </p>
              <p className="text-sm text-center text-text-primary dark:text-gray-200 mt-2 italic">
                “{member.quote}”
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4 text-gold dark:text-accent-dk text-lg">
                <FaLinkedin className="hover:text-blue-600 cursor-pointer transition" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
                <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
                <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
