"use client";
import { useGetGenerate } from "@/hooks/api/generateEdt/useGetGen";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";

const TABLE_HEAD = ["Heure", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

const TABLE_ROWS = [
  {
    heure: "8:00 AM-10:00 AM",
    job: "Manager",
    date: "23/04/18",
  },
  {
    heure: "10:00 AM-12:00 AM",
    job: "Manager",
    date: "23/04/18",
  },
  {
    heure: "14:00 PM-16:00 PM",
    job: "Manager",
    date: "23/04/18",
  },
  {
    heure: "16:00 PM-18:00 PM",
    job: "Manager",
    date: "23/04/18",
  },
];

export default function Home() {
  const { data: generateEdt } = useGetGenerate();

  const handleGenerate = async () => {
    return await axios.post("http://localhost:5000/api/generate");
  };

  console.log(generateEdt);

  return (
    <div className="p-4">
      <button
        onClick={handleGenerate}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Generer Automatiquement
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
      {generateEdt?.length == 0 ? (
        <p>PAS D&#39;EMPLOI DU TEMPS</p>
      ) : (
        <div className="mt-4 flex flex-col gap-8">
          {/**L1 */}
          <Card className="h-full w-full overflow-scroll overflow-y-hidden">
            <h1 className="text-4xl font-bold">L1 Groupe 1</h1>
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
                        className="font-bold text-xl leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-8 w-[10%]">8:00 AM - 10:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 0 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 4 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">10:00 AM - 12:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">14:00 PM - 16:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">16:00 PM - 18:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 20 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L1" && !edt.matiere?.nom.includes("C++"))
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          {/**L2 IG */}
          <Card className="h-full w-full overflow-scroll overflow-y-hidden">
            <h1 className="text-4xl font-bold">L2 IG</h1>
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
                        className="font-bold text-xl leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-8 w-[10%]">8:00 AM - 10:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 0 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture") && !edt.matiere?.nom.includes("C"))
                      .map((edt, index) => (
                        <>
                          {index === 4 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">*</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture") && !edt.matiere?.nom.includes("C"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">10:00 AM - 12:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture") && !edt.matiere?.nom.includes("C"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture") && !edt.matiere?.nom.includes("C"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">14:00 PM - 16:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">16:00 PM - 18:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 20 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          {/**L2 GB */}
          <Card className="h-full w-full overflow-scroll overflow-y-hidden">
            <h1 className="text-4xl font-bold">L2 GB</h1>
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
                        className="font-bold text-xl leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-8 w-[10%]">8:00 AM - 10:00 AM</td>
                  <td className="p-4 w-[18%]">*</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 4 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">10:00 AM - 12:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">14:00 PM - 16:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">16:00 PM - 18:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 20 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          {/**L3 IG */}
          <Card className="h-full w-full overflow-scroll overflow-y-hidden">
            <h1 className="text-4xl font-bold">L3 IG</h1>
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
                        className="font-bold text-xl leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-8 w-[10%]">8:00 AM - 10:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 0 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 4 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">10:00 AM - 12:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">14:00 PM - 16:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">16:00 PM - 18:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 20 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "L3")
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          {/**M1 IG */}
          <Card className="h-full w-full overflow-scroll overflow-y-hidden">
            <h1 className="text-4xl font-bold">M1 IG</h1>
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
                        className="font-bold text-xl leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-8 w-[10%]">8:00 AM - 10:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 0 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 4 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">10:00 AM - 12:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom.includes("L2") && !edt.matiere?.nom.includes("Architecture"))
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">14:00 PM - 16:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">16:00 PM - 18:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 20 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M1")
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          {/**M2 GB */}
          <Card className="h-full w-full overflow-scroll overflow-y-hidden">
            <h1 className="text-4xl font-bold">M2 GB</h1>
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
                        className="font-bold text-xl leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-8 w-[10%]">8:00 AM - 10:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 0 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 4 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">10:00 AM - 12:00 AM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 2 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">14:00 PM - 16:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 3 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 5 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="px-4 py-12 w-[10%]">16:00 PM - 18:00 PM</td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 20 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      *
                    </Typography>
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    {generateEdt
                      ?.filter((edt) => edt.niveau?.nom === "M2")
                      .map((edt, index) => (
                        <>
                          {index === 30 && (
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Nom Matiere:
                                    </span>{" "}
                                    {edt.matiere.nom}
                                  </p>
                                  <p>
                                    <span className="font-bold text-base">
                                      Nom:{" "}
                                    </span>
                                    {edt.prof.nom} {edt.prof.prenom}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Numero salle:
                                    </span>{" "}
                                    {edt.classe.idClasse}
                                  </p>
                                  <p>
                                    {" "}
                                    <span className="font-bold text-base">
                                      Capacite salle:
                                    </span>{" "}
                                    {edt.classe.capacite}
                                  </p>
                                </div>
                              </div>
                            </Typography>
                          )}
                        </>
                      ))}
                  </td>
                  <td className="p-4 w-[18%]">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      *
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      )}
    </div>
  );
}
