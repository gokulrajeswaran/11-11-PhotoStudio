import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Album-specific photo collections using local images
const albumPhotos = {
  wedding: [
    { src: "/images/Wedding/wedding.jpg", width: 800, height: 600 },
    { src: "/images/wedding.jpg", width: 800, height: 600 }, // fallback main wedding image
    { src: "/images/1.jpg", width: 800, height: 600 },
    { src: "/images/2.jpg", width: 800, height: 600 },
    { src: "/images/3.jpg", width: 800, height: 600 },
  ],
  birthday: [
    { src: "/images/birthday.jpg", width: 800, height: 600 },
    { src: "/images/1.jpg", width: 800, height: 600 },
    { src: "/images/2.jpg", width: 800, height: 600 },
    { src: "/images/3.jpg", width: 800, height: 600 },
    // Add more birthday images here as you add them to /images/Birthday/ folder
  ],
  "baby-shower": [
    { src: "/images/babyshower.jpg", width: 800, height: 600 },
    { src: "/images/1.jpg", width: 800, height: 600 },
    { src: "/images/2.jpg", width: 800, height: 600 },
    { src: "/images/3.jpg", width: 800, height: 600 },
    // Add more baby shower images here as you add them to /images/Babyshower/ folder
  ],
  traditional: [
    { src: "/images/traditional.jpg", width: 800, height: 600 },
    { src: "/images/1.jpg", width: 800, height: 600 },
    { src: "/images/2.jpg", width: 800, height: 600 },
    { src: "/images/3.jpg", width: 800, height: 600 },
    // Add more traditional images here as you add them to /images/Traditional/ folder
  ]
};

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to generate more images for infinite scroll with shuffling
const generateMoreImages = (baseImages, count = 6) => {
  const shuffledBaseImages = shuffleArray(baseImages);
  const moreImages = [];
  for (let i = 0; i < count; i++) {
    const baseIndex = i % shuffledBaseImages.length;
    const baseImage = shuffledBaseImages[baseIndex];
    moreImages.push({
      ...baseImage,
      id: `generated-${Date.now()}-${i}` // unique id for React keys
    });
  }
  return moreImages;
};


export default function Gallery() {
  const { albumName } = useParams();
  
  // State for infinite scroll
  const [displayedImages, setDisplayedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  // Get the base photos for the current album
  const basePhotos = albumPhotos[albumName] || albumPhotos.wedding;

  // Initialize AOS and load initial images
  useEffect(() => {
    AOS.init({ 
      duration: 500, 
      once: false,
      offset: 100
    });
    
    // Load initial images with shuffling
    const shuffledBasePhotos = shuffleArray(basePhotos);
    const initialImages = shuffledBasePhotos.map((photo, index) => ({
      ...photo,
      id: `initial-${index}`
    }));
    setDisplayedImages(initialImages);
  }, [albumName, basePhotos]);

  // Function to distribute images across columns for masonry layout
  const distributeImagesToColumns = (images, numColumns = 4) => {
    const columns = Array(numColumns).fill(null).map(() => []);
    
    images.forEach((image, index) => {
      const columnIndex = index % numColumns;
      columns[columnIndex].push(image);
    });
    
    return columns;
  };

  // Function to load more images (infinite scroll)
  const loadMoreImages = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simulate API delay for better UX
    setTimeout(() => {
      const newImages = generateMoreImages(basePhotos, 8);
      setDisplayedImages(prev => [...prev, ...newImages]);
      setPage(prev => prev + 1);
      setIsLoading(false);
      
      // Refresh AOS animations for new elements
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 500);
  }, [basePhotos, isLoading]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= 
          document.documentElement.offsetHeight - 1000) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreImages]);

  const imageColumns = distributeImagesToColumns(displayedImages);

  return (
    <div className="p-6">
      <h2 
        className="text-2xl font-cinzel font-bold mb-6 capitalize text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {albumName.replace("-", " ")} Gallery
      </h2>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {imageColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((photo, photoIndex) => (
                <div
                  key={photo.id || `${columnIndex}-${photoIndex}`}
                  data-aos="fade-up"
                  data-aos-delay={100 + (photoIndex * 50)}
                  data-aos-duration="600"
                >
                  <img
                    className="w-full h-auto object-cover"
                    src={photo.src}
                    alt={`${albumName} Gallery Image ${photoIndex + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}
        
        {/* Load more button (alternative to scroll) */}
        <div className="text-center mt-8">
          <button
            onClick={loadMoreImages}
            disabled={isLoading}
            className=" font-cinzel bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {isLoading ? 'Loading...' : 'Load More Images'}
          </button>
        </div>
      </div>
    </div>
  );
}
