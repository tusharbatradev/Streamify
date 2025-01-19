import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) {
    return <div>Loading...</div>; // Fallback for missing or undefined data
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails?.medium?.url || "placeholder.png"} alt={title} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount || "N/A"} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
