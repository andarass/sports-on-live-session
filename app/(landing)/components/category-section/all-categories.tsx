"use client";

import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";

type TCategoriesProps = {
  categories: Category[];
};

const AllCategory = ({ categories }: TCategoriesProps) => {
  return (
    <section
      id="category-section"
      className="container min-h-screen mx-auto pt-40 pb-20 px-4 md:px-0"
    >
      {/* <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl md:text-3xl text-[#1A1A1A]">
          Browse By Categories
        </h2>
        <Link
          href="/categories"
          className="group flex gap-2 text-primary font-medium"
        >
          <span className="self-center border-b border-transparent group-hover:border-primary transition-all">
            See All Categories
          </span>
          <FiArrowRight className="self-center transition-transform group-hover:translate-x-1" />
        </Link>
      </div> */}

      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">CATEGORY</span>
        <span> PRODUCTS</span>
      </h2>

      {/* Grid Responsif: 2 kolom di HP, 4 di Tablet, 6 di Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-10">
        {categories.map((category) => (
          <div
            key={category._id}
            className="group rounded-2xl bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7D1] w-full aspect-square flex justify-center items-center 
                   transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 cursor-pointer"
          >
            <div className="flex flex-col items-center p-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={getImageUrl(category.imageUrl)}
                  fill // Menggunakan fill agar lebih fleksibel di container
                  className="object-contain scale-200"
                  alt={category.name}
                />
              </div>
              <div className="text-primary font-bold text-xl md:text-3xl text-center leading-tight">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCategory;
