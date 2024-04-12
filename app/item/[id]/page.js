import { API } from "@/constants/constants";
import { formatCL } from "@/utils/utils";
import Image from "next/image";

const getItem = async (item) => {
  try {
    const res = await fetch(`${API}/${item}`);
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default async function Page({ params }) {
  const item = await getItem(params.id);
  const { title, description, price, picture } = item.item;

  if (!item) return <p>Producto inextistente</p>;
  return (
    <div className="flex gap-4 p-8">
      <div className="flex-1">
        <div className="mb-4 p-20">
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
        <h2 className="text-xl mb-4">{title}</h2>
        <div className="text-3xl flex items-start gap-1">
          {formatCL(price.amount)}
          <small className="text-sm">{price.decimals}</small>
        </div>
        <form className="my-8">
          <button className="btn btn-primary w-full">Comprar</button>
        </form>
      </div>
    </div>
  );
}
