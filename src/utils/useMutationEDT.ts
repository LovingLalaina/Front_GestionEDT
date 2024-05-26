import {
    UseMutationOptions,
    useMutation as useMutationCore,
  } from "@tanstack/react-query";
  import { API_URL_EDT } from "./constants";
  import axios from "axios";
  
  type Method = "POST" | "PUT" | "DELETE" | "PATCH";
  
  export const useMutationEDT = <TParam, TResponse, TError = Error>(
    queryKey: string,
    method: Method = "POST",
    options?:
      | Omit<UseMutationOptions<TResponse, TError, TParam, unknown>, "mutationFn">
      | undefined,
    headers?: Record<string, string>
  ) => {
    return useMutationCore<TResponse, TError, TParam>({
      mutationFn: async (data?: TParam) => {
        const getTokenEDT = async () => {
          try {
            const response = await axios.get('/api/get-token-edt');
  
            return response.data.access_token;
          } catch (error) {
            console.error('Error in getTokenEDT :', error);
            throw error;
          }
        };
        
        const token = await getTokenEDT();
        const res = await fetch(`${API_URL_EDT}${queryKey}`, {
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
  