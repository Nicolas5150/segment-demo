import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ProductCard } from "src/components/ProductCard";
import { getData } from "src/utils/getData";
import { Product as ProductType } from "src/types/data/product";

/**
 * Component for rendering the Shopping page.
 * @returns {JSX.Element | null} - The rendered component.
 */
export function Shop(): JSX.Element | null {
  const [productData, setProductData] = useState<Map<string, ProductType[]>>();

  // Set the main section product cards
  const initProductData = async () => {
    const productsUrl = "/data/products.json";
    const sortedSections = new Map();
    const dataRetrieved = (await getData(productsUrl)) as ProductType[];
    dataRetrieved.forEach((product) => {
      product.categories.forEach((category) => {
        const categoryData = sortedSections.get(category);
        if (categoryData !== undefined) {
          sortedSections.set(category, [...categoryData, product]);
        } else {
          sortedSections.set(category, [product]);
        }
      });
    });
    setProductData(sortedSections);
  };

  useEffect(() => {
    initProductData();
  }, []);

  if (!productData) {
    return null;
  }

  return (
    <Box>
      <Typography component="h4" sx={{ pb: 1, pt: 2 }} variant="h4">
        All Products
      </Typography>
      <Box
        component="section"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Array.from(productData.entries()).map(([key, productList]) =>
          productList.map((product) => (
            <ProductCard
              currentCategory={key}
              key={key + product.title}
              product={product}
            />
          )),
        )}
      </Box>
    </Box>
  );
}
