// src/pages/BlogDetails.jsx
import React, { useEffect, useState } from "react";
import abstract_pattern from "../assets/abstract_pattern.svg";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import RelatedBlogsCarousel from "../components/RelatedBlogsCarousel";
import BlogDetailsSkeleton from "../components/BlogDetailsSkeleton";

const BlogDetails = () => {
  const [data, setData] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { slug } = useParams();
  
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'smooth' for smooth scrolling
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?slug=${slug}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);

        const blogResponse = await fetch(
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts"
        );
        if (!blogResponse.ok) throw new Error("Failed to fetch posts");
        const blogData = await blogResponse.json();
        const updatedBlogData = blogData.filter((blog) => blog.slug !== slug);
        setBlogData(updatedBlogData.slice(0, 6));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <BlogDetailsSkeleton />;
  if (error) return (
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
  if (!data || data.length === 0) return (
    <div className="text-center py-20">
      <p className="text-gray-600 text-xl">No blog post found</p>
    </div>
  );

  return (
    <div className="lg:p-15 p-5 md:p-10">
      {/* Main Blog Post */}
      <div className="border-b pb-20">
        <h1
          className="lg:text-5xl text-3xl"
          dangerouslySetInnerHTML={{
            __html: data[0]?.title,
          }}
        ></h1>
        <div className="my-5">
          <img
            src={abstract_pattern}
            alt=""
            className="object-cover w-30 lg:w-60 md:w-40"
          />
        </div>
        <div className="py-5">
          <img src={data[0]?.acf?.blog_image} alt="blog img" className="w-full h-auto" />
        </div>
        <div
          className="prose prose-lg max-w-none content"
          dangerouslySetInnerHTML={{
            __html: data[0]?.content,
          }}
        />
      </div>

      {/* Related Blogs Carousel */}
      <RelatedBlogsCarousel data={blogData} />
    </div>
  );
};

export default BlogDetails;