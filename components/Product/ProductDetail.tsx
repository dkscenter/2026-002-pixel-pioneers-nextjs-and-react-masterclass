import React from "react";
import Image from "next/image";
import { Product } from "@/type/product";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <Image
          width={96}
          height={96}
          src={product.imageUrl}
          alt={product.name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-900 font-semibold">${product.price}</p>
      </div>
    </div>
  );
}
