import { AdCard } from "src/components/AdCard";
import { Product as ProductType } from "src/types/data/product";

export function renderAdvertisements(
  productData: Map<string, ProductType[]>,
  mostFrequentCategory: string,
) {
  return Array.from(productData!.entries())
    .map(([key, productList]) => ({ key, productList }))
    .sort((a, b) => {
      if (a.key === mostFrequentCategory) {
        return -1;
      }
      if (b.key === mostFrequentCategory) {
        return 1;
      }
      return 0;
    })
    .map(({ key, productList }) =>
      productList.map((product) => (
        <AdCard currentCategory={key} key={product.uuid} product={product} />
      )),
    )
    .flat()
    .slice(0, 3);
}
