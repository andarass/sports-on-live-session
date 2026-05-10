import AllCategory from "../components/category-section/all-categories";
import { getAllCategories } from "@/app/services/category.service";

export default async function CategoryPage() {
  const categories = await getAllCategories();
  return (
    <main>
      <AllCategory categories={categories} />
    </main>
  );
}
``