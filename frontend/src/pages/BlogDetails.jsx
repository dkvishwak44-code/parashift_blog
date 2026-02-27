import React, { useEffect, useRef, useState } from "react";
import abstract_pattern from "../assets/abstract_pattern.svg";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import RelatedBlogsCarousel from "../components/RelatedBlogsCarousel";

const BlogDetails = () => {
  const [data, setData] = useState(null);
  const [blogData,setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {slug} = useParams();  

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

        const blogResponse = await fetch( "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts");
        if (!blogResponse.ok) throw new Error('Failed to fetch posts');
        const blogData = await blogResponse.json();
        const updatedBlogData = blogData.filter(blog=>blog.slug!==slug)
        setBlogData(updatedBlogData.slice(0,6));


      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

 

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <div className="lg:p-15 p-5 md:p-10">
      {/* Main Blog Post */}
      <div className="border-b pb-20">
        <h1 className="lg:text-5xl text-3xl"  dangerouslySetInnerHTML={{
            __html: data[0]?.title,
          }}></h1>
        <div className="my-5">
          <img
            src={abstract_pattern}
            alt=""
            className="object-cover w-30 lg:w-60 md:w-40"
          />
        </div>
        <div className="py-5">
          <img src={data[0]?.acf?.blog_image} alt="blog img" />
        </div>
        <div
          className="prose prose-lg max-w-none content"
          dangerouslySetInnerHTML={{
            __html: data[0]?.content,
          }}
        />
      </div>

      {/* Related Blogs Carousel */}
       <RelatedBlogsCarousel data={blogData}/>
    </div>
  );
};

export default BlogDetails;