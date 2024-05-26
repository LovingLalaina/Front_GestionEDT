import { useQueryEDT } from "@/utils/useQueryEDT";
import { GenerateEdt } from "./type";

export function useGetGenerate() {
  return useQueryEDT<GenerateEdt[]>(["edt"], "/generate");
}
