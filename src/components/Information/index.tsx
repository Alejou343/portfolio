import React from "react";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className="About">
      <div className="flex flex-col items-center justify-center px-[10vw]">
        <div className="rounded-full p-2 mb-4 bg-gradient-to-r from-cyan-700 to-sky-500">
          <Image
            width={200}
            height={200}
            src="/assets/Social/Social-photoAAU.jpg"
            alt="Alejandro"
            className="rounded-full aspect-square  object-cover"
          />
        </div>
        <p className="text-lg font-bold">Hi, My name is</p>
        <p className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-sky-200 bg-clip-text text-transparent">
          Alejandro Alvarez Uribe
        </p>
        <p className="text-lg mb-3">
          Materials Engineer | Web Developer | Data Analyst
        </p>
      </div>
      <div className="mt-4 w-1/3 flex justify-between mx-auto">
        <p className="mb-2">alejandro.auribe1@gmail.com</p>
        <Image
          width={50}
          height={50}
          src="https://flagcdn.com/28x21/co.png"
          alt="Colombia"
          className="h-4 w-auto"
        />
      </div>
      <div className="flex mt-4 justify-center">
        <Link
          href="https://www.linkedin.com/in/alejandro-alvarez-65030a240"
          target="_blank"
          className="mr-4"
        >
          <Image
            width={40}
            height={40}
            src="/assets/Social/Social-linkedin.png"
            alt="LinkedIn"
            className="h-6 w-auto"
          />
        </Link>
        <Link
          href="https://github.com/alejou343"
          target="_blank"
          className="mr-4"
        >
          <Image
            width={40}
            height={40}
            src="/assets/Social/Social-github.png"
            alt="GitHub"
            className="h-6 w-auto bg-white rounded-full"
          />
        </Link>
        <Link
          href="https://instagram.com/alejou343"
          target="_blank"
          className="mr-4"
        >
          <Image
            width={40}
            height={40}
            src="/assets/Social/Social-instagram.png"
            alt="Instagram"
            className="h-6 w-auto"
          />
        </Link>
        <Link href="CVAlejandro.pdf" download>
          <Image
            width={40}
            height={40}
            src="/assets/Social/Social-cv.png"
            alt="Download"
            className="h-6 w-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default index;
