import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { getData } from "src/utils/getData";
import { AdCard } from "src/components/AdCard";
import { Article as ArticleType } from "src/types/data/article";
import { Product as ProductType } from "src/types/data/product";

export function Article() {
  const { uuid } = useParams();
  const articlesUrl = "/data/articles.json";
  const productsUrl = "/data/products.json";
  const [articleData, setArticleData] = useState<ArticleType>();
  const [productData, setProductData] = useState<Map<string, ProductType[]>>();

  const initArticleData = async () => {
    const dataRetrieved = (await getData(articlesUrl)) as ArticleType[];
    const product = dataRetrieved.find(
      (articleObj) => articleObj.uuid === uuid,
    );
    if (product) {
      setArticleData(product);
    }
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

  const advertisementContent = Array.from(productData!.entries())
    .map(([key, productList]) =>
      productList.map((product) => (
        <AdCard currentCategory={key} key={product.uuid} product={product} />
      )),
    )
    .flat()
    .slice(0, 3);

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
        {advertisementContent}
      </Box>
    </Box>
  );
}
