import React, { useState } from "react";
import MediaGallery from "../components/portfolio/mediaGallery";
import mediaItems from "../components/portfolio/mediaItems";

const Portfolio: React.FC = () => {
  // Media items (videos, images, text projects)

  // State to manage the current filter
  const [filter, setFilter] = useState<"all" | "image" | "video" | "text">(
    "all"
  );

  // Function to filter media items based on the selected type
  const filteredItems = mediaItems.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <div className="flex flex-col h-full w-full bg-[#090909] px-4 py-8 font-quantico">
      <h1 className="text-4xl text-white font-bold text-center mb-4">
        Observatory
      </h1>
      <p className="text-center text-white mb-6">
        [WIP Page | Development on-going during free time] Creations, projects,
        work
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2  ${
            filter === "all"
              ? "bg-black text-white border-[#FFD600] border-2"
              : "bg-black text-white border-white border-2"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("image")}
          className={`px-4 py-2  ${
            filter === "image"
              ? "bg-black text-white border-[#FFD600] border-2"
              : "bg-black text-white border-white border-2"
          }`}
        >
          Images
        </button>
        <button
          onClick={() => setFilter("video")}
          className={`px-4 py-2  ${
            filter === "video"
              ? "bg-black text-white border-[#FFD600] border-2"
              : "bg-black text-white border-white border-2"
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setFilter("text")}
          className={`px-4 py-2 ${
            filter === "text"
              ? "bg-black text-white border-[#FFD600] border-2"
              : "bg-black text-white border-white border-2"
          }`}
        >
          Text
        </button>
      </div>
      <MediaGallery items={filteredItems} />
    </div>
  );
};

export default Portfolio;
