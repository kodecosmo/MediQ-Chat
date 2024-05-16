'use client';
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { userAgent } from "next/server";
import { Navbar } from "@/Components/navbar";

export default function Home() {

  const { user } = useUser();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
        Hello {user && user.fullName}

        
      </main>
    </>
  );
}
