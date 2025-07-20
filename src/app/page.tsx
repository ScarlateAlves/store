"use client";

import { Button } from "@/shared/components/Button";
import { Heading } from "@/shared/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-red-300 w-full">
          <Image
            className="object-cover max-h-[600px]"
            src="/image.png"
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
      </main>
    </div>
  );
}
