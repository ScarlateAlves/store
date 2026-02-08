import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const deleteTodo = async (id: any) => {
  return await axios.delete(API_URL + "/todos/" + id);
};

export function useTodoMutateDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos-data"]);
    },
  });
  return mutate;
}
