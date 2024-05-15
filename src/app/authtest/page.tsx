'use client';
import React from 'react'


import { useUser, SignInButton } from "@clerk/nextjs";




export default function Auth() {

    const { isSignedIn, user } = useUser();

    if (!isSignedIn) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>Sign in to access this page</h1>
                <SignInButton mode="modal" fallbackRedirectUrl="/community">
                    <button className="mt-5 border border-secondary bg-white px-4 py-1.5 text-base hover:text-white hover:bg-black">
                        <span>Sign in</span>
                    </button>
                </SignInButton>
            </main>
        );
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Hello {user.fullName}
        </main>
    );
}

