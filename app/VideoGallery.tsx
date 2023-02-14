import React from "react";

import VideoSlider from "./VideoSlider";

const VideoGallery = () => {
  return (
    <section
      id='video-gallery'
      className='h-screen w-full   relative flex justify-center items-center'
    >
      <VideoSlider />
    </section>
  );
};

export default VideoGallery;
