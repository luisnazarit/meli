import { API_ITEMS } from "@/constants/constants";
import { getDecimals } from "@/utils/utils";
import { NextResponse } from "next/server";

const parseQuery = (item, description) => {
  const { id, title, condition } = item;
  return {
    author: {
      name: "Luis",
      lastname: "Nazarit",
    },
    item: {
      id,
      title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: getDecimals(item.price)
      },
      picture: item.thumbnail,
      condition,
      free_sheeping: item.shipping.free_shipping,
      sold_quantity: item.initial_quantity,
      description,
    },
  };
};

export async function GET(req, { params }) {
  console.log(params);
  try {
    const res = await fetch(`${API_ITEMS}${params.id}`);
    const parseRes = await res.json();

    const description = await fetch(`${API_ITEMS}${params.id}/description`);
    const parseDescription = await description.json();

    return NextResponse.json(parseQuery(parseRes, parseDescription.plain_text));
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "API Error" }, { status: 402 });
  }
}
