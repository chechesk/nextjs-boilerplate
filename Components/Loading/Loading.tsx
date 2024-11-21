'use client'
import React from "react";
import Image from "next/image"
import './Loading.css'
import mortres from '../../public/moltres-seeklogo.svg'
const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-32 h-32 animate-spin-slow">
        <Image
          src={mortres}
          alt="Loading"
          width={128}
          height={128}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Loading;
