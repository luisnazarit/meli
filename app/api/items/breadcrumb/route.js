import { URL_SEARCH } from "@/constants/constants";
import { NextResponse } from "next/server";


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  try {
    const res = await fetch(`${URL_SEARCH}${query}`);
    const parseRes = await res.json();

    return NextResponse.json(parseRes.filters.find(e => e.id === "category")?.values || []);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "API Error" }, { status: 402 });
  }
}
