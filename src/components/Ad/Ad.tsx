import { Box, Typography } from "@mui/material";
import { Product as ProductType } from "src/types/data/product";

type AdProps = {
  product: ProductType;
  currentCategory: string;
};

export function Ad({ product, currentCategory }: AdProps) {
  const { title, image, price } = product;
  return (
    <Box
      sx={{
        boxShadow: "2px 7px 10px lightgray",
        ml: 2,

        p: 2,
        transition: "scale 200ms ease-in-out",
        backfaceVisibility: "hidden",
        transform: "perspective(1px) translateZ(0)",
        "&:hover": {
          scale: "1.02",
          cursor: "pointer",
        },
      }}
    >
      <Typography
        component="h6"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          fontSize: ".95rem",
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
        data-cateory={currentCategory}
        src={image}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "75px",
          display: "block",
          margin: "auto",
        }}
      />
    </Box>
  );
}
