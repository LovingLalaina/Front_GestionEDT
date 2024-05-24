import { useQuery } from "@/utils/useQuery";
import { GenerateEdt } from "./type";

export function useGetGenerate() {
  return useQuery<GenerateEdt[]>(["edt"], "/generate");
}
