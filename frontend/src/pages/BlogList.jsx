import axios from "axios";
import { useState, useEffect } from "react";
import abstract_pattern from "../assets/abstract_pattern.svg";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const BlogList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Add pagination state
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

  // Add load more function
  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

 
  return (
    <div className="w-full bg-white lg:p-15 md:p-10 p-5">
      <div className="flex pb-10">
        <div className="flex lg:flex-row md:flex-row  gap-5 flex-col">
          <h1 className="lg:text-6xl text-3xl md:4xl">Media</h1>
          <img src={abstract_pattern} alt="" className="lg:h-full w-[60%]" />
        </div>
      </div>
      
      {/* Grid with slice to show only visible items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:p-15">
        {data.slice(0, visibleItems).map((item,idx) => (
         <BlogCard item={item} key={idx}/>
        ))}
      </div>

      {/* Add Load More button - only show if there are more items */}
      {visibleItems < data.length && (
        <div className="flex justify-center mt-5">
          <button
            onClick={handleLoadMore}
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 font-semibold"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;