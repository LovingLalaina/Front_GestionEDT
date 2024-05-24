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
import { useGetClasse } from "@/hooks/api/Classe/useGetClasse";
import ModalClasse from "@/components/modalProf/ModalClasse";
import { useDeleteClasse } from "@/hooks/api/Classe/useDeleteClasse";

const TABLE_HEAD = ["Numero Salle", "Capacite", "option"];

const Classe = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { data: classe, isLoading } = useGetClasse();
  const [classeId, setClasseId] = useState("");
  const { mutate: deleteClasse } = useDeleteClasse(classeId);

  const getClasseId = (id: string) => {
    setClasseId(id);
    deleteClasse({});
  };

  // const handleDelete = async (_id: string) => {
  //   const deleteClasse = useDeleteClasse(_id);
  // };

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full p-2">
      <div className="flex justify-between items-center">
        <Image src="/salle.jpg" alt="prof" width={200} height={250} />
        <VscAdd className="w-[50px] h-[50px] lg:hidden bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-[#85934a] hover:text-white transition-all duration-300" />

        <button
          onClick={handleOpenModal}
          className="p-3 hidden lg:block border-none bg-[#b35aae] text-white text-xl rounded-full hover:shadow-md"
        >
          Ajouter Classe
        </button>
        {isOpen && (
          <ModalClasse
            closeModalClasse={handleOpenModal}
            isOpenClasse={isOpen}
          />
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
              {classe?.map(({ idClasse, capacite, _id }, index) => {
                const isLast = index === classe.length - 1;
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
                        {idClasse}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {capacite}
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
                        onClick={() => getClasseId(_id)}
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

export default Classe;
