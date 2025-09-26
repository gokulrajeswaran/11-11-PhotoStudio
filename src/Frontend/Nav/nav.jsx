import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <nav
      className="relative z-10 p-6 flex items-center justify-between bg-white shadow-md"
      style={{ fontFamily: "Times New Roman, serif" }}
      data-aos="fade-down"
    >
      {/* Logo */}
      <div className="text-xl font-bold">11:11 Photography</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 mx-auto">
        <li>
          <Link
            to="/"
            className="text-black font-medium transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link
            to="/album"
            className="text-black font-medium transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
          >
            Album
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="text-black font-medium transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-black font-medium transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Book Now Button */}
      <Link
        to='https://calendly.com/gokulraj12052004_mca26-mepcoeng/new-meeting'
        className="hidden md:inline-block bg-yellow-400 text-black px-4 py-2 rounded shadow hover:bg-yellow-500 transition"
      >
        Book Now
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className={`md:hidden flex items-center px-3 py-2 border rounded text-black border-gray-400 hover:text-yellow-400 transition-transform duration-300 ${
          isOpen ? "rotate-90" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-20 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link
              to="/"
              className="text-black font-medium hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
      
          <li>
            <Link
              to="/album"
              className="text-black font-medium hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Album
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black font-medium hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black font-medium hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='https://calendly.com/gokulraj12052004_mca26-mepcoeng/new-meeting'
              className="bg-yellow-400 text-black px-4 py-2 rounded shadow hover:bg-yellow-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
