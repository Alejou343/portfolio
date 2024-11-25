import React from "react";
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Social from "@/components/Social";
import { projects } from '@/utils/projects';
import Abstract from '@/components/Abstract';
import Projects from '@/components/Projects';
import Habilities from "@/components/Habilities";

export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center relative">
      <div className="h-[100vh] flex flex-col">
        <Title />
        <div className="flex px-[15vw] md:flex-row flex-col md:justify-between justify-center w-full left-0 absolute top-[50vh]">
          <Habilities />
          <Social />
        </div>
          <Button />
      </div>
      <Abstract />
      <div className='mb-[7rem] flex flex-col items-center'>
        <h1 className='text-center text-5xl font-bold bg-gradient-to-r from-sky-500 to-cyan-700 bg-clip-text text-transparent mb-[5rem]'> MY PROJECTS </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-4">
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
      <Footer />
    </main>
  );
}