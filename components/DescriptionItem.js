"use client";

import DOMPurify from "dompurify";

export default function DescriptionItem({ description }) {
  return (
    <div className="text-gray-500"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
}
