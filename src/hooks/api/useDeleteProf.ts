import { useMutation } from "@/utils/useMutation";
import { Prof } from "./type";
import { useQueryClient } from "@tanstack/react-query";

type Param = {
  id: string;
} & Omit<Prof, "_id">;

export function useDeleteProf(id: string) {
  const queryClient = useQueryClient();

  return useMutation<Param, Param>(`/prof/${id}`, "DELETE", {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profs"],
        refetchType: "all",
      });
    },
  });
}
