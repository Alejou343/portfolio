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
      <div className="flex justify-between mt-[5rem] gap-[22rem]">
        <h1 className="text-3xl">
          Materials Engineer
        </h1>
        <Button
        onClick={() => setOpenModal(true)}
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white mx-auto border-neutral-200 dark:border-slate-800 font-extrabold"
        >
            About Me
        </Button>
        <h1 className="text-3xl">
          Software developer
        </h1>
      </div>
    </>
  )
};

export default Index;