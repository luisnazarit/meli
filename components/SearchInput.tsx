"use client"

export default function SearchInput() {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("search");

  return (
    <input
      name="search"
      type="search"
      defaultValue={query || ""}
      placeholder="Nunca dejes de buscar..."
    />
  );
}
