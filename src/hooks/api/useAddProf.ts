import { useMutation } from "@/utils/useMutation";
import { Prof } from "./type";
import { useQueryClient } from "@tanstack/react-query";

type Param = Omit<Prof, "_id">;

export function useAddProf() {
  const queryClient = useQueryClient();
  return useMutation<Param, Param>("/prof", "POST", {
    // TODO use optimistic update instead of invalidation
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profs"],
        refetchType: "all",
      });
    },
  });
}
