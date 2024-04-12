import { formatCL } from "@/utils/utils";
import React from "react";
import Image from "next/image";

const icon = (freeShepping) => {
  if (freeShepping) {
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

export default function Price({ price, freeShepping }) {
  return (
    <div className="text-2xl mb-3 flex gap-4 items-center">
      {formatCL(price.amount)} {icon(freeShepping)}
    </div>
  );
}
