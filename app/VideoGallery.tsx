import React from "react";

import VideoSlider from "./VideoSlider";

const VideoGallery = () => {
  return (
    <section
      id='VideoGallery'
      className='h-screen w-full   relative flex justify-center items-center'
    >
      <VideoSlider />
    </section>
  );
};

export default VideoGallery;
