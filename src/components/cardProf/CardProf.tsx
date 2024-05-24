import Professeur from "@/app/Professeur/page";
import { Prof } from "@/hooks/api/type";
import { useDeleteProf } from "@/hooks/api/useDeleteProf";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpgrade } from "react-icons/gr";

const CardProf = ({ nom, prenom, _id, preferences }: Prof) => {
  const deleteProf = useDeleteProf(_id);
  const handleDelete = async () => {
    try {
      await deleteProf.mutateAsync({
        id: _id,
      });
    } catch (error) {
      console.error("Error deleting prof:", error);
    }
  };
  return (
    <div key={_id} className="cursor-pointer transition-all duration-300 delay-150   flex-shrink-0 w-full h-auto bg-gray-200 flex flex-col  gap-4 px-4 py-8 rounded-lg relative">
      <div className="flex  gap-2 ">
        <button
          className="flex  items-center gap-2 p-2 bg-red-200"
          onClick={handleDelete}
        >
          <p className="text-xl ">Delete</p>
          <AiOutlineDelete />
        </button>
        <div className="flex justify-center items-center gap-2 p-2 bg-yellow-200">
          <p className="text-xl ">Update</p>
          <GrUpgrade />
        </div>
      </div>

      <div className="flex  gap-16">
        <p className="text-xl font-bold">
          {nom} {prenom}
        </p>
        <div className="flex flex-wrap gap-6">
          {preferences?.map((preference) => (
            <div key={preference.jour} className="flex flex-col gap-2">
              <p className="text-2xl bg-[#85934a] text-white text-center">
                {preference.jour}
              </p>
              <div className="flex justify-between text-md font-semibold gap-2">
                {preference.heures.map((heure) => (
                  <p key={heure}>{heure}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProf;
