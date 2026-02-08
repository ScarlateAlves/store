"use client";

/**
 * TODO List Page
 * MVP
* adicionar
* remover
* concluir
* persistir localmente
* 
* Stack
* React + TS → tipagem e segurança
* Tailwind → velocidade
* React Query → cache + loading + error automático
* 
* Arquitetura
*Formaliza sua estrutura: 
src/
 ├─ components/   (UI pura)
 ├─ hooks/        (estado + orquestração)
 ├─ services/     (regras + api)
 ├─ types/
 ├─ tests/

responsabilidades
components → renderizam
hooks → estado
services → regras + API
types → contratos

faria:

✅ CRUD
✅ separação de camadas
✅ tipagem
✅ loading/error
✅ 1 teste unitário no service
 */

export default function About() {
  const a = {
    todos: [
      { id: 1, title: "Estudar React", completed: false },
      { id: 2, title: "Fazer exercícios", completed: true },
    ],
  };
  return (
    <div>
      <h3>npm install -g json-server</h3>
      Crie um arquivo db.json na raiz do projeto:
      <h2>json-server --watch db.json --port 3001</h2>
    </div>
  );
}
