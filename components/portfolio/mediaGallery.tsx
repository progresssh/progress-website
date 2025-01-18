import React, { useState } from "react";
import Masonry from "react-masonry-css";
import MediaModal from "./mediaModal";
import Image from "next/image";
import Link from "next/link";

interface MediaGalleryProps {
  items: MediaItem[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const masonryBreakpoints = {
    default: 3,
    1100: 2,
    768: 1,
  };

  return (
    <div>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="flex gap-6"
        columnClassName=".my-masonry-grid_column_portfolio"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="mb-6 cursor-pointer transition ease-in-out hover:border-[#FFD600] border-2 border-white"
            onClick={() => item.type !== "text" && setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="w-full h-auto object-cover"
              />
            ) : item.type === "video" ? (
              <video
                className="w-full h-auto rounded-lg"
                src={item.src}
                muted
                autoPlay
                playsInline
                controls={false}
              />
            ) : item.type === "text" ? (
              <div className="p-4 bg-gray-100">
                <Link href={item.src} target="_blank">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </Masonry>
      {selectedMedia && (
        <MediaModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default MediaGallery;
