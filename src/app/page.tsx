"use client";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="w-full">
        <Image
          className="object-cover max-h-[600px]"
          src="/image-hero.jpg"
          alt="Next.js logo"
          layout="responsive"
          width={300}
          height={400}
        />
      </div>
      <section className="max-w-7xl m-auto w-full py-20">
        <div className="flex gap-6">
          <Heading>Flash Sales</Heading>
          <Button onClick={() => console.log("click")}>Aqui</Button>
        </div>
      </section>
    </div>
  );
}
