import { Box } from '@chakra-ui/react';
import React from 'react';
import ImageSlider from './ImageSlider';
const SliderImage = () => {
    const slides = [
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/04/original-HomePage-1920x700-085804.jpeg", title: "beach" },
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/24/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist_HomePage-1920x700.jpeg-035424.jpg", title: "boat" },
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg", title: "forest" },
        { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/03/1207-STDCRE-44662-SS-MH-Beauty-Bag-Amend-1180x450-V1-050203.jpg", title: "city" },
      
      ];
      const containerStyles = {
        width: "100%",
        height: "500px",
        margin: "0 auto",
        
      };
  return (
    <Box>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </Box>
  );
}

export default SliderImage;