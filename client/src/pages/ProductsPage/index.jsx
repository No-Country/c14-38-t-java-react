import { useState } from "react";
import { AddItem } from "../../components/AddItem";

const ProductsPage = () => {
  return (
    <>
      <div>ProductsPage</div>
      <div className="flex">
        <div className="w-80 mr-20">Menú</div>
        <AddItem />
      </div>
    </>
  );
};

export default ProductsPage;
