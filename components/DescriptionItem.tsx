"use client";

export default function DescriptionItem({ description }) {
  if(!description) return <p className="text-gray-500">No hay descripción del producto</p>
  return (
    <div
      className="text-gray-500"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
