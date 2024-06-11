import { AdCard } from "src/components/AdCard";
import { Product as ProductType } from "src/types/data/product";

/**
 * Renders advertisements by creating AdCard components for products,
 * prioritizing the most frequent category and limiting the total to 3 ads.
 *
 * @param {Map<string, ProductType[]>} productData - A map where the keys are category names and the values are arrays of products in those categories.
 * @param {string} mostFrequentCategory - The category that should be prioritized in the advertisements.
 * @returns {JSX.Element[]} An array of AdCard components limited to 3, with the most frequent category prioritized.
 */
export function renderAdvertisements(
  productData: Map<string, ProductType[]>,
  mostFrequentCategory: string,
): JSX.Element[] {
  // Convert Map entries to an array and flatten the product lists into a single array of products with their categories
  const productsWithCategory = Array.from(productData.entries()).flatMap(
    ([category, products]) =>
      products.map((product) => ({ category, product })),
  );

  // Sort the products to prioritize the most frequent category
  const sortedProducts = productsWithCategory.sort((a, b) => {
    if (a.category === mostFrequentCategory) {
      return -1;
    }
    if (b.category === mostFrequentCategory) {
      return 1;
    }
    return 0;
  });

  // Map the sorted products to AdCard components and slice the first 3 items
  return sortedProducts
    .slice(0, 3)
    .map(({ category, product }) => (
      <AdCard currentCategory={category} key={product.uuid} product={product} />
    ));
}
