import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product as ProductType } from "src/types/data/product";

type ProductProps = {
  product: ProductType;
  currentCategory: string;
};

export function ProductCard({ product, currentCategory }: ProductProps) {
  const { title, body, image, price, uuid } = product;
  console.log(currentCategory);
  return (
    <Box
      component={Link}
      sx={{
        color: "black",
        textDecoration: "none",
        display: "flex",
        boxShadow: "2px 7px 10px lightgray",
        m: 2,
        mb: 8,
        height: "350px",
        maxWidth: "450px",
        p: 2,
        transition: "scale 200ms ease-in-out",
        backfaceVisibility: "hidden",
        transform: "perspective(1px) translateZ(0)",
        "&:hover": {
          scale: "1.02",
          cursor: "pointer",
        },
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
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            height: "70px",
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
            objectFit: "cover",
            width: "100%",
            height: "175px",
            py: 2,
            display: "block",
            margin: "auto",
          }}
        />
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
}
