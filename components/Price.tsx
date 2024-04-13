import { formatCL } from "@/utils/utils";
import React from "react";
import Image from "next/image";

const icon = (freeShipping: Boolean) => {
  if (freeShipping) {
    return (
      <Image
        width={20}
        height={20}
        className="w-[20px] h-auto"
        alt="Free shipping"
        src="/ic_shipping@2x.png"
      />
    );
  }
  return;
};

export default function Price({ price, freeShipping }) {
  return (
    <div className="text-xl md:text-2xl mb-3 flex gap-4 items-center">
      {formatCL(price.amount)} {icon(freeShipping)}
    </div>
  );
}
