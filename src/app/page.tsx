"use client";

import { useUser } from "@clerk/nextjs";
import { ChatArea } from "./components/chatArea";
import { Sidebar } from "./components/sidebar";


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
