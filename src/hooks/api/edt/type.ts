import { Matiere } from "../Matiere/type";
import { Prof } from "../type";

export type edt = {
  idEdt?: string;
  professeur: Prof;
  matiere: Matiere;
  _id?: string;
};
