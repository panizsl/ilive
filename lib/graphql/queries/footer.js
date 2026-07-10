/**
 * GraphQL query for Footer products data
 */
export const GET_FOOTER_PRODUCTS = `
  query GetFooterProducts {
    products {
      nodes {
        id
        title
        slug
      }
    }
  }
`;
