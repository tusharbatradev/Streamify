import React from "react";
import { useNavigate } from "react-router-dom";

const SearchVideoCard = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/watch/${video.id.videoId}`)}
      className="flex cursor-pointer mt-4 pl-40"
    >
      <img
        src={video?.snippet?.thumbnails?.high?.url}
        alt="Video Thumbnail"
        className="rounded-xl w-[550px] h-[400px]"
      />

      <div className="flex flex-col gap-4 mt-4 ml-4">
        <div>
        <h1 className="font-bold text-xl">{video?.snippet?.title}</h1>
        <p className="text-lg">Released at:-{video?.snippet?.publishedAt}</p>
        </div>
        <div className="flex">
          <img className="w-6" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
          <p className="text-sm mt-1">{video?.snippet?.channelTitle}</p>
        </div>
        <p>{video?.snippet?.description}</p>
        {/* content chips */}
        <div className="flex gap-2">
        <p className="bg-[#262626] w-6 text-white text-center">4K</p>
        <p className="bg-[#262626] w-6 text-white text-center">CC</p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
