import { products } from "@/data/products";
import ProductBox from "./ProductBox";
import ProductMoveBox from "./ProductMoveBox";

export default function ProductList() {
  return (
    <div className="mt-[50px] flex flex-wrap justify-center gap-5">
      <ProductMoveBox products={products} />
      <ProductMoveBox products={products} />
      <ProductMoveBox products={products} />
      <ProductMoveBox products={products} />
    </div>
  );
}
