import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getData } from "src/utils/getData";
import { Ad } from "src/components/Ad";
import { ArticleCarousel } from "src/components/ArticleCarousel";
import { Product as ProductType } from "src/types/data/product";
import { Article as ArticleType } from "src/types/data/article";

export function Home() {
  const articlesUrl = "/data/articles.json";
  const productsUrl = "/data/products.json";

  const [articleData, setArticleData] = useState<Map<string, ArticleType[]>>();
  const [productData, setProductData] = useState<Map<string, ProductType[]>>();

  const initArticleData = async () => {
    const sortedSections = new Map();
    const dataRetrieved = (await getData(articlesUrl)) as ArticleType[];
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
    setArticleData(sortedSections);
  };

  const initAdData = async () => {
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
    setProductData(sortedSections);
  };

  useEffect(() => {
    initArticleData();
    initAdData();
  }, []);

  if (!articleData || !productData) {
    return null;
  }

  const articlesContent = Array.from(articleData!.entries()).map(
    ([key, articles]) => (
      <ArticleCarousel articles={articles} category={key} key={key} />
    ),
  );

  const advertisementContent = Array.from(productData!.entries())
    .map(([key, productList]) =>
      productList.map((product) => (
        <Ad currentCategory={key} key={product.uuid} product={product} />
      )),
    )
    // remove once we get a better idea of the ad log with Twilio.
    .flat()
    .slice(0, 3);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="section"
        sx={{
          flex: "1 1 auto",
          maxHeight: "calc(100vh - 64px)",
          overflowY: "auto",
        }}
      >
        {articlesContent}
      </Box>
      <Box
        component="section"
        sx={{
          borderLeft: "1px solid lightgrey",
          flex: "0 0 auto",
          position: "sticky",
          top: 0,
          width: 250,
        }}
      >
        {advertisementContent}
      </Box>
    </Box>
  );
}
