"use client";
import CardProf from "@/components/cardProf/CardProf";
import Image from "next/image";
import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MyModal from "@/components/modalProf/ModalProf";
import { useGetProfs } from "@/hooks/api/useGetProfs";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpgrade } from "react-icons/gr";
import { Card, Typography } from "@material-tailwind/react";
import MatModal from "@/components/modalProf/ModalMatiere";
import { useGetMatiere } from "@/hooks/api/Matiere/useGetMatiere";
import { useDeleteMatiere } from "../../hooks/api/Matiere/useDeleteMatiere";

const TABLE_HEAD = ["Nom", "identifiant Matiere", "Nom Professeur", ""];

const Matiere = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { data: matieres, isLoading } = useGetMatiere();
  const [MatiereId, setMatiereId] = useState("");
  const { mutate: deleteMatiere } = useDeleteMatiere(MatiereId);

  const getIdMat = (id: string) => {
    setMatiereId(id);
    deleteMatiere({});
  };

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full p-2">
      <div className="flex justify-between items-center">
        <Image src="/book.png" alt="prof" width={200} height={250} />
        <VscAdd className="w-[50px] h-[50px] lg:hidden bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-[#85934a] hover:text-white transition-all duration-300" />

        <button
          onClick={handleOpenModal}
          className="p-3 hidden lg:block border-none bg-[#00ade9] text-white text-xl rounded-full hover:shadow-md"
        >
          Ajouter Nouveau Matiere
        </button>
        {isOpen && (
          <MatModal closeModalMat={handleOpenModal} isOpenMat={isOpen} />
        )}
      </div>
      <div className="flex justify-center">
        <Card className=" w-3/4 h-full  overflow-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matieres?.map(({ nom, idMat, _id }, index) => {
                const isLast = index === matieres.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50 ]";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {nom}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {idMat}
                      </Typography>
                    </td>

                    <td
                      className={`${classes} bg-blue-gray-50/50 flex gap-4 items-center`}
                    >
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium border border-gray-200 p-2 hover:bg-[#85934a] hover:text-white transition-all duration-300 delay-150 "
                      >
                        Modifier
                      </Typography>
                      <button
                        onClick={() => getIdMat(_id)}
                        color="blue-gray"
                        className="font-medium border border-gray-200 p-2 hover:bg-[#85934a] hover:text-white transition-all duration-300 delay-150 "
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Matiere;
