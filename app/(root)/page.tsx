import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/actions/products";

export default async function HomePage() {
  const products = (await getLatestProducts()) || [];
  return <ProductList data={products} title="Newest Arrivals" />;
}
