"use client";
import React from 'react'
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `"I am Alejandro Alvarez Uribe, materials engineering and software developer deeply committed to advancing 
professionally in the realms of materials science and software development. With a burgeoning passion for both fields, 
I bring 6 months of hands-on experience in materials alongside an additional 10 months of dedicated work as a software developer.
Eager to immerse myself in diverse learning experiences that serve as catalysts for my industrial proficiency, 
I thrive on acquiring new skills and honing them to perfection. Explore my portfolio to witness the fusion of innovation, 
expertise, and relentless pursuit of excellence."`

const index = () => {
    return <TextGenerateEffect words={words} className='w-1/2 h-[100vh] items-center mx-auto hidden lg:flex' />;
}

export default index
