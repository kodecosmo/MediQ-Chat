"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { userAgent } from "next/server";
import { Sidebar } from "lucide-react";
import { ChatArea } from "./components/chatArea";


export default function Home() {
  const { user } = useUser();

  return (
    <>
      <main className="flex min-h-screen">
        <Sidebar />

        <ChatArea />
      </main>

      
    </>
  );
}
