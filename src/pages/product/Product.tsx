import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { getData } from "src/utils/getData";
import { Product as ProductType } from "src/types/data/product";

export function Product() {
  const { uuid } = useParams();
  const productsUrl = "/data/products.json";
  const [productData, setProductData] = useState<ProductType>();

  const initProductData = async () => {
    const dataRetrieved = (await getData(productsUrl)) as ProductType[];
    const product = dataRetrieved.find(
      (productObj) => productObj.uuid === uuid,
    );
    if (product) {
      setProductData(product);
    }
  };

  useEffect(() => {
    initProductData();
  }, []);

  if (!productData) {
    return null;
  }

  const { title, image, price, categories, body } = productData;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: "auto",
        mt: 6,
        flexDirection: "column",
        gap: 6,
        maxWidth: "1080px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 12 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography component="h3" variant="h3">
            {title}
          </Typography>
          <Typography component="div">
            <b>Price: </b>
            {`$${price}`}
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
          <Button variant="contained">Purchase</Button>
        </Box>
        <Box
          alt={title}
          component="img"
          src={image}
          sx={{
            objectFit: "cover",
            maxWidth: "500px",
            width: "100%",
            height: "475px",
            display: "block",
            border: "solid 1px lightgrey",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
          gap: 6,
          maxWidth: "1080px",
        }}
      >
        <Typography component="div">{body}</Typography>
      </Box>
    </Box>
  );
}
