import React from "react";
import { useNavigate } from "react-router-dom";

const SearchVideoCard = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/watch/${video.id.videoId}`)}
      className="flex cursor-pointer mt-4"
    >
      <img
        src={video?.snippet?.thumbnails?.high?.url}
        alt="Video Thumbnail"
        className="rounded-xl"
      />

      <div>
        <h1>{video?.snippet?.title}</h1>
        <p>{video?.snippet?.publishedAt}</p>
        <div>
          <p>{video?.snippet?.channelTitle}</p>
        </div>
        <p>{video?.snippet?.description}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
