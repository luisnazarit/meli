import { URL_SEARCH } from "@/constants/constants";
import { NextResponse } from "next/server";

type Category = {
  id: string
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  try {
    const res = await fetch(`${URL_SEARCH}${query}`);
    const parseRes = await res.json();

    return NextResponse.json(parseRes.filters.find((e: Category) => e.id === "category")?.values || []);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "API Error" }, { status: 402 });
  }
}
