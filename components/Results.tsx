import React from "react";
import ItemProduct from "./ItemProduct";

type Result = {
  id: string,
  key: string,
  picture: string,
  title: string,
  price: number,
  free_shiping: boolean
}

export default function Results({ results }) {
  if (results && results.length > 0) {
    return results.map((e: Result) => <ItemProduct key={e.id} {...e} />);
  }
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="">
        <h2 className="text-2xl mb-2">
          No hay publicaciones que coincidan con tu búsqueda
        </h2>
        <ul className="ui-search-rescue__list">
          <li className="ui-search-rescue__item">
            <strong>Revisa la ortografía</strong> de la palabra.
          </li>
          <li className="ui-search-rescue__item">
            Utilizá <strong>palabras más genéricas</strong> o menos palabras.
          </li>
          <li className="ui-search-rescue__item">
            <a href="https://www.mercadolibre.com.ar/categories.html">
              {" "}
              Navega por las categorías
            </a>{" "}
            para encontrar un producto similar
          </li>
        </ul>
      </div>
    </div>
  );
}
