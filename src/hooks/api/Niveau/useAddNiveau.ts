import { useMutation } from "@/utils/useMutation";
import { Niveau } from "./type";
import { useQueryClient } from "@tanstack/react-query";

type Param = Omit<Niveau, "_id">;

export function useAddNiveau() {
  const queryClient = useQueryClient();
  return useMutation<Param, Param>("/niveau", "POST", {
    // TODO use optimistic update instead of invalidation
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["niveau"],
        refetchType: "all",
      });
    },
  });
}
