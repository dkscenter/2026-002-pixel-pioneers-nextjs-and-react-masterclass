import { Product } from "@/type/product";
import Image from "next/image";

type ProductBoxProps = {
  product: Product;
};

export default function ProductBox({ product }: ProductBoxProps) {
  const { imageUrl, name, price, description } = product;

  return (
    <div className="m-[10px] w-[200px] rounded-lg border border-[#ddd] p-4 text-center shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="mb-4 h-[100px] w-[100px] rounded-full object-cover"
      />
      <h2 className="my-2 text-2xl">{name}</h2>
      <p className="text-[1.2rem] text-[#888]">${price.toFixed(2)}</p>
      <p className="text-base text-[#555]">{description}</p>
    </div>
  );
}
