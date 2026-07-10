/**
 * GraphQL query for Header products data
 */
export const GET_HEADER_PRODUCTS = `
  query GetHeaderData {
    products {
      nodes {
        id
        title
        slug
        productHeaderData {
          productDescription
          producticon
          productcoloricon
          productimagesrc {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
