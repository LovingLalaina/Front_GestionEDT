import {
  UseMutationOptions,
  useMutation as useMutationCore,
} from "@tanstack/react-query";
import { API_URL , KEY_ECOLE } from "./constants";

type Method = "POST" | "PUT" | "DELETE" | "PATCH";

export const useMutation = <TParam, TResponse, TError = Error>(
  queryKey: string,
  method: Method = "POST",
  options?:
    | Omit<UseMutationOptions<TResponse, TError, TParam, unknown>, "mutationFn">
    | undefined,
  headers?: Record<string, string>
) => {
  const url = `${API_URL}${queryKey}`;
  return useMutationCore<TResponse, TError, TParam>({
    mutationFn: async (data?: TParam) => {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "API-Key": KEY_ECOLE,
          ...headers,
        },
        body: JSON.stringify(data ?? {}),
      });
      return await res.json();
    },
    ...options,
  });
};
