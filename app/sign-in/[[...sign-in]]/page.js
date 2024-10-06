"use client";

import { SignIn } from "@clerk/nextjs";

export default function Home() {

  return (
    <div className="flex items-center justify-center bg-blue-800 w-screen h-screen">
      <SignIn fallbackRedirectUrl={'/dashboard'} />
    </div>
  );
}