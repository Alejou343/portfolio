"use client";
import React from 'react'
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `"I am Alejandro Alvarez Uribe, a Fullstack AI Engineer, Fullstack Developer, and Chatbot Architect passionate about building intelligent AI-driven solutions. With expertise in Generative AI, the MERN stack, and automation, I specialize in developing scalable applications, AI chatbots, and workflow optimization tools that enhance efficiency and user experience.  
With a strong foundation in backend architecture, API development, and cloud technologies, I have successfully led projects that integrate AI into business operations, automating processes and improving decision-making. I thrive in dynamic environments, continuously expanding my knowledge to drive innovation and impact.  
Explore my portfolio to see how AI, automation, and software development come together to shape the future of technology. 🚀"`

const index = () => {
    return (
        <article className='h-auto min-h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl font-bold bg-gradient-to-r from-sky-500 to-cyan-700 bg-clip-text text-transparent mb-[5rem]'>PROFESSIONAL PROFILE</h1>
            <TextGenerateEffect words={words} className='md:w-1/2 w-full px-[2.5rem] text-justify items-center mx-auto md:flex' />
        </article>
    )

}

export default index
