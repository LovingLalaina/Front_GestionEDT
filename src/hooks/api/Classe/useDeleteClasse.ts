import { useMutation } from "@/utils/useMutation";
import { classe } from "./type";
import { useQueryClient } from "@tanstack/react-query";

export function useDeleteClasse(id: string) {
  const queryClient = useQueryClient();

  return useMutation(`/classe/${id}`, "DELETE", {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["classe"],
        refetchType: "all",
      });
    },
  });
}
