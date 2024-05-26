import {
    UseQueryOptions,
    useQuery as useQueryCore,
  } from "@tanstack/react-query";
  import axios from "axios";
  import { API_URL_EDT , KEY_EDT } from "./constants";
  
  export const useQueryEDT = <T>(
    queryKey: string[],
    queryFnKey: string,
    options?:
      | (Omit<
          UseQueryOptions<T, unknown, T, string[]>,
          "initialData" | "queryKey"
        > & {
          initialData?: (() => undefined) | undefined; 
        })
      | undefined
  ) => {
    return useQueryCore<T, unknown, T, string[]>({
      queryKey,
      queryFn: async () => {
        const res = await axios.get(`${API_URL_EDT}${queryFnKey}`, {
          headers: {
            "Content-Type": "application/json",
            "API-Key": KEY_EDT
          },
        });
        return await res.data;
      },
      ...options,
    });
  };
  