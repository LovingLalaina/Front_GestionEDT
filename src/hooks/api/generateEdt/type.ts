import { classe } from "../Classe/type";
import { Matiere } from "../Matiere/type";
import { Niveau } from "../Niveau/type";
import { Prof } from "../type";

export type GenerateEdt = {
  matiere: Matiere;
  heure: string;
  date: Date;
  prof: Prof;
  niveau: Niveau;
  classe: classe;
};
