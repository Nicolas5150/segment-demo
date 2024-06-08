import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product as ProductType } from "src/types/data/product";

type ProductProps = {
  product: ProductType;
  currentCategory: string;
};

export function ProductCard({ product, currentCategory }: ProductProps) {
  const { title, body, image, price, uuid } = product;

  return (
    <Box
      component={Link}
      data-category={currentCategory}
      sx={{
        backfaceVisibility: "hidden",
        boxShadow: "2px 7px 10px lightgray",
        color: "black",
        display: "flex",
        height: "350px",
        m: 2,
        mb: 8,
        maxWidth: "450px",
        p: 2,
        textDecoration: "none",
        transform: "perspective(1px) translateZ(0)",
        transition: "scale 200ms ease-in-out",
        "&:first-of-type": {
          ml: 1,
        },
        "&:hover": {
          cursor: "pointer",
          scale: "1.02",
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
    </Box>
  );
}
