"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import ModalGeneral from '@/Containers/Modal';
import Information from '@/components/Information';

const Index = () => {

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <>
      {openModal && 
      <ModalGeneral state={openModal} setState={setOpenModal}>
        <Information />
      </ModalGeneral>}
      <div className="flex md:justify-between justify-center md:mt-[5rem] gap-[21rem]">
        <h1 className="text-3xl md:block hidden font-bold">
          AI Engineer
        </h1>
        <Button
        onClick={() => setOpenModal(true)}
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white 
        mx-auto border-sky-500 dark:border-slate-800 font-extrabold
        bg-gradient-to-r from-sky-500 to-cyan-700 bg-clip-text"
        >
          About Me
        </Button>
        <h1 className="text-3xl md:block hidden font-bold">
          Materials Engineer
        </h1>
      </div>
    </>
  )
};

export default Index;