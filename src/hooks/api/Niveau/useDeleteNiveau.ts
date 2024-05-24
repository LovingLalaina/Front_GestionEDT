import { useMutation } from "@/utils/useMutation";

import { useQueryClient } from "@tanstack/react-query";

export function useDeleteNiveau(id: string) {
  const queryClient = useQueryClient();

  return useMutation(`/niveau/${id}`, "DELETE", {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["niveau"],
        refetchType: "all",
      });
    },
  });
}
