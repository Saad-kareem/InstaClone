import React from "react";
import { FaHome } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { RiArtboard2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

export const data = [
  {
    id: 1,
    name: "Posts",
    status: "1000",
  },
  {
    id: 2,
    name: "Followers",
    status: "1000",
  },
  {
    id: 1,
    name: "Following",
    status: "1000",
  },
];

export const Navigaotrs = [
  {
    id: 1,
    icon: <FaHome />,
    name: "Home",
  },
  {
    id: 2,
    icon: <RiArtboard2Line />,
    name: "Explore",
  },
  {
    id: 3,
    icon: <CiBookmark />,
    name: "Home",
  },
  {
    id: 4,
    icon: <LuSend />,
    name: "Direct",
  },
  {
    id: 5,
    icon: <TbGridDots />,
    name: "Status",
  },
  {
    id: 6,
    icon: <IoSettingsOutline />,
    name: "Setting",
  },
];
export const Liked = [
  {
    id: 1,
    icon: <CiHeart />,
    name: "Likes",
  },
  {
    id: 2,
    icon: <FaRegCommentDots />,
    name: "Comments",
  },
  {
    id: 1,
    icon: <FaShareNodes />,
    name: "Share",
  },
  {
    id: 1,
    icon: <CiBookmark />,
    name: "Saved",
  },
];
