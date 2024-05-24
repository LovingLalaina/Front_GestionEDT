import { useMutation } from "@/utils/useMutation";
import { edt } from "./type";
import { useQueryClient } from "@tanstack/react-query";

type Param = Omit<edt, "_id">;

export function useAddEdt() {
  const queryClient = useQueryClient();
  return useMutation<Param, Param>("/edt", "POST", {
    // TODO use optimistic update instead of invalidation
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["edt"],
        refetchType: "all",
      });
    },
  });
}
