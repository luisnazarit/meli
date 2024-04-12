import Results from "@/components/Results";
import { API_SEARCH } from "@/constants/constants";
import Image from "next/image";

const getSearch = async (itemSearch) => {
  try {
    const res = await fetch(`${API_SEARCH}?q=${itemSearch}`);
    return res.json();
  } catch (e) {
    return e;
  }
};

export default async function Home({ searchParams }) {
  const { q } = searchParams;
  const results = await getSearch(q);

  return (
    <>
      <header
        role="header"
        className="flex items-center justify-center bg-yellow-300 mb-2"
      >
        <div className="max-w-7xl w-full py-3 flex gap-4 items-center">
          <Image
            src="/Logo_ML@2x.png.png.png"
            width={100}
            height={100}
            className="w-[60px] h-auto"
            alt="ML"
          />
          <form action="/" className="flex w-full">
            <input
              name="q"
              type="search"
              placeholder="Nunca dejes de buscar..."
            />
            <button className="search-btn bg-gray-50 flex items-center px-4">
              <Image
                src="/ic_Search@2x.png"
                width={32}
                height={32}
                className="w-[24px] h-auto"
                alt="Search"
              />
            </button>
          </form>
        </div>
      </header>
      <main role="main" className="max-w-7xl w-full mx-auto rounded bg-white">
        <Results results={results.items} />
      </main>
    </>
  );
}
