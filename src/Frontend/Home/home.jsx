import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center bg-fixed pt-16 md:pt-24 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('https://www.aurusjewels.com/cdn/shop/files/Post_Indian_wedding_rituals.png?v=1684402462')`,
        }}
      >
        <div className="text-center -mt-24 md:-mt-60 px-4 sm:px-6" data-aos="fade-up">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-cinzel tracking-wide">
            11:11 PHOTOGRAPHY
          </h1>
          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-cormorant mt-2 flex items-center justify-center space-x-2 sm:space-x-3">
            <span className="flex-1 h-[1px] bg-white opacity-50"></span>
            <span className="whitespace-nowrap">EVENT PHOTOGRAPHY</span>
            <span className="flex-1 h-[1px] bg-white opacity-50"></span>
          </h3>
        </div>
      </div>

      {/* About & Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
        {/* Image */}
        <div className="h-auto" data-aos="fade-right">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src="https://images.pexels.com/photos/3119709/pexels-photo-3119709.jpeg"
            alt="Gallery Masonry Image"
          />
        </div>

        {/* About */}
        <div
          className="h-auto bg-white lg:col-span-2 flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-brillant">About Me</h1>
          <p className="text-gray-700 max-w-xl font-queen text-sm sm:text-base md:text-lg">
            Hi! I'm a passionate photographer with a love for capturing life's
            most beautiful moments. Specializing in wedding photography, I aim
            to create timeless memories through my lens. Every click tells a
            story, and I strive to make each photograph a piece of art that you
            will cherish forever.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-[85rem] lg:px-8 mx-auto py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-cinzel" data-aos="fade-right">
          Galleries
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8" data-aos="fade-left">
          {/* Column 1 */}
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
            <img
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?auto=format&fit=crop&w=560&q=80"
              alt="Gallery"
            />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-yellow-800 text-white text-lg sm:text-xl rounded shadow-lg hover:bg-gray-700 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
}
