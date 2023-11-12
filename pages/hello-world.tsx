import React from "react";
import withAuth from "@/components/HOC/withAuth";

function HelloWorld() {
  return (
    <div className="w-screen h-screen">
      <h2 className="text-center mt-80 font-bold text-4xl">Hello World !</h2>
    </div>
  );
}

export default withAuth(HelloWorld);
