import {
  UseQueryOptions,
  useQuery as useQueryCore,
} from "@tanstack/react-query";
import axios from "axios";
import { API_URL , CONSUMER_KEY , CONSUMER_SECRET , TOKEN_ENDPOINT } from "./constants";

export const useQuery = <T>(
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
      const res = await axios.get(`${API_URL}${queryFnKey}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ${token}'
        },
      });
      return await res.data;
    },
    ...options,
  });
};
