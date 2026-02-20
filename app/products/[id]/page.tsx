import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ProductDetailParams {
  id: string;
}

interface ProductDetailProps {
  params: Promise<ProductDetailParams>;
}

export default async function Product({ params }: ProductDetailProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 flex items-center">
        <Link href={"/products"}>Our Cats</Link>
        <ChevronRightIcon className="h-5 w-5 ml-2" />
        Cat detail
      </h1>
      Product ID: {id}
    </div>
  );
}
