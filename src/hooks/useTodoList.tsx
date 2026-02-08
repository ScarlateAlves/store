"use client";

import { Todo } from "@/type/todo";
import axios from "axios";
import { useQuery } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchTodo = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL + "/todos");
  return response?.data;
};

export function useTodoList() {
  const query = useQuery({
    queryFn: fetchTodo,
    queryKey: ["todos-data"], //chave que identifica de forma unica essa funcao
  });

  return {
    ...query,
    data: query.data || [],
  };
}
