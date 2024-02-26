"use client";
import React from "react";
import { Button } from "../ui/moving-border";

const index = () => {
  return (
    <div className="flex justify-center mt-[10rem]">
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white mx-auto border-neutral-200 dark:border-slate-800 font-extrabold"
        >
            About Me
        </Button>
    </div>
  )
}

export default index