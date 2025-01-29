import React, { useRef } from "react";
import vid1 from "../../assets/4114797-uhd_3840_2160_25fps.mp4";
import vid2 from "../../assets/5532774-uhd_4096_2160_25fps.mp4"; // Add a different video source

interface ProjectCardProps {
  title: string;
  description: string;
  isLeftAligned?: boolean; // Prop to alternate card alignment
  videoSrc: string; // Add a prop for the video source
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  isLeftAligned = true,
  videoSrc,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to the beginning
      videoRef.current.play(); // Start playback
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause playback
      videoRef.current.currentTime = 0; // Reset to the beginning
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 ${
        !isLeftAligned ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <div className="w-full md:w-1/2 text-white">
        <span className="text-sm uppercase text-purple-400 font-semibold">
          Featured Project
        </span>
        <h3 className="text-2xl font-bold mt-2 mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* Project Video */}
      <div className="w-full md:w-1/2 bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg"
          muted
          loop={true}
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

const FeaturedProjects: React.FC = () => {
  return (
    <section className="bg-[#120420] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Project 1 */}
        <ProjectCard
          title="Example Project 1"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          videoSrc={vid1} // Use the first video source
          isLeftAligned={true}
        />

        {/* Project 2 */}
        <ProjectCard
          title="Example Project 2"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          videoSrc={vid2} // Use the second video source
          isLeftAligned={false}
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;
