// src/components/HeroSectionSkeleton.jsx
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const HeroSectionSkeleton = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="relative w-full overflow-hidden h-147.5">
        {/* Hero image skeleton */}
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave"
          sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} // Make this consistent
        />
        
        {/* Overlay content skeleton */}
        <div className="absolute lg:bottom-15 lg:left-12.5 ...">
          {/* Breadcrumb skeleton */}
          <div className="mb-4">
            <Skeleton 
              variant="rectangular" 
              width={120} 
              height={32} 
              sx={{ 
                bgcolor: 'rgba(0,0,0,0.1)', // Changed from white to match
                borderRadius: '4px'
              }} 
            />
          </div>
          
          {/* Title skeleton */}
          <Stack spacing={2}>
            <Skeleton 
              variant="text" 
              width={400} 
              height={60} 
              sx={{ 
                bgcolor: 'rgba(0,0,0,0.1)', // Changed from white
                fontSize: '4rem'
              }} 
            />
            <Skeleton 
              variant="text" 
              width={300} 
              height={60} 
              sx={{ 
                bgcolor: 'rgba(0,0,0,0.1)', // Changed from white
                fontSize: '4rem'
              }} 
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSkeleton;