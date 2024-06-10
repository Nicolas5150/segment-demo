import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getData } from "src/utils/getData";
import { getMostFrequentEventCategory } from "src/utils/helpers/getMostFrequentEventCategory";
import { getAdDataSorted } from "src/utils/helpers/getAdDataSorted";
import { renderAdvertisements } from "src/utils/genericRender/renderAdvertisements";
import { renderArticles } from "src/utils/genericRender/renderArticles";
import { Product as ProductType } from "src/types/data/product";
import { Article as ArticleType } from "src/types/data/article";

export function Home() {
  const [articleData, setArticleData] = useState<Map<string, ArticleType[]>>();
  const [productData, setProductData] = useState<Map<string, ProductType[]>>();
  const [mostFrequentCategory, setMostFrequentCategory] = useState<string>("");

  // Get the most frequent category type - ex: "Apple", "Android", "ETC"
  const getEventData = async () => {
    setMostFrequentCategory(await getMostFrequentEventCategory());
  };

  // Set the right rail ads.
  const initAdData = async () => {
    setProductData(await getAdDataSorted());
  };

  // Set the main section articles
  const initArticleData = async () => {
    const articlesUrl = "/data/articles.json";
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

  useEffect(() => {
    initArticleData();
    initAdData();
    getEventData();
  }, []);

  if (!articleData || !productData) {
    return null;
  }

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
        {renderArticles(articleData, mostFrequentCategory)}
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
        {renderAdvertisements(productData, mostFrequentCategory)}
      </Box>
    </Box>
  );
}
