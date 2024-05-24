import { useMutation } from "@/utils/useMutation";
import { Matiere } from "./type";
import { useQueryClient } from "@tanstack/react-query";

type Param = Omit<Matiere, "_id">;

export function useAddMatiere() {
  const queryClient = useQueryClient();
  return useMutation<Param, Param>("/mat", "POST", {
    // TODO use optimistic update instead of invalidation
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["matiere"],
        refetchType: "all",
      });
    },
  });
}
