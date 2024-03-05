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
      <div className="h-[100vh]">
        <Title />
        <div className="flex px-[15vw] justify-between w-full left-0 absolute top-[50vh] z-10">
          <Social />
          <Habilities />
        </div>
        <Button />
      </div>
      <Abstract />
      <div className='mb-[7rem] flex flex-col items-center'>
        <h1 className='text-center text-5xl font-bold bg-gradient-to-r from-sky-500 to-cyan-700 bg-clip-text text-transparent mb-[5rem]'> MY PROJECTS </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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