"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { userAgent } from "next/server";
import { Navbar } from "@/Components/navbar";
import { Sidebar } from "@/Components/sidebar";


export default function Home() {
  const { user } = useUser();

  return (
    <>
      {/* <Navbar /> */}

      <main className="">
        {/* Hello {user && user.fullName} */}

        {/* sidebar */}
        <section>
          <Sidebar />
        </section>
      </main>
    </>
  );
}
