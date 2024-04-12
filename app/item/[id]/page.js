import Breadcrumb from "@/components/Breadcrumb";
import { API } from "@/constants/constants";
import { formatCL } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const getItem = async (item) => {
  try {
    const res = await fetch(`${API}/${item}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};


export async function generateMetadata({ params }) {
  const data = await getItem(params.id);
  return {
    title: `${data.item.title} | Mercadolibre`
  };
}


export default async function Page({ params }) {
  const item = await getItem(params.id);

  if (!item)
    return (
      <div className="flex items-center justify-center">
        <div className="text-center mt-14">
          <h4 className="font-bold text-lg mb-3">
            Parece que esta página no existe
          </h4>
          <p>
            <Link href="/">Ir a la página principal</Link>
          </p>
        </div>
      </div>
    );

  const { title, description, price, picture } = item.item;

  return (
    <>
    {/* <Breadcrumb  /> */}
    <main
      role="main"
      className="max-w-7xl w-full mx-auto rounded bg-white p-4 min-h-80"
    >
      <div className="flex gap-4 p-8">
        <div className="flex-1">
          <div className="px-40 mb-8">
            <Image
              src={picture}
              alt={title}
              width={90}
              height={90}
              className="w-full"
            />
          </div>
          <h3 className="text-2xl mb-4">Descripción del producto</h3>
          <p>{description}</p>
        </div>
        <div className="w-[30%]">
          <h1 className="text-xl mb-4 font-bold">{title}</h1>
          <div className="text-3xl flex items-start gap-1">
            {formatCL(price.amount)}
            <small className="text-sm">{price.decimals}</small>
          </div>
          <form className="my-8">
            <button className="btn btn-primary w-full">Comprar</button>
          </form>
        </div>
      </div>
    </main>
    </>
  );
}
