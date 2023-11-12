import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="pt-80">
        <h2 className="text-blue-400 text-4xl text-center">
          <Link href="/hello-world">Hello World</Link>
        </h2>
        <h2 className="mt-20 text-blue-400 text-4xl text-center">
          <Link href="/login">Login</Link>
        </h2>
        <h2 className="mt-20 text-blue-400 text-4xl text-center">
          <Link href="/signup">Sign Up </Link>
        </h2>
      </div>
    </div>
  );
}
