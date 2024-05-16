"use client";

import React, { useState } from "react";
import { assets } from "../../public/assets/assets";
import Image from "next/image";

export const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4">
      <div className="top">
        <Image
          src={assets.menu_icon}
          className="w-5 block cursor-pointer ml-3"
          alt="menu"
          onClick={() => setExtended((prev) => !prev)}
        />

        <div className="mt-5 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] rounded-[50px] text-[14px] text-gray-500">
          <Image src={assets.plus_icon} className="w-5" alt="add" />
          {extended ? <p>New Emergency</p> : null}
        </div>

        {extended ? (
          <div className="flex flex-col ">
            <p className="mt-8 mb-5">Recent First-aid</p>

            <div className="flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <Image
                src={assets.message_icon}
                className="w-5"
                alt="message-tag"
              />
              <p>First aid for a...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <div
          className={`flex items-start ${
            extended ? "pr-3 gap-3" : ""
          } p-3 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]`}
        >
          <Image
            src={assets.question_icon}
            className="w-5"
            alt="question mark"
          />
          {extended ? <p>Help</p> : null}
        </div>
        <div
          className={`flex items-start ${
            extended ? "pr-3 gap-3" : ""
          } p-3 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]`}
        >
          <Image src={assets.history_icon} className="w-5" alt="hostory" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div
          className={`flex items-start ${
            extended ? "pr-3 gap-3" : ""
          } p-3 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]`}
        >
          <Image src={assets.setting_icon} className="w-5" alt="settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
