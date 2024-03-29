"use client";
import React from 'react'
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `"I am Alejandro Alvarez Uribe, materials engineering and software developer deeply committed to advancing 
professionally in the realms of materials science and software development. With a burgeoning passion for both fields, 
I bring 6 months of hands-on experience in materials alongside an additional 10 months of dedicated work as a software developer.
Eager to immerse myself in diverse learning experiences that serve as catalysts for my industrial proficiency, 
I thrive on acquiring new skills and honing them to perfection. Explore my portfolio to witness the fusion of innovation, 
expertise, and relentless pursuit of excellence".`

const index = () => {
    return (
        <article className='h-auto min-h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl font-bold bg-gradient-to-r from-sky-500 to-cyan-700 bg-clip-text text-transparent mb-[5rem]'>PROFESSIONAL PROFILE</h1>
            <TextGenerateEffect words={words} className='md:w-1/2 w-full px-[2.5rem] text-justify items-center mx-auto md:flex' />
        </article>
    )

}

export default index
