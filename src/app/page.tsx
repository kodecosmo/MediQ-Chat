"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { userAgent } from "next/server";

import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";


export default function Home() {
  const { user } = useUser();

  return (
    <>

      {/* <Navbar /> */}

      <main className="flex ">
        <Sidebar />

        Hello {user && user.fullName}
      </main>


    </>
  );
}
