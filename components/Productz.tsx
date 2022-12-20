import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Product } from "../typings";

interface Props {
  product: Product;
}

function Productz({ product }: Props) {


  return (
    <div>
    <div className="flex h-[200px] w-[300px] select-none flex-col space-y-3 rounded-xl bg-black  p-8 md:h-[300px] md:w-[400px] md:p-10">
      <Link key={product._id} href={`/product/${product.slug.current}`}>
      <div className="relative h-64 w-full md:h-72 hover:border-green-200 hover:border-2 rounded-3xl ">
                <img className="h-[200px]  ml-auto mr-auto w-[200px]" src={urlFor(product.image[0]).url()}   />
           <h1 className="text-white font-sans font-bold text-xl ml-auto mr-auto text-center mt-[20px]">{product.title}</h1>
            </div>
    </Link>
      </div>
    </div>
  );
}

export default Productz;
