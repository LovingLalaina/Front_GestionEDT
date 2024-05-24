import { useMutation } from "@/utils/useMutation";
import { classe } from "./type";
import { useQueryClient } from "@tanstack/react-query";

type Param = Omit<classe, "_id">;

export function useAddClasse() {
  const queryClient = useQueryClient();
  return useMutation<Param, Param>("/classe", "POST", {
    // TODO use optimistic update instead of invalidation
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["classe"],
        refetchType: "all",
      });
    },
  });
}
