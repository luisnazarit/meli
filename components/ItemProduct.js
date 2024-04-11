import React from "react";

export default function ItemProduct(props) {

  const {thumbnail, title, permalink, description} = props;
  return <div className="border-b-slate-200 border-b p-4 flex gap-8">
    <img src={thumbnail} />
    <div className="search-main">
      <h4><a href={permalink}>{title}</a></h4>
      <p></p>
    </div>
  </div>
}
