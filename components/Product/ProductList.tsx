import { products } from "@/data/products";
import ProductBox from "./ProductBox";

export default function ProductList() {
  return (
    <div className="mt-[50px] flex flex-wrap justify-center gap-5">
      {products.map((product) => (
        <ProductBox key={product.name} product={product} />
      ))}
    </div>
  );
}
