import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "src/components/Card";
import { Product as ProductType } from "src/types/data/product";

type ProductProps = {
  product: ProductType;
  currentCategory: string;
};

export function ProductCard({ product, currentCategory }: ProductProps) {
  const { title, body, image, price, uuid } = product;

  return (
    <Card
      cardType={Link}
      currentCategory={currentCategory}
      sx={{
        height: "350px",
        m: 2,
        mb: 8,
        maxWidth: "450px",
        p: 2,
        "&:first-of-type": {
          ml: 1,
        },
      }}
      to={`/product/${uuid}`}
    >
      <Box>
        <Typography
          component="h5"
          sx={{
            display: "-webkit-box",
            height: "70px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography component="div">
          <b>Price: </b>
          {`$${price}`}
        </Typography>
        <Box
          alt={title}
          component="img"
          src={image}
          sx={{
            display: "block",
            height: "175px",
            margin: "auto",
            objectFit: "cover",
            py: 2,
            width: "100%",
          }}
        />
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
          }}
        >
          {body}
        </Typography>
      </Box>
    </Card>
  );
}
