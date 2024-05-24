interface Preference {
  jour: string;
  heures: string[];
}

export type Prof = {
  idProf?: string;
  nom?: string;
  prenom?: string;
  preferences?: Preference[];
  _id: string;
};
