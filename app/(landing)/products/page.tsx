import AllProduct from "../components/product-section/all-product";
import { getAllProducts } from "@/app/services/product.service";

export default async function ProductPage() {
  const products = await getAllProducts();
  return (
    <main>
      <AllProduct products={products} />
    </main>
  );
}
