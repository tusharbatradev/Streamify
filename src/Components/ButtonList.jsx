import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Songs",
    "Live",
    "Shorts",
    "Cricket",
    "Soccer",
    "News",
    "Cooking",
    "Shark Tank",
    "Comedy",
    "Bollywood"
  ];
  return (
    <div className="flex">
      {list.map((i, index) => (
        <Button key={index} name={i} />
      ))}
    </div>
  );
};

export default ButtonList;
