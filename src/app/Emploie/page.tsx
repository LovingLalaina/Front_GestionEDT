"use client";
import CardProf from "@/components/cardProf/CardProf";
import Image from "next/image";
import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MyModal from "@/components/modalProf/ModalProf";
import { useGetProfs } from "@/hooks/api/useGetProfs";
import CardEdt from "@/components/cardProf/CardEdt";
import { useGetEdt } from "@/hooks/api/edt/useGetEdt";
import EdtModal from "@/components/modalProf/ModalEdt";

const Emploie = () => {
  const { data: edt, isLoading } = useGetEdt();
  let [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  console.log(edt);

  return (
    <div className="w-full p-2">
      <div className="flex justify-between items-center">
        <Image src="/proff.png" alt="prof" width={200} height={250} />
        <VscAdd className="w-[50px] h-[50px] lg:hidden bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-[#85934a] hover:text-white transition-all duration-300" />
        <button
          onClick={handleOpenModal}
          className="p-3 hidden lg:block border-none bg-[#85934a] text-white text-xl rounded-full hover:shadow-md"
        >
          Ajouter Nouveau Emploie
        </button>
        {isOpen && (
          <EdtModal closeModalEdt={handleOpenModal} isOpenEdt={isOpen} />
        )}
      </div>
      {isLoading ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          Chargement en cours...
        </div>
      ) : (
        <div className=" flex-col flex justify-center items-center   gap-4 mt-10">
          {edt?.map((emploi) => (
            <CardEdt
              key={emploi._id}
              idEdt={emploi._id}
              professeur={emploi.professeur}
              matiere={emploi.matiere}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Emploie;
