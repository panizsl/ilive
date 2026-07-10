/**
 * Transform WordPress GraphQL response for Footer products
 */

export function transformFooterProducts(data) {
  const products = data?.products?.nodes;
  if (!products) return [];

  return products.map((product) => ({
    id: product.id,
    title: product.title || "",
    slug: product.slug || "",
  }));
}
