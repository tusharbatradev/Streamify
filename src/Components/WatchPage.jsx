import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_BY_ID } from "../Utils/constants";

const WatchPage = () => {
  const { videoId } = useParams();
  console.log(videoId);

  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(
      `${YOUTUBE_VIDEO_BY_ID}${videoId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    console.log(json);
    setVideo(json.items);
  };

  useEffect(() => {
    getVideos();
    dispatch(closeMenu());
  }, []);

  const { snippet } = video;

  return (
    <div className="p-8 px-16">
      <div className="w-[1200px]">
        <iframe
          width="1200"
          height="650"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&si=6vLZjh5VDaOVx1Ta`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="font-bold text-3xl">{video[0]?.snippet?.title}</h2>
        {/* Channel Detail and Subscribe button */}
        <div className="flex items-center mt-2 gap-2">
          <h2 className="font-bold text-2xl">
            {video[0]?.snippet?.channelTitle}
          </h2>
          <button className="bg-[#f1f1f1] text-black rounded-full p-2 px-8 font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
