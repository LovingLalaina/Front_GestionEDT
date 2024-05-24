import { useQuery } from "@/utils/useQuery";
import { Niveau } from "./type";

export function useGetNiveau() {
  return useQuery<Niveau[]>(["niveau"], "/niveau");
}
