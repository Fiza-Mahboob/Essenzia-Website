import React from "react";
import newsletterImg from "../../assets/newsletter2.jpg"; // adjust path as per your folder structure

const NewsletterSignup = () => {
  return (
    <section className="w-full pt-2 pb-12 bg-white dark:bg-bg-dk px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Illustration */}
        <div className="w-full md:w-1/2 relative">
          <div
            className="w-full h-[300px] md:h-[400px] rounded-lg shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${newsletterImg})` }}
          ></div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold text-text-primary dark:text-white mb-4">
            Let Scents Inspire You
          </h2>
          <p className="text-lg text-text-secondary dark:text-white mb-8">
            Subscribe to our newsletter for fragrance secrets, exclusive deals, and personal care inspiration.
          </p>

          <form className="relative w-full max-w-md">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-3 px-4 w-full text-md text-text-primary dark:text-white bg-transparent border border-gray-400 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer rounded-full"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-md text-text-secondary dark:text-white duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] px-2 left-4 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Your email address
              </label>
            </div>
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-gold  dark:bg-accent-dk text-white font-semibold px-6 py-2 rounded-full transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
