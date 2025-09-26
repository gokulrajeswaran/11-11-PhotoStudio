import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  { title: "Engagement", src: "/images/1.jpg" },
  { title: "Prewedding", src: "/images/2.jpg" },
  { title: "Wedding", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Babyshower", src: "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2023/06/image6-1080x721.jpg" },
  { title: "Birthday", src: "https://images.unsplash.com/photo-1645764992327-589b28206219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJpcnRoZGF5JTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Model Shoot", src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww" },
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      {/* Photographer Info Section */}
      <div
        className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden mb-12 p-4 sm:p-6 md:p-8"
        data-aos="fade-up"
      >
        {/* Left: Photographer Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/jb.jpg"
            alt="Photographer"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right: About the Photographer */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-cinzel break-words">
  JAGANNATHAN
</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-cinzel">
            Welcome! I’m a professional photographer specializing in Engagement, Wedding, Babyshowers, and Model Shoots.
            My passion is capturing unforgettable moments and turning them into beautiful memories. With years of experience,
            I focus on creative, high-quality photography that tells your story naturally. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut quidem natus corporis, cum quos accusamus quis ducimus esse! Iusto labore fugiat veritatis quas natus laudantium repellendus tempora impedit velit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis asperiores? Alias vel mDucimus delectus dolor, iusto quis explicabo architecto ea eveniet? Pariatur totam consectetur nemo explicabo est exercitationem distinctio dolorum laborum eligendi, nostrum odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero distinctio ex nemo labore et, placeat voluptatum dicta minima maxime, alias id beatae! Nobis debitis aperiam, unde ipsa velit dolore?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt odio quisquam qui natus dolore consequuntur velit ut ad iure, impedit maiores adipisci? Eveniet, delectus assumenda! Eveniet quisquam voluptatibus recusandae.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel text-center mb-8 sm:mb-10">
        Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative h-48 sm:h-56 md:h-64 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage: `url(${card.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-opacity-25 flex items-center justify-center transition duration-300 hover:bg-opacity-10">
              <h2 className="text-white text-xl sm:text-2xl md:text-2xl font-cinzel text-center px-2 sm:px-4">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
