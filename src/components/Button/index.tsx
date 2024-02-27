"use client";
import React from "react";
import { Button } from "../ui/moving-border";

const index = () => {
  return (
    <div className="flex justify-between mt-[5rem] gap-[23rem]">
      <h1 className="text-3xl">
        Materials Engineer
      </h1>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white mx-auto border-neutral-200 dark:border-slate-800 font-extrabold"
        >
            About Me
        </Button>
      <h1 className="text-3xl">
        Software developer
      </h1>
    </div>
  )
}

export default index