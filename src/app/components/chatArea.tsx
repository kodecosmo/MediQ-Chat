"use client"

import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../public/assets/assets";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";

export const ChatArea = () => {
  const { isSignedIn, user } = useUser();
  const [message, setMessage] = useState('');

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-[22px] p-5 text-[#585858]">
        <div className="flex flex-row justify-between items-center">MedIQ</div>

        <div className="flex gap-5">
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="mt-5 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] rounded-[50px] text-[14px] text-gray-500 hover:bg-[#afb2b8] hover:text-white">
                <span>LogIn</span>
              </button>
            </SignInButton>
          ) : null}

          {isSignedIn ? (
            <div className="text-slate-600 hover:text-slate-900 cursor-pointer hover:underline px-4 py-2 md:py-0 flex flex-row">
              <UserButton />
            </div>
          ) : (
            <div className="text-slate-600 hover:text-slate-900 cursor-pointer   md:py-0 flex flex-row">
              <SignUpButton mode="modal">
                <button className="mt-5 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] rounded-[50px] text-[14px] text-gray-500 hover:bg-[#afb2b8] hover:text-white">
                  <span>Sign in</span>
                </button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[900px] m-auto">
        <div className="my-12 text-[56px] text-[#c4c7c5] font-semibold p-5">
          <p>
            <span className="bg-">Hello, </span>
            {isSignedIn ? <span> {user?.firstName}</span> : "Guest"}
          </p>

          <p>What is your Emergency?</p>
        </div>

        {isSignedIn ? (
          <div className="text-[20px] text-[#585858] font-semibold p-5">
            Downloaded First Aid
          </div>
        ) : (
          <div className="text-[20px] text-[#585858] font-semibold p-5">
            Quick Recommendations
          </div>
        )}

        <div className="grid grid-cols-4 gap-4 p-5">
          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">First aid for a burn</p>
            <Image
              src={assets.message_icon}
              alt="First aid icon"
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
            />
          </div>

          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              What to do if i was bitten by a dog
            </p>
            <Image
              src={assets.compass_icon}
              alt="First aid icon"
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
            />
          </div>

          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              First aid training guide
            </p>
            <Image
              src={assets.code_icon}
              alt="First aid icon"
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
            />
          </div>

          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Tips to get started with MedIQ
            </p>
            <Image
              src={assets.bulb_icon}
              alt="First aid icon"
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
            />
          </div>
        </div>
      </div>

      <div className=" w-full max-w-[900px] px-5 m-auto">
        <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] py-3 px-5 rounded-[50px]">
          <input
            type="text"
            placeholder="Describe your emergency"
            className="flex-1 flex-wrap bg-transparent border-none outline-none p-2 text-[16px]"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex gap-4 items-center">
            <Image
              src={assets.gallery_icon}
              alt="image icon"
              className="w-6 cursor-pointer"
            />
            <Image
              src={assets.mic_icon}
              alt="mic icon"
              className="w-6 cursor-pointer"
            />
            <Image
              src={assets.send_icon}
              alt="send icon"
              className="w-6 cursor-pointer"
              onClick={() => alert(`Message sent successfully: ${message}`)}
            />
          </div>
        </div>

        {/* <p className="text-[14px] my-4 mx-auto align-middle font-medium">All rights recerved by MedIQ&copy; kode</p> */}
      </div>
    </div>
  );
};
