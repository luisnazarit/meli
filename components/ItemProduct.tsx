import React from "react";
import Image from "next/image";
import Price from "./Price";
import Link from "next/link";

type Item = {
  picture: string;
  title: string;
  id: string;
  price: number;
  free_shiping: boolean;
};

export default function ItemProduct(props: Item) {
  const { picture, title, id, price, free_shiping } = props;
  return (
    <div className="border-b-slate-200 border-b md:px-4 py-4 flex gap-4 md:gap-8 items-start">
      <Image
        width="90"
        height="90"
        alt={title}
        src={picture || "/no-image.jpeg"}
        className="w-[100px] md:w-[180px]"
      />
      <div className="search-main w-[60%]">
        <Link href={`/item/${id}`}>
          <Price price={price} freeShipping={free_shiping} />
        </Link>
        <h4>
          <Link href={`/item/${id}`}>{title}</Link>
        </h4>
      </div>
      <div className="text-gray-500 hidden md:block">
        <small>Santiago</small>
      </div>
    </div>
  );
}
