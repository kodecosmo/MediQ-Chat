"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Navbar } from "@/app/components/navbar";
import { Sidebar } from "@/app/components/sidebar";






export default function Home() {
  const { user } = useUser();

  return (
    <>

      <Navbar />

      <main className="flex ">
        <Sidebar />

        Hello {user && user.fullName}
      </main>


    </>
  );
}
