import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c8sr40k",       // Replace with your EmailJS service ID
        "template_13v1kip",      // Replace with your template ID
        form.current,
        "9EbM4p3RykflQrCcH"      // Replace with your public key
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="pb-24 pt-10 px-6 sm:px-10 md:px-20 bg-white dark:bg-bg-dk">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-white">
          Contact Us
        </h2>
        <p className="text-text-secondary dark:text-white max-w-xl mx-auto mt-3">
          We value your feedback and inquiries. Reach out through any method below!
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
        {/* Contact Info */}
        <div className="space-y-8 text-text-primary dark:text-white">
          <div>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <FaPhoneAlt size={25} className="text-gold dark:text-accent-dk" />
              Phone
            </h4>
            <p className="font-semibold">+92 300 1234567</p>
            <p className="text-sm text-text-secondary dark:text-white">Monday – Friday: 6am – 6pm</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <FaEnvelope size={25} className="text-gold dark:text-accent-dk" />
              Email
            </h4>
            <p className="font-semibold">info@essenzia.com</p>
            <p className="text-sm text-text-secondary dark:text-white">Hear back in about 24 hours.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt size={25} className="text-gold dark:text-accent-dk" />
              Address
            </h4>
            <p>1234 Elm Street, Lahore, Pakistan</p>
          </div>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 w-full max-w-xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md bg-transparent text-text-primary dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md bg-transparent text-text-primary dark:text-white"
            />
          </div>
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-md bg-transparent text-text-primary dark:text-white"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-md bg-transparent text-text-primary dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-gold dark:bg-accent-dk text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
        </form>
      </div>

      {/* Map */}
      <div className="rounded-md overflow-hidden shadow-lg">
        <iframe
          src="https://maps.google.com/maps?q=lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
