import { edt } from "@/hooks/api/edt/type";
import { Prof } from "@/hooks/api/type";
import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpgrade } from "react-icons/gr";
import { WiTime9 } from "react-icons/wi";

const CardEdt = ({ idEdt, professeur, matiere, _id }: edt) => {
  return (
    <div className="cursor-pointer transition-all duration-300 delay-150 flex-shrink-0 w-full h-auto bg-gray-200 flex flex-col  gap-4 px-4 py-8 rounded-lg relative">
      <div className="flex  gap-2 ">
        <div className="flex   gap-2 p-2 bg-red-200">
          <p className="text-xl ">Delete</p>
          <AiOutlineDelete />
        </div>
        <div className="flex justify-center items-center gap-2 p-2 bg-yellow-200">
          <p className="text-xl ">Update</p>
          <GrUpgrade />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className=" text-6xl font-bold">{professeur.idProf}</p>
          <p className="text-2xl">
            {professeur.nom} {professeur.prenom}
          </p>
        </div>
        <div>
          {professeur.preferences?.map((prefe) => (
            <div key={prefe.jour} className="flex flex-col gap-2">
              <p className="text-2xl bg-[#85934a] text-white text-center ">
                {prefe.jour}
              </p>
              <div className="flex justify-between text-md font-semibold gap-2">
                {prefe.heures.map((heure) => (
                  <div key={heure} className="flex justify-center items-center gap-4">
                    <p>{heure}</p>
                    <WiTime9 className="text-2xl" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-2xl font-bold">Matiere</h1>
          <div>
            <p className="text-6xl font-bold text-right">{matiere.idMat}</p>
            <span className="text-xl">{matiere.nom}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEdt;
