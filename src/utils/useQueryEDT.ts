import {
    UseQueryOptions,
    useQuery as useQueryCore,
  } from "@tanstack/react-query";
  import axios from "axios";
  import { API_URL_EDT } from "./constants";
  
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

        const getTokenEDT = async () => {
          try {
            const response = await axios.get('/api/get-token-edt');
    
            return response.data.access_token;
          } catch (error) {
            console.error('Error in getTokenEdt :', error);
            throw error;
          }
        };

        const token = await getTokenEDT();
        const res = await axios.get(`${API_URL_EDT}${queryFnKey}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        });
        return await res.data;
      },
      ...options,
    });
  };
  