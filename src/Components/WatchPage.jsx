import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_BY_ID } from "../Utils/constants";
import VideoContainer from "./VideoContainer";
import CommentSection from "./CommentSection";

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

    console.log(json.items[0]);
    setVideo(json.items[0]);
  };

  useEffect(() => {
    getVideos();
    dispatch(closeMenu());
  }, []);

  const { snippet } = video;

  return (
    <div className="p-8 px-16 flex w-full gap-4">
      {/* Video Details */}
      <div className="w-[1100px] sticky top-0 h-screen overflow-hidden">
        <iframe
          width="1100"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&si=6vLZjh5VDaOVx1Ta`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="font-bold text-3xl">{video?.snippet?.title}</h2>
        {/* Channel Detail and Subscribe button */}
        <div className="flex items-center mt-2 gap-2">
          <h2 className="font-bold text-2xl">{video?.snippet?.channelTitle}</h2>
          <button className="bg-[#f1f1f1] text-black rounded-full p-2 px-8 font-bold">
            Subscribe
          </button>
        </div>
        <CommentSection video={video} />
      </div>

      {/* Video Container */}
      {/* Video Container */}
      <div className="flex-1 overflow-y-scroll h-screen scrollbar-hide">
        <VideoContainer />
      </div>
    </div>
  );
};

export default WatchPage;
