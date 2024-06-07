import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { getData } from "src/utils/getData";
import { Article as ArticleType } from "src/types/data/article";

export function Article() {
  const { uuid } = useParams();
  const articlesUrl = "/data/products.json";
  const [articleData, setArticleData] = useState<ArticleType>();

  const initArticleData = async () => {
    const dataRetrieved = (await getData(articlesUrl)) as ArticleType[];
    const product = dataRetrieved.find(
      (articleObj) => articleObj.uuid === uuid,
    );
    if (product) {
      setArticleData(product);
    }
  };

  useEffect(() => {
    initArticleData();
  }, []);

  if (!articleData) {
    return null;
  }

  return <Box>Product</Box>;
}
