import { Todo } from "@/type/todo";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const putTodo = async (data: Todo) => {
  return await axios.put(API_URL + "/todos/" + data.id, {
    title: data.title,
    completed: data.completed,
  });
};

export function useTodoMutateput() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: putTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos-data"]);
    },
  });
  return mutate;
}
