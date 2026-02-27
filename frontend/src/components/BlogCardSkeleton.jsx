import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const BlogCardSkeleton = () => {
  return (
    <div className="group relative flex flex-col justify-between border border-gray-300">
      {/* Category badge skeleton */}
      <div className="absolute top-2 left-2 z-10">
        <Skeleton 
          variant="rectangular" 
          width={80} 
          height={32} 
          sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
        />
      </div>

      {/* Image section skeleton */}
      <div className="overflow-hidden">
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height={240} 
          animation="wave"
          sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
        />
      </div>

      {/* Date section skeleton */}
      <div className="px-5 mt-4 mb-6">
        <Stack direction="row" spacing={1} alignItems="center">
          <Skeleton 
            variant="circular" 
            width={20} 
            height={20} 
            sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
          />
          <Skeleton 
            variant="text" 
            width={120} 
            height={24} 
            sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
          />
        </Stack>
      </div>

      {/* Title section skeleton */}
      <div className="text-xl pb-10 pt-10 px-5">
        <Stack spacing={1}>
          <Skeleton 
            variant="text" 
            width="90%" 
            height={28} 
            sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
          />
          <Skeleton 
            variant="text" 
            width="60%" 
            height={28} 
            sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
          />
          <Skeleton 
            variant="text" 
            width="40%" 
            height={28} 
            sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}
          />
        </Stack>
      </div>

      {/* READ MORE button placeholder */}
      <div className="absolute bottom-5 left-5">
        <Skeleton 
          variant="rectangular" 
          width={120} 
          height={40} 
          sx={{ bgcolor: 'rgba(0,0,0,0.1)', borderRadius: '4px' }}
        />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;