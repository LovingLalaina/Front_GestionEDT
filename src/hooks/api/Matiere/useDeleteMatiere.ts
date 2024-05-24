import { useMutation } from "@/utils/useMutation";

import { useQueryClient } from "@tanstack/react-query";

export function useDeleteMatiere(id: string) {
  const queryClient = useQueryClient();

  return useMutation(`/mat/${id}`, "DELETE", {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["matiere"],
        refetchType: "all",
      });
    },
  });
}
