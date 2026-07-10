/**
 * Transform WordPress GraphQL response for Header products
 */

export function transformHeaderProducts(data) {
  const products = data?.products?.nodes;
  if (!products) return [];

  return products.map((product) => ({
    id: product.id,
    title: product.title || "",
    slug: product.slug || "",
    description: product.productHeaderData?.productDescription || "",
    icon: product.productHeaderData?.producticon || "Play",
    color: product.productHeaderData?.productcoloricon || "#9aed66",
    image: product.productHeaderData?.productimagesrc?.node?.sourceUrl || "",
  }));
}
