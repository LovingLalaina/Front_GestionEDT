import { useQuery } from "@/utils/useQuery";
import { Prof } from "./type";

export function useGetProfs() {
  return useQuery<Prof[]>(["profs"], "/prof");
}
