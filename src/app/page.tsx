import React from "react";
import Title from '@/components/Title';
import Social from "@/components/Social";
import Button from '@/components/Button';
import { projects } from '@/utils/projects';
import Abstract from '@/components/Abstract';
import Projects from '@/components/Projects';
import Habilities from "@/components/Habilities";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center relative">
      <div className="h-[100vh]">
        <Title />
        <div className="flex px-[15vw] justify-between w-full left-0 absolute top-[50vh] z-10">
          <Social />
          <Habilities />
        </div>
        <Button />
      </div>
      <Abstract />
      <div className='h-[100vh] flex flex-col items-center'>
          <h1 className='text-center text-5xl font-bold text-blue-300 mb-[5rem]'> MY PROJECTS </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-4">
            {projects?.map(project => 
            <Projects
            key={project.id} 
            title={project.title} 
            description={project.description} 
            link={project.link}
            image={project.image}
            />)}
          </div>
        </div>
    </main>
  );
}