"use client";

import { redirect, useSearchParams } from "next/navigation";

export function CurrentSearch() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  if (!query) {
    redirect("/");
  }

  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{query}</span>
    </p>
  );
}
