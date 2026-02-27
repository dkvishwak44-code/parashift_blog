 import React, { useEffect, useRef, useState } from 'react';
import abstract_pattern from "../assets/abstract_pattern.svg";
import right_arrow from "../assets/right_arrow.svg";
import left_arrow from "../assets/left_arrow.svg";
import BlogCard from './BlogCard';

const RelatedBlogsCarousel = ({ data }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // Left arrow enabled when not at the start (with small threshold)
    setShowLeftArrow(scrollLeft > 5);
    
    // Right arrow enabled when not at the end (with small threshold)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      // Initial check after data loads and layout is complete
      setTimeout(checkScroll, 200);
      window.addEventListener("resize", checkScroll);
      
      // Also check after images load
      const images = scrollContainer.querySelectorAll("img");
      let imagesLoaded = 0;
      const checkImagesLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          setTimeout(checkScroll, 100);
        }
      };
      
      images.forEach(img => {
        if (img.complete) {
          imagesLoaded++;
        } else {
          img.addEventListener("load", checkImagesLoaded);
        }
      });
      
      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
        images.forEach(img => img.removeEventListener("load", checkImagesLoaded));
      };
    }
  }, [data]);

  // Scroll by one card width (including gap)
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstItem = container.querySelector(".blog-card");
    if (!firstItem) return;

    const itemWidth = firstItem.clientWidth;
    const gap = 24; // corresponds to gap-6 (1.5rem = 24px)
    const scrollAmount = direction === "left" ? -itemWidth - gap : itemWidth + gap;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    
    // Update arrow states after scroll animation
    setTimeout(checkScroll, 300);
  };

  return (
    <div className="py-10 space-y-2">
      <h1 className="font-semibold lg:text-5xl md:text-4xl text-3xl">Related</h1>
      <span className="flex gap-2 items-center lg:text-5xl md:text-4xl text-3xl">
        Blogs
        <img
          src={abstract_pattern}
          alt=""
          className="object-cover w-30 lg:w-60 md:w-40"
        />
      </span>

      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-4">
          {/* Scrollable Container - NO SCROLLBAR */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scroll-smooth no-scrollbar hide-scrollbar"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          >
           
            
            <div className="flex gap-6 px-1 pt-4 font-normal">
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className="blog-card flex-none w-full sm:w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <BlogCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Controls - Centered below */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={() => scroll("left")}
              disabled={!showLeftArrow}
              className={`w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-2xl transition-all  ${
                showLeftArrow
                  ? "opacity-100 hover:bg-white hover:scale-105 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="scroll left"
            >
              <img src={left_arrow} alt="left arrow" className="w-10 h-10 md:w-14 md:h-14" />
            </button>
            
            <button
              onClick={() => scroll("right")}
              disabled={!showRightArrow}
              className={`w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-2xl transition-all ${
                showRightArrow
                  ? "opacity-100 hover:bg-white hover:scale-105 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="scroll right"
            >
              <img src={right_arrow} alt="right arrow" className="w-10 h-10 md:w-14 md:h-14" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogsCarousel;