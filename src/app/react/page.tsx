"use client";
import { useEffect, useState } from "react";

export default function ReactExemplo() {
  const [data, setData] = useState<any>(undefined);

  const fetchData = async () => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/notebook",
    );
    setData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{data?.nome}</h1>
    </div>
  );
}
