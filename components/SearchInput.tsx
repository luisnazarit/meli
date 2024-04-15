"use client"
import { useEffect, useState } from "react";

export default function SearchInput() {
  
  const [url, setUrl] = useState(null);
  const query = url?.searchParams.get("search")

  useEffect(() => {
    setUrl(new URL(window.location.href))
  }, []);

  return (
    <input
      name="search"
      type="search"
      defaultValue={query || ""}
      placeholder="Nunca dejes de buscar..."
    />
  );
}
