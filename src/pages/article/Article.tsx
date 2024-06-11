import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { getData } from "src/utils/getData";
import { getAdDataSorted } from "src/utils/helpers/getAdDataSorted";
import { getMostFrequentCategory } from "src/utils/helpers/getMostFrequentCategory";
import { renderAdvertisements } from "src/utils/genericRender/renderAdvertisements";
import { Article as ArticleType } from "src/types/data/article";
import { Product as ProductType } from "src/types/data/product";

export function Article() {
  const { uuid } = useParams();
  const articlesUrl = "/data/articles.json";
  const [articleData, setArticleData] = useState<ArticleType>();
  const [productData, setProductData] = useState<Map<string, ProductType[]>>();
  const [mostFrequentCategory, setMostFrequentCategory] = useState<string>("");

  // Get the most frequent category type - ex: "Apple", "Android", "ETC"
  const getEventData = async () => {
    setMostFrequentCategory(await getMostFrequentCategory({ byTrait: true }));
  };

  // Set the right rail ads.
  const initAdData = async () => {
    setProductData(await getAdDataSorted());
  };

  // Set the main section article
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
    const fetAllData = async () => {
      await getEventData();
      initArticleData();
      initAdData();
    };

    fetAllData();
  }, []);

  if (!articleData || !productData) {
    return null;
  }

  const { title, image, categories, body } = articleData;
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            justifyContent: "center",
            m: "auto",
            maxWidth: "1080px",
            mt: 6,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography component="h3" variant="h3">
              {title}
            </Typography>
            <Box>
              <Typography component="div">
                <b>Categories: </b>
              </Typography>
              {categories.map((category) => (
                <Typography component="div" key={category}>
                  {category}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              maxWidth: "1080px",
            }}
          >
            <Box
              alt={title}
              component="img"
              src={image}
              sx={{
                border: "solid 1px lightgrey",
                display: "block",
                maxHeight: "475px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <Typography component="div">{body}</Typography>
          </Box>
        </Box>
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
