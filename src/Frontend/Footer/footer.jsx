import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaHashtag } from "react-icons/fa"; // FaHashtag as placeholder for Threads
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-yellow-500">
  <div className="text-center" data-aos="fade-up">
    {/* Logo */}
    

    {/* Copyright */}
    <div className="mt-3" data-aos="fade-up" data-aos-delay="200">
      <a
        className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
        href="#"
      >
        11:11 PhotoStudio
      </a>{" "}
      family.
      <p className="text-gray-700 dark:text-neutral-800">© 2025 GOKULRAJ</p>
    </div>

    {/* Social Brands */}
    <div className="mt-4 flex justify-center space-x-6" data-aos-delay="300">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/jagannn_115"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-600 text-2xl"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* Threads */}
      <a
        href="#"
        className="text-blue-600 hover:text-blue-700 text-2xl"
        aria-label="Threads"
      >
        <FaThreads />
      </a>
    </div>
    {/* End Social Brands */}
  </div>
</footer>

  );
}
