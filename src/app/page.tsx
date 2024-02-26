import React from "react";
import Title from '@/components/Title';
import Social from "@/components/Social";
import { projects } from '@/utils/projects';
import Abstract from '@/components/Abstract';
import Projects from '@/components/Projects';
import Habilities from "@/components/Habilities";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center relative">
      <div className="h-[100vh]">
        <Title />
        <div className="flex px-[15vw] justify-between w-full left-0 absolute top-[75vh] z-10">
          <Social />
          <Habilities />
        </div>
      </div>
      <Abstract />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {projects?.map(project => 
          <Projects 
          title={project.title} 
          description={project.description} 
          link={project.link}
          image={project.image}
          />)}
      </div>
    </main>
  );
}