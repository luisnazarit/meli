import Results from "@/components/Results";
import { API } from "@/constants/constants";

const getSearch = async (itemSearch) => {
  try {
    const res = await fetch(`${API}?q=${itemSearch}`);
    return res.json();
  } catch (e) {
    return e;
  }
};

export default async function Home({ searchParams }) {
  const { q } = searchParams;
  const results = await getSearch(q);

  return searchParams.q ? (
    <Results results={results.items} />
  ) : (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl">Bienvenido a Mercadolibre</h2>
        <p>Haz una búsqueda</p>
      </div>
    </div>
  );
}
