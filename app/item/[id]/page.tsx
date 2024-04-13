import Breadcrumb from "@/components/Breadcrumb";
import DescriptionItem from "@/components/DescriptionItem";
import { API } from "@/constants/constants";
import { formatCL, truncateText } from "@/utils/utils";
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
  const { title, description, picture, id } = data.item;
  return {
    title: `${title} | Mercado Libre`,
    description:
      "Envíos Gratis en el día ✓ Compre Telefono en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.",
    "twitter:description": "hola",
    openGraph: {
      images: picture,
      title,
    },
    twitter: {
      card: "app",
      title,
      description: truncateText(description, 300),
      siteId: id,
      creator: "Mercado Libre",
      creatorId: id,
      images: {
        url: picture,
        alt: title,
      },
      app: {
        name: "Mercado Libre",
        id: {
          iphone: "Mercado Libre",
          ipad: "Mercado Libre",
          googleplay: "com.mercadolibre",
        },
        url: {
          iphone: `meli://item?${id}`,
          ipad: `meli://item?${id}`,
        },
      },
    },
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
      <div className="container py-4">
        <Breadcrumb breadcrumb={[{ id: "", name: title }]} />
      </div>

      <div className="container">
        <main role="main" className="rounded bg-white px-2 min-h-80">
          <div className="p-4">
            <Image
              src={picture}
              alt={title}
              width={90}
              height={90}
              className="w-full md:hidden mb-4"
            />
            <div className="flex gap-4 md:p-8 single-product">
              <div className="md:flex-1 main">
                <div className="md:px-40 mb-8">
                  <Image
                    src={picture}
                    alt={title}
                    width={90}
                    height={90}
                    className="w-full hidden md:block"
                  />
                </div>
                <h3 className="text-2xl mb-4">Descripción del producto</h3>
                <DescriptionItem description={description} />
              </div>
              <aside className="w-[30%] sidebar">
                <h1 className="text-xl mb-4 font-bold">{title}</h1>
                <div className="text-3xl flex items-start gap-1">
                  {formatCL(price.amount)}
                  <small className="text-sm">{price.decimals}</small>
                </div>
                <form className="mt-8">
                  <button className="btn btn-primary w-full">Comprar</button>
                </form>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
