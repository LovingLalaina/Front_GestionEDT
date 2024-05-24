import { useQuery } from "@/utils/useQuery";
import { Matiere } from "./type";

export function useGetMatiere() {
  return useQuery<Matiere[]>(["matiere"], "/mat");
}
