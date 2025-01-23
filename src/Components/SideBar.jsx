import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  GamingIcon,
  HomeIcon,
  MusicIcon,
  ShoppingIcon,
  ShortsIcon,
  SportsIcon,
  SubscriptionIcon,
} from "../Utils/icons";

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg min-w-48 sticky top-20 h-screen overflow-hidden">
      <ul className="flex flex-col gap-4">
        <Link to={"/"}>
          <li className="flex text-xl gap-8 items-center">{HomeIcon}Home </li>
        </Link>
        <li className="flex text-xl gap-8 items-center">{ShortsIcon}Shorts</li>
        <li className="flex text-xl gap-8 items-center">
          {SubscriptionIcon}Subscription
        </li>
      </ul>

      <div class="border-t-2 border-gray-500 my-4 w-[100%]"></div>

      <ul className="flex flex-col gap-4">
        <h2 className="font-bold pt-5 text-xl ">Explore</h2>
        <li className="flex text-xl gap-8 items-center">{MusicIcon}Music</li>
        <li className="flex text-xl gap-8 items-center">{SportsIcon}Sports</li>
        <li className="flex text-xl gap-8 items-center">{GamingIcon}Gaming</li>
        <li className="flex text-xl gap-8 items-center">
          {ShoppingIcon}Shopping
        </li>
      </ul>

      <div class="border-t-2 border-gray-500 my-4 w-[100%]"></div>

      <ul className="flex flex-col gap-4">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
