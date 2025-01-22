import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setSearchVideos, toggleMenu } from "../Utils/appSlice";
import { GOOGLE_API_KEY, SEARCH_BY_NAME } from "../Utils/constants";
import { useNavigate } from "react-router-dom";

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
          className="bg-gray-400 text-white p-2 px-4 h-10 rounded-r-3xl"
          onClick={getSearchedVideos}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
