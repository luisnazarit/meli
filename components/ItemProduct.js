import React from "react";
import Image from "next/image";
import Price from "./Price";

export default function ItemProduct(props) {
  const { picture, title, id, price, free_sheeping } = props;
  return (
    <div className="border-b-slate-200 border-b p-4 flex gap-8">
      <Image width="90" height="90" alt={title} src={picture} className="w-[180px]" />
      <div className="search-main w-[60%]">
        <Price price={price} freeShepping={free_sheeping} />
        <h4>
          <a href={`/item/${id}`}>{title}</a>
        </h4>
      </div>
      <div>hola</div>
    </div>
  );
}
