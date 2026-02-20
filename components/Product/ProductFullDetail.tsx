import React from "react";
import Image from "next/image";
import { Product } from "@/type/product";
import { StarIcon } from "@heroicons/react/24/outline";

interface ProductFullDetailProps {
  product: Product;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductFullDetail({ product }: ProductFullDetailProps) {
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="object-cover object-center"
            width={500}
            height={500}
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {product.name}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-2xl text-gray-900">${product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h4 className="sr-only">Reviews</h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        5 > rating ? "text-gray-900" : "text-gray-200",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{5} out of 5 stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  112 reviews
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Product Detail
            </h3>

            <form>
              {product.description}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to box
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
