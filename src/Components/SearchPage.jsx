import React from "react";
import { useSelector } from "react-redux";
import SearchVideoCard from "./SearchVideoCard";

const SearchPage = () => {
  const searchedVideos = useSelector((state) => state.app.searchedVideos);

  return (
    <div className="flex flex-col gap-4">
      {searchedVideos.map((video) => (
        <SearchVideoCard video={video} />
      ))}
    </div>
  );
};

export default SearchPage;
