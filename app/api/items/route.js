import { NextResponse } from "next/server"

export async function GET(req) {

  const {searchParams} = new URL(req.url);
  const query = searchParams.get("q");

  const URL_SEARCH = 'https://api.mercadolibre.com/sites/MLA/search?q='

  console.log("QUERY", query)

  try {
  const res = await fetch(`${URL_SEARCH}${query}`)
  const parseRes = await res.json();
  return NextResponse.json(parseRes);
  } catch (err) {
    console.log(err)
    return NextResponse.json({message: 'API Error'}, {status: 402})
  }

}