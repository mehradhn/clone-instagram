import React from "react";
import EllipsisHorizontal from "../public/icons/EllipsisHorizontal";
import Image from "next/image";
import ChatIcon from "../public/icons/ChatIcon";
import Heart from "../public/icons/Heart";
import PaperAirPlane from "../public/icons/PaperAirPlane";
import BookMark from "../public/icons/BookMark";
import HappyIcon from "../public/icons/HappyIcon";
function Post({ id, username, userImage, caption, image }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}

      <div className="flex items-center p-5">
        <div className="relative">
          <Image
            src={userImage}
            alt=""
            className="rounded-full object-contain border p-1 mr-3"
            height={48}
            width={48}
          />
        </div>

        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontal />
      </div>

      {/* Image Posts*/}
      <img src={image} alt="post" className="object-cover w-full" />

      {/* Button */}
      <div className="flex justify-between p-4 items-center">
        <div className="flex space-x-4">
          <ChatIcon className="btn" />
          <Heart className="btn" />
          <PaperAirPlane className="btn -rotate-22.5" />
        </div>
        <BookMark className="btn" />
      </div>

      {/* Captions */}
      <div className="p-5 truncate">
        <p className="font-bold  mb-1">3 likes</p>
        <span className="font-bold mr-1 ">{username}</span>
        {caption}
      </div>

      {/* Comment */}

      {/* Input-Box */}
      <form className="flex items-center p-4">
        <HappyIcon />
        <input
          type="text"
          placeholder="Add a Comments..."
          className="flex-1 border-none focus:ring-0 outline-none"
        />
        <button type="submit" className="font-semibold text-blue-400">
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
