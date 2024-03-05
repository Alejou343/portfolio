"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

const index = () => {
  return (
    <section className="h-[40rem] w-screen md:w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center bg-gradient-to-r from-sky-500 to-cyan-700 bg-clip-text text-transparent relative z-20">
        Alejou343
      </h1>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.8}
          maxSize={1.9}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#0ea5e9"
        />
        <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </section>
  )
};

export default index;