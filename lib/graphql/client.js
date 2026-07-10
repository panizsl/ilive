/**
 * GraphQL Client for WordPress
 * Simple fetch-based client optimized for Next.js Server Components
 */

/**
 * Execute a GraphQL query
 * @param {string} query - GraphQL query string
 * @param {object} variables - Query variables
 * @param {object} options - Fetch options
 */
export async function fetchGraphQL(query, variables = {}, options = {}) {
  const { cache = "no-store", revalidate, tags } = options;

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  // Handle caching strategy
  if (revalidate !== undefined) {
    fetchOptions.next = { revalidate, tags };
  } else {
    fetchOptions.cache = cache;
  }

  try {
    const endpoint = `${process.env.NEXT_PUBLIC_WP_BASE}/index.php?graphql`;
    const response = await fetch(endpoint, fetchOptions);
    const text = await response.text();

    if (!response.ok) {
      console.error("GraphQL Error Response:", text.substring(0, 200));
      throw new Error(`GraphQL request failed: ${response.status}`);
    }

    // Check if response is HTML (error page)
    if (text.startsWith("<!DOCTYPE") || text.startsWith("<html")) {
      console.error("Received HTML instead of JSON:", text.substring(0, 200));
      throw new Error("Received HTML instead of JSON. Check GraphQL endpoint.");
    }

    const json = JSON.parse(text);

    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error(json.errors[0]?.message || "GraphQL Error");
    }

    return json.data;
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);
    throw error;
  }
}
