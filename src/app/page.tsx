"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "lucide-react";





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
