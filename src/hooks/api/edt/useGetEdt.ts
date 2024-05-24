import { useQuery } from "@/utils/useQuery";
import { edt } from "./type";

export function useGetEdt() {
  return useQuery<edt[]>(["edt"], "/edt");
}
