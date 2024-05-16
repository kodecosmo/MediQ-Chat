'use client';
import React from 'react';
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function Auth() {
    const { isSignedIn, user } = useUser();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6">
            {!isSignedIn ? (
                <div className="bg-white rounded-lg shadow-lg p-10 text-center">
                    <h1 className="text-2xl font-bold mb-6">Sign in to access this page</h1>
                    <SignInButton mode="modal" fallbackRedirectUrl='/'>
                        <button className="mt-5 border border-secondary bg-white px-4 py-1.5 text-base hover:text-white hover:bg-black transition-all duration-300">
                            <span>Sign in</span>
                        </button>
                    </SignInButton>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-lg p-10 text-center">
                    <h1 className="text-2xl font-bold mb-6">Hello {user.fullName}</h1>
                    <SignOutButton redirectUrl='/login'>
                        <button className="mt-5 border border-secondary bg-white px-4 py-1.5 text-base hover:text-white hover:bg-black transition-all duration-300">
                            <span>Sign out</span>
                        </button>
                    </SignOutButton>
                </div>
            )}
        </div>
    );
}
