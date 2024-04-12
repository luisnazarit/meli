import React from "react";

export default function Breadcrumb({ breadcrumb }) {
  if (!breadcrumb || breadcrumb.length === 0) return null;
  return (
    <div className="text-gray-500">
      {breadcrumb.map((e) => {
        return (
          <div key={e.id} className="inline-flex gap-2 mr-3 items-center breadcrumb">
            <span>{e.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
            </svg>
          </div>
        );
      })}
    </div>
  );
}
