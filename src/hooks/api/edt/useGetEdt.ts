import { useQueryEDT } from "@/utils/useQueryEDT";
import { edt } from "./type";

export function useGetEdt() {
  return useQueryEDT<edt[]>(["edt"], "/edt");
}
