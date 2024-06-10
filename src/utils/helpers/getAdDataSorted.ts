import { Product as ProductType } from "src/types/data/product";
import { getData } from "../getData";

const productsUrl = "/data/products.json";

export async function getAdDataSorted() {
  const sortedSections = new Map();
  const dataRetrieved = (await getData(productsUrl)) as ProductType[];
  dataRetrieved.forEach((article) => {
    article.categories.forEach((category) => {
      const categoryData = sortedSections.get(category);
      if (categoryData !== undefined) {
        sortedSections.set(category, [...categoryData, article]);
      } else {
        sortedSections.set(category, [article]);
      }
    });
  });
  return sortedSections;
}
