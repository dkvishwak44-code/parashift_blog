// src/components/BlogDetailsSkeleton.jsx
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import RelatedBlogsCarouselSkeleton from "./RelatedBlogsCarouselSkeleton ";

const BlogDetailsSkeleton = () => {
  return (
    <div className="lg:p-15 p-5 md:p-10">
      {/* Main Blog Post Skeleton */}
      <div className="border-b pb-20">
        {/* Title skeleton */}
        <Skeleton 
          variant="text" 
          width="80%" 
          height={80} 
          sx={{ fontSize: '3rem', bgcolor: 'rgba(0,0,0,0.1)' }}
        />
        
        {/* Abstract pattern skeleton */}
        <div className="my-5">
          <Skeleton 
            variant="rectangular" 
            width={240} 
            height={60} 
            sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
          />
        </div>
        
        {/* Featured image skeleton */}
        <div className="py-5">
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height={400} 
            animation="wave"
            sx={{ bgcolor: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}
          />
        </div>
        
        {/* Content skeleton */}
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Skeleton variant="text" height={24} sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          <Skeleton variant="text" height={24} sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          <Skeleton variant="text" height={24} width="95%" sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          <Skeleton variant="text" height={24} width="90%" sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          <Skeleton variant="text" height={24} sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          <Skeleton variant="text" height={24} width="85%" sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          <Skeleton variant="text" height={24} width="70%" sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          
          {/* Paragraph break */}
          <Box sx={{ mt: 2 }}>
            <Skeleton variant="text" height={24} sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
            <Skeleton variant="text" height={24} sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
            <Skeleton variant="text" height={24} width="88%" sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
            <Skeleton variant="text" height={24} width="92%" sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
          </Box>
        </Stack>
      </div>

      {/* Related Blogs Carousel Skeleton */}
      <RelatedBlogsCarouselSkeleton />
    </div>
  );
};

export default BlogDetailsSkeleton;