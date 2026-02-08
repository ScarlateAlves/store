import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const addTodo = async (title: string) => {
  return await axios.post(API_URL + "/todos", {
    title: title,
    completed: false,
  });
};

export function useTodoMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos-data"]);
    },
  });
  return mutate;
}
