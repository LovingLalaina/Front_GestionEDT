import { useQuery } from "@/utils/useQuery";
import { classe } from "./type";

export function useGetClasse() {
  return useQuery<classe[]>(["classe"], "/classe");
}
