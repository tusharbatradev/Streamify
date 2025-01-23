import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setSearchVideos, toggleMenu } from "../Utils/appSlice";
import { GOOGLE_API_KEY, SEARCH_BY_NAME } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../Utils/icons";

const Head = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.app.searchValue);
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleInputChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const getSearchedVideos = async () => {
    if (searchValue.trim()) {
      try {
        const data = await fetch(
          `${SEARCH_BY_NAME}${encodeURIComponent(
            searchValue
          )}&key=${GOOGLE_API_KEY}`
        );
        const json = await data.json();
        dispatch(setSearchVideos(json.items));
        navigate("/search")
        console.log("Searched Videos:", json.items);
      } catch (error) {
        console.error("Error fetching searched videos:", error);
      }
    }
  };

  return (
    <div className="flex justify-between p-5 shadow-lg sticky top-0 w-screen bg-white overflow-hidden">
      {/* Logo and SideBar */}
      <div className="flex gap-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          alt="Menu"
        />
        <a href="">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            alt="LOGO"
          />
        </a>
      </div>

      {/* Search */}
      <div className="flex items-center">
        <input
          className="border-2 border-gray-400 w-[500px] h-10 rounded-l-3xl px-2"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
        />

        <button
          className="bg-gray-400 text-white p-2 px-3 h-10 rounded-r-3xl"
          onClick={getSearchedVideos}
        >
          {SearchIcon}
        </button>
      </div>

      {/* User */}
      <div>
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
