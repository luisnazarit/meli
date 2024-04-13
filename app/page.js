import Breadcrumb from "@/components/Breadcrumb";
import Results from "@/components/Results";
import { API } from "@/constants/constants";

const getSearch = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {
    return e;
  }
};

export default async function Home({ searchParams }) {
  const { search } = searchParams;
  const results = await getSearch(`${API}?q=${search}`);
  const breadcrumb = await getSearch(`${API}/breadcrumb?q=${search}`);

  return (
    <>
      <div className="max-w-7xl w-full mx-auto py-3 px-4">
        <Breadcrumb breadcrumb={breadcrumb[0]?.path_from_root} />
      </div>
      <main
        role="main"
        className="max-w-7xl w-full mx-auto rounded bg-white p-4 min-h-80 px-4"
      >
        {searchParams.search ? (
          <Results results={results.items} />
        ) : (
          <div className="flex items-center justify-center">
            <div className="text-center mt-14">
              <h2 className="text-3xl mb-3">Bienvenido a Mercadolibre</h2>
              <p>Haz una búsqueda</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
