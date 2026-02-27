// src/components/RelatedBlogsCarouselSkeleton.jsx
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BlogCardSkeleton from "./BlogCardSkeleton";

const RelatedBlogsCarouselSkeleton = () => {
  return (
    <div className="py-10 space-y-2">
      {/* Header skeleton */}
      <Stack spacing={1}>
        <Skeleton 
          variant="text" 
          width={200} 
          height={60} 
          sx={{ fontSize: '3rem', bgcolor: 'rgba(0,0,0,0.1)' }}
        />
        
        <div className="flex gap-2 items-center">
          <Skeleton 
            variant="text" 
            width={150} 
            height={60} 
            sx={{ fontSize: '3rem', bgcolor: 'rgba(0,0,0,0.1)' }}
          />
          <Skeleton 
            variant="rectangular" 
            width={240} 
            height={60} 
            sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
          />
        </div>
      </Stack>

      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-4">
          {/* Scrollable Container with skeleton cards */}
          <div className="w-full overflow-x-auto no-scrollbar hide-scrollbar">
            <div className="flex gap-6 px-1 pt-4">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index} 
                  className="flex-none w-full sm:w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <BlogCardSkeleton />
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Controls Skeleton */}
          <div className="flex gap-4 justify-center md:justify-start">
            <Skeleton 
              variant="circular" 
              width={56} 
              height={56} 
              sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
            />
            <Skeleton 
              variant="circular" 
              width={56} 
              height={56} 
              sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogsCarouselSkeleton;