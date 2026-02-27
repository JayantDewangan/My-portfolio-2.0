import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contacts = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_x26hkzf",    // Service ID
        "template_2o2phhq",   // Template ID
        form.current,
        "_BmzsE6L6xahGasWh"   // Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <section
        id="contact"
        className="scroll-mt-28 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans flex flex-col items-center"
      >
        <ToastContainer />

        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">CONTACT</h2>
          <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold">
            I’d love to hear from you—reach out for any opportunities or questions!
          </p>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md bg-white dark:bg-[#0d081f] p-6 rounded-lg shadow-xl dark:shadow-none border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
            Connect With Me 🚀
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded-md transition
                bg-linear-to-r from-purple-600 to-pink-500
                ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}
              `}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contacts;
