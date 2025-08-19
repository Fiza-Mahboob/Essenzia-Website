// components/about/OurProcess.jsx
import {
  FaLeaf,
  FaFlask,
  FaClock,
  FaWineBottle,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const processSteps = [
  {
    title: "Ingredient Sourcing",
    description:
      "We ethically source premium botanicals, woods, and florals from trusted global partners to ensure exceptional quality and purity in every scent.",
    icon: <FaLeaf />,
  },
  {
    title: "Fragrance Composition",
    description:
      "Our skilled perfumers meticulously layer each note to achieve balance, character, and harmony in every blend — combining science and creativity.",
    icon: <FaFlask />,
  },
  {
    title: "Aging & Maturation",
    description:
      "Every blend is given time to age and settle, allowing the notes to evolve and deepen naturally for a rich and long-lasting aroma experience.",
    icon: <FaClock />,
  },
  {
    title: "Bottling with Elegance",
    description:
      "Using precision and care, each fragrance is bottled in our signature glass vessels that reflect our devotion to beauty and craftsmanship.",
    icon: <FaWineBottle />,
  },
  {
    title: "Quality Check & Packaging",
    description:
      "Before delivery, every item undergoes detailed inspection and is hand-wrapped in luxurious packaging to reflect the premium experience.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Customer Experience",
    description:
      "We deliver not just fragrance but an entire sensory experience, ensuring every customer receives elegance, satisfaction, and personal care.",
    icon: <FaStar />,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-white dark:bg-bg-dk pb-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto mb-9 text-left">
        <h2 className="text-4xl text-center font-bold text-text-primary dark:text-white mb-4" >
          Our Process
        </h2>
        <p className="text-text-secondary dark:text-white text-center text-base ">
          From ingredient selection to packaging, our six-step process reflects
          precision, care, and timeless artistry at every stage.
        </p>
      </div>

      <div className="space-y-5 max-w-5xl mx-auto relative">
        {processSteps.map((step, index) => (
          <div key={index} className="relative pl-14">
            {/* Step Icon inside heading line */}
            <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-2 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full 
                bg-gradient-to-br from-gold to-yellow-100 dark:from-accent-dk dark:to-bg-dark shadow-md text-white text-xl">
                {step.icon}
              </span>
              {step.title}
            </h3>

            <p className="text-text-secondary dark:text-gray-300 text-base leading-relaxed pl-1">
              {step.description}
            </p>
          </div>
        ))}

        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-gold dark:bg-accent-dk opacity-60 rounded-full"></div>
      </div>
    </section>
  );
};

export default OurProcess;
