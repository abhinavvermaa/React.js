import React, { useEffect, useState } from "react";
import items from "./Items.json";

const Products = () => {
  const [products, setProducts] = useState(items);

  return (
    <div className=" flex-row flex justify-center flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-red-50 w-60 flex flex-col  items-center p-5 m-2 rounded-xl"
        >
          <img
            className="h-60 rounded-xl"
            src={product.image}
            alt={product.name}
          />
          <h3 className="py-5 text-l font-semibold">{product.name} </h3>
          <p className="text-sm">{product.category}</p>
          <p className="font-semibold p-2">
            {product.currency}
            {product.price}
          </p>
          <button className=" bg-gray-600 text-white p-2 rounded-xl w-full">
            Add to Bag
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
