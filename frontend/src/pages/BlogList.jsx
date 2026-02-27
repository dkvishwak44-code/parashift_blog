// src/pages/BlogList.jsx
import { useState, useEffect } from "react";
import abstract_pattern from "../assets/abstract_pattern.svg";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import HeroSectionSkeleton from "../components/HeroSectionSkeleton";
import HeroSection from "../components/HeroSection";
import Skeleton from "@mui/material/Skeleton";

const BlogList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setVisibleItems(prev => prev + 6);
      setLoadingMore(false);
    }, 500);
  };

  // Loading state
  if (loading) {
    return (
      <>
        <HeroSectionSkeleton />
        <div className="w-full bg-white lg:p-15 md:p-10 p-5">
          <div className="flex pb-10">
            <div className="flex lg:flex-row md:flex-row gap-5 flex-col">
              <Skeleton 
                variant="text" 
                width={200} 
                height={80} 
                sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} 
              />
              <Skeleton 
                variant="rectangular" 
                width={200} 
                height={60} 
                sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:p-15">
            {[...Array(6)].map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 text-xl">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty state
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-xl">No blog posts found</p>
      </div>
    );
  }

  // Success state
  return (
    <>
      <HeroSection />
      <div className="w-full bg-white lg:p-15 md:p-10 p-5">
        <div className="flex pb-10">
          <div className="flex lg:flex-row md:flex-row gap-5 flex-col">
            <h1 className="lg:text-6xl text-3xl md:4xl">Media</h1>
            <img src={abstract_pattern} alt="" className="lg:h-full w-[60%]" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:p-15">
          {data.slice(0, visibleItems).map((item, idx) => (
            <BlogCard item={item} key={item.id || idx} />
          ))}
        </div>

        {visibleItems < data.length && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className={`bg-black text-white px-8 py-3 transition-all duration-300 font-semibold ${
                loadingMore 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800'
              }`}
            >
              {loadingMore ? 'LOADING...' : 'LOAD MORE'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;