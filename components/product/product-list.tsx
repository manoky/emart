import ProductCard from "@/components/product/product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: unknown[];
  title?: string;
  limit?: number;
}) => {
  const paginatedData = limit ? data.slice(0, 1) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedData.map((product: unknown) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
