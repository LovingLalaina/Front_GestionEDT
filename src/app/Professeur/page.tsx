"use client";
import CardProf from "@/components/cardProf/CardProf";
import Image from "next/image";
import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MyModal from "@/components/modalProf/ModalProf";
import { useGetProfs } from "@/hooks/api/useGetProfs";
import { useDeleteProf } from "@/hooks/api/useDeleteProf";

const Professeur = () => {
  const { data: profs, isLoading } = useGetProfs();
  let [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full p-2">
      <div className="flex justify-between items-center">
        <Image src="/proff.png" alt="prof" width={200} height={250} />
        <VscAdd className="w-[50px] h-[50px] lg:hidden bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-[#85934a] hover:text-white transition-all duration-300" />
        <button
          onClick={handleOpenModal}
          className="p-3 hidden lg:block border-none bg-[#85934a] text-white text-xl rounded-full hover:shadow-md"
        >
          Ajouter Nouveau Professeur
        </button>
        {isOpen && (
          <MyModal closeModalProf={handleOpenModal} isOpenProf={isOpen} />
        )}
      </div>
      {isLoading ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          Chargement en cours...
        </div>
      ) : (
        <div className=" flex-col flex justify-center items-center   gap-4 mt-10">
          {profs?.map((prof) => (
            <CardProf
              key={prof._id}
              nom={prof.nom}
              prenom={prof.prenom}
              preferences={prof.preferences}
              _id={prof._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Professeur;
