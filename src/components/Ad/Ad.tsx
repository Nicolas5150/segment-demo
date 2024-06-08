import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product as ProductType } from "src/types/data/product";

type AdProps = {
  product: ProductType;
  currentCategory: string;
};

export function Ad({ product, currentCategory }: AdProps) {
  const { title, image, price, uuid } = product;
  return (
    <Box
      component={Link}
      sx={{
        color: "black",
        textDecoration: "none",
      }}
      to={`/product/${uuid}`}
    >
      <Box
        sx={{
          backfaceVisibility: "hidden",
          boxShadow: "2px 7px 10px lightgray",
          ml: 2,
          p: 2,
          transform: "perspective(1px) translateZ(0)",
          transition: "scale 200ms ease-in-out",
          "&:first-of-type": {
            mt: 2,
          },
          "&:hover": {
            cursor: "pointer",
            scale: "1.02",
          },
        }}
      >
        <Typography
          component="h6"
          sx={{
            display: "-webkit-box",
            fontSize: ".95rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
          }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography component="div" sx={{ fontSize: ".95rem" }}>
          <b>Price: </b>
          {`$${price}`}
        </Typography>
        <Box
          alt={title}
          component="img"
          data-category={currentCategory}
          src={image}
          sx={{
            display: "block",
            height: "75px",
            margin: "auto",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
