"use client";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { useTodoList } from "@/hooks/useTodoList";
import { useTodoMutate } from "@/hooks/useTodoMutate";
import { useTodoMutateDelete } from "@/hooks/useTodoMutateDelete";
import { useTodoMutateput } from "@/hooks/useTodoMutatePut";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

const validateFormSchema = z.object({
  title: z.string().nonempty("O título é obrigatório"),
  completed: z.boolean(),
});

type ValidateFormSchema = z.infer<typeof validateFormSchema>;

export default function TodoList() {
  const { data, isError, isLoading } = useTodoList();

  const { mutate } = useTodoMutate();
  const { mutate: deleteMutate } = useTodoMutateDelete();
  const { mutate: putMutate } = useTodoMutateput();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidateFormSchema>({
    resolver: zodResolver(validateFormSchema),
  });

  const submitData: SubmitHandler<ValidateFormSchema> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <div className="p-10">
      <Heading>TODO List</Heading>

      <div className="flex">
        <form
          className="flex gap-2 items-center"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex flex-col">
            <label>Adicione um dado na lista</label>
            <input className="border-1" {...register("title")} />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <label>Marque se já completou</label>
          <input type="checkbox" {...register("completed")} />
          <Button type="submit">Adicionar</Button>
        </form>
      </div>

      {isLoading && <p>Carregando...</p>}
      {isError && <p>Ocorreu um erro ao carregar os dados.</p>}
      <div className="flex flex-col py-8">
        {data?.map(({ title, id, completed }, index) => (
          <div className="flex gap-6 items-center py-2" key={index}>
            <input
              type="checkbox"
              onChange={() =>
                putMutate({
                  id,
                  completed: !completed,
                  title: title,
                })
              }
              checked={completed}
            />
            {title}
            <Button onClick={() => deleteMutate(id)}>Deletar</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
