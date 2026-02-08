"use client";
import { Button } from "@/components/ui/Button";
import { useTodoList } from "@/hooks/useTodoList";
import { useTodoMutate } from "@/hooks/useTodoMutate";
import { useTodoMutateDelete } from "@/hooks/useTodoMutateDelete";
import { useState } from "react";

export default function TodoList() {
  const { data, isError, isLoading } = useTodoList();
  const { mutate } = useTodoMutate();
  const { mutate: deleteMutate } = useTodoMutateDelete();

  const [nome, setNome] = useState("");

  return (
    <div>
      <h1>TODO List</h1>
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Ocorreu um erro ao carregar os dados.</p>}
      <div className="flex flex-col items-center gap-4">
        {data?.map(({ title, id }, index) => (
          <div className="flex gap-4 items-center" key={index}>
            {title} {id}
            <input type="checkbox" />
            <Button onClick={() => deleteMutate(id)}>Deletar</Button>
          </div>
        ))}
      </div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          mutate(nome);
          setNome("");
        }}
      >
        <input
          className="border"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
