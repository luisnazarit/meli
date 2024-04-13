import { URL_SEARCH } from "@/constants/constants";
import { getDecimals } from "@/utils/utils";
import { NextResponse } from "next/server";

interface Item {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
}

type Filters = {
  id: string,
  values?: { path_from_root: { name: string }[] }[];
}

type Arr = {
  results: Item[],
  filters: Filters[]
}

const parseQuery = (arr: Arr) => {
  const results = arr.results.map((e) => ({
    id: e.id,
    title: e.title,
    price: {
      currency: e.currency_id,
      amount: e.price,
      decimals: getDecimals(e.price)
    },
    picture: e.thumbnail,
    condition: e.condition,
    free_shiping: e.shipping.free_shipping,
  }));

  const categories = () => {
    if (!arr.filters.length) return [];
    const category = arr.filters.find((e) => e.id === "category");

    if (category) {
      return category.values[0]?.path_from_root.map((e) => e.name);
    }
    return [];
  };

  return {
    categories: categories(),
    items: results.slice(0, 4),
  };
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  try {
    const res = await fetch(`${URL_SEARCH}${query}`);
    const parseRes = await res.json();

    return NextResponse.json(parseQuery(parseRes));
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "API Error" }, { status: 402 });
  }
}
