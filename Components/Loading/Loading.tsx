'use client'
import React from "react";
import Image from "next/image"
import './Loading.css'
import Logo from '@/public/moltres-seeklogo.svg'
const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-32 h-32 animate-spin-slow">
        <Image
          src={Logo}
          alt="Loading"
          width={200} 
          height={100} 
          priority
          className="rounded-full w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Loading;
