const CommentSection = ({ video }) => {
  return (
    <div className="bg-[#272727] flex w-[1100px] flex-wrap gap-2 p-4 rounded-xl mt-2">
      <div className="flex gap-4">
        <h1 className="text-white">{video?.statistics?.viewCount} Views</h1>
        <h2 className="text-white">{video?.snippet?.publishedAt}</h2>{" "}
      </div>
      <div>
        <h1 className="text-white font-bold text-2xl">
          {video?.snippet?.title}
        </h1>
        <h1 className="text-blue-400">{video?.snippet?.description}</h1>
      </div>
    </div>
  );
};

export default CommentSection;
