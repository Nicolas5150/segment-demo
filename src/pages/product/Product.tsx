import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
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

  return <Box>Product</Box>;
}
