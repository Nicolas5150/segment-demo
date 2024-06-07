import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ProductCard } from "src/components/productCard";
import { getData } from "src/utils/getData";
import { Product as ProductType } from "src/types/data/product";

export function Shop() {
  const productsUrl = "/data/products.json";

  const [productData, setProductData] = useState<Map<string, ProductType[]>>();

  const initArticleData = async () => {
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
    console.log(sortedSections);
    setProductData(sortedSections);
  };

  useEffect(() => {
    initArticleData();
  }, []);

  if (!productData) {
    return null;
  }

  return (
    <Box>
      <Typography
        component="h4"
        sx={{
          pt: 2,
          pb: 1,
        }}
        variant="h4"
      >
        All Products
      </Typography>
      <Box
        component="section"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Array.from(productData!.entries()).map(([key, productList]) =>
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
