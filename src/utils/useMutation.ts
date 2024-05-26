import {
  UseMutationOptions,
  useMutation as useMutationCore,
} from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "./constants";

type Method = "POST" | "PUT" | "DELETE" | "PATCH";

export const useMutation = <TParam, TResponse, TError = Error>(
  queryKey: string,
  method: Method = "POST",
  options?:
    | Omit<UseMutationOptions<TResponse, TError, TParam, unknown>, "mutationFn">
    | undefined,
  headers?: Record<string, string>
) => {

  return useMutationCore<TResponse, TError, TParam>({
    mutationFn: async (data?: TParam) => {
      const getToken = async () => {
        try {
          const response = await axios.get('/api/get-token');

          return response.data.access_token;
        } catch (error) {
          console.error('Error in getToken :', error);
          throw error;
        }
      };
      
      const token = await getToken();
      const res = await fetch(`${API_URL}${queryKey}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          ...headers,
        },
        body: JSON.stringify(data ?? {}),
      });
      return await res.json();
    },
    ...options,
  });
};
