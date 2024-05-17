"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Navbar } from "@/app/components/navbar";
import { Sidebar } from "@/app/components/sidebar";
import { ChatArea } from "@/Components/chatArea";






export default function Home() {
  const { user } = useUser();

  return (
    <>

      <Navbar />

      <main className="flex min-h-screen">
        <Sidebar />

        <ChatArea />
      </main>
    </>
  );
}
