import Footer from "./Footer";
import Contact from "./Contact";
import Brands from "./Brands";
import Hero from "./Hero";
import Bio from "./Bio";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import FollowMe from "./FollowMe";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Bio />
      <ImageGallery />
      <VideoGallery />
      <FollowMe />
      {/* <Brands /> */}
      <Contact />
      <Footer />
    </main>
  );
}
