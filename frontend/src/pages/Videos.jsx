import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Cartoon of mental health stories",
    src: "https://www.youtube.com/embed/DxIDKZHW3-E",
  },
  {
    id: 2,
    title: "Warning signs of mental health problems in teens and young adults",
    src: "https://www.youtube.com/embed/zt4sOjWwV3M",
  },
  {
    id: 3,
    title: "Asking for help on your mental health",
    src: "https://www.youtube.com/embed/9FbBwehUp5Q",
  },
  {
    id: 4,
    title: "5 Signs Your Mental Health is Getting Worse",
    src: "https://www.youtube.com/embed/rkZl2gsLUp4",
  },
  {
    id: 5,
    title: "5 Signs Your Mental Health is Improving",
    src: "https://www.youtube.com/embed/ZidGozDhOjg",
  },
];

const Videos = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div style={{ textAlign: 'center' }} className="bg-[#ffe5b4]">
      <h2 className='bg-slate-800 text-white text-5xl'>Mental Health Resources: Videos</h2>
      <div>
        <h3 className="m-5 bg-emerald-300 text-3xl border-solid rounded-md">{videos[currentVideo].title}</h3>
        <div className="flex justify-center my-5">
          <iframe
            width="720"
            height="450"
            src={videos[currentVideo].src}
            title={videos[currentVideo].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex justify-between max-w-md mx-auto mt-5 mb-10">
          <button onClick={prevVideo} className="flex items-center space-x-2">
            <ChevronLeft /> <span>Previous</span>
          </button>
          <button onClick={nextVideo} className="flex items-center space-x-2">
            <span>Next</span> <ChevronRight />
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Videos;

