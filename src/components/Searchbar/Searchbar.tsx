import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <div className="flex justify-center items-center md:justify-between px-4 w-full  border-b-2  p-4">
      <h1 className="hidden md:block text-2xl font-bold">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <div className="border border-gray-400 p-3 flex justify-between items-center rounded-full ">
          <input
            type="text"
            placeholder="Recherche"
            className=" overflow-hidden outline-none"
          />

          <BsSearch className="cursor-pointer hover:scale-105 " />
        </div>
        <div className="w-[60px] h-[60px] border-4 border-gray-400 rounded-full cursor-pointer group">
          <Image
            src="/pdp.jpg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full w-full h-full object-cover p-1 group-hover:p-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
