import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getData } from "src/utils/getData";
import { Ad } from "src/components/Ad";
import { ArticleCarousel } from "src/components/ArticleCarousel";
import { Ad as AdType } from "src/types/data/ad";
import { Article as ArticleType } from "src/types/data/article";

export function Home() {
  const articlesUrl = "/data/articles.json";
  const adsUrl = "/data/ads.json";

  const [articleData, setArticleData] = useState<Map<string, ArticleType[]>>();
  const [adData, setAdData] = useState<Map<string, AdType[]>>();

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
    console.log(sortedSections);
    setArticleData(sortedSections);
  };

  const initAdData = async () => {
    const sortedSections = new Map();
    const dataRetrieved = (await getData(adsUrl)) as AdType[];

    dataRetrieved.forEach((ad) => {
      ad.categories.forEach((category) => {
        const categoryData = sortedSections.get(category);
        if (categoryData !== undefined) {
          sortedSections.set(category, [...categoryData, category]);
        } else {
          sortedSections.set(category, [category]);
        }
      });
    });
    console.log(sortedSections);
    setAdData(sortedSections);
  };

  useEffect(() => {
    initArticleData();
    initAdData();
  }, []);

  if (!articleData || !adData) {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="section"
        sx={{
          flex: "1 1 auto",
          overflowY: "auto",
          maxHeight: "calc(100vh - 64px)",
        }}
      >
        {Array.from(articleData!.entries()).map(([key, articles]) => (
          <ArticleCarousel articles={articles} category={key} key={key} />
        ))}
      </Box>
      <Box
        component="section"
        sx={{
          flex: "0 0 auto",
          width: 250,
          position: "sticky",
          top: 0,
          borderLeft: "1px solid lightgrey",
        }}
      >
        {Array.from(adData!.entries()).map(([key, adList]) =>
          adList.map((ad) => (
            <Ad ad={ad} currentCategory={key} key={key + ad.uuid} />
          )),
        )}
      </Box>
    </Box>
  );
}
