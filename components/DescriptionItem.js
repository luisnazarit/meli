"use client";

export default function DescriptionItem({ description }) {
  return (
    <div
      className="text-gray-500"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
