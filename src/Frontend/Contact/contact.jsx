import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 min-h-screen p-8">

      {/* Contact Details Card */}
      <div data-aos="fade-up" className="rounded bg-white shadow p-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <h1 className="text-gray-900 text-3xl font-bold mb-6">Contact Details</h1>

        <div className="space-y-4 text-left">
          <p className="text-gray-800 text-lg font-medium">
            <span className="font-semibold">Name:</span> Jagannathan
          </p>

          <p className="text-gray-800 text-lg font-medium">
            <span className="font-semibold">Phone Number:</span> 9999999999
          </p>

          <p className="text-gray-800 text-lg font-medium">
            <span className="font-semibold">Address:</span> Virudhunagar, Tamil Nadu
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-2 rounded bg-white shadow p-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <div className="max-w-xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Queries ??</h1>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hs-firstname-contacts-1" className="block mb-2 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input type="text" name="fname" id="hs-firstname-contacts-1" className="py-2.5 sm:py-3 px-4 block w-full border rounded" />
            </div>

            <div>
              <label htmlFor="hs-lastname-contacts-1" className="block mb-2 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input type="text" name="lastname" id="hs-lastname-contacts-1" className="py-2.5 sm:py-3 px-4 block w-full border rounded" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hs-email-contacts-1" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" name="email" id="hs-email-contacts-1" autoComplete="email" className="py-2.5 sm:py-3 px-4 block w-full border rounded" />
            </div>

            <div>
              <label htmlFor="hs-phone-number-1" className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input type="text" name="phone" id="hs-phone-number-1" className="py-2.5 sm:py-3 px-4 block w-full border rounded" />
            </div>
          </div>

          <div>
            <label htmlFor="hs-about-contacts-1" className="block mb-2 text-sm font-medium text-gray-700">
              Leave your query here            </label>
            <textarea id="hs-about-contacts-1" name="message" rows="4" className="py-2.5 sm:py-3 px-4 block w-full border rounded"></textarea>
          </div>

          <button type="submit" className="w-full py-3 px-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 font-medium">
            Send
          </button>

          <p className="text-center text-gray-500 text-sm">
            We'll get back to you shortly.
          </p>
        </form>
      </div>
    </div>
  );
}
