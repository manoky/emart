"use server";
import { getProductBySlug } from "@/actions/products";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductPrice from "@/components/product/product-price";
import ProductImages from "@/components/product/product-images";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }
  const isInStock = product.stock > 0;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          {" "}
          <ProductImages images={product.images} />
        </div>
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p>
              {product.rating} {product.reviewsCount} Reviews
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductPrice
                price={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Product Description</p>
            <p>{product.description}</p>
          </div>
        </div>
        {/*{ }*/}
        <div>
          <Card>
            <CardContent>
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice price={Number(product.price)} />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {isInStock ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              {isInStock && (
                <div className="flex-center">
                  {" "}
                  <Button className="w-full">Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ProductDetailsPage;
