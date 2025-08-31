"use client";

import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Hero title="Olá" description="Descrição" />
      <section className="max-w-7xl m-auto w-full py-20">
        <div className="flex gap-6">
          <Heading>Flash Sales</Heading>
          <Button onClick={() => console.log("click")}>Aqui</Button>
        </div>
      </section>
    </div>
  );
}
