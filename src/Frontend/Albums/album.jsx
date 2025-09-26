import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const albums = [
  { name: "Wedding", img: "/images/wedding.jpg" },
  { name: "Birthday", img: "https://images.pexels.com/photos/32739661/pexels-photo-32739661.jpeg" },
  { name: "Baby Shower", img: "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2023/06/image6-1080x721.jpg" },
  { name: "Traditional", img: "/images/traditional.jpg" },
];

export default function Album() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {albums.map((album, i) => (
        <Link
          key={i}
          to={`/album/${album.name.toLowerCase().replace(" ", "-")}`}
          className="bg-white rounded shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          data-aos="fade-up"
        >
          <img
            src={album.img}
            alt={album.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center font-cinzel text-lg">
            {album.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
