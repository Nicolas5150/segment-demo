import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "src/components/Card";
import { Product as ProductType } from "src/types/data/product";
import { adTracked } from "src/utils/segment/track/adTracked";

type AdCardProps = {
  product: ProductType;
  currentCategory: string;
};

/**
 * A card component for displaying advertisements.
 * @param {AdCardProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function AdCard({ product, currentCategory }: AdCardProps): JSX.Element {
  const { title, image, price, uuid } = product;
  return (
    <Card
      cardType={Link}
      currentCategory={currentCategory}
      sx={{
        ml: 2,
        mb: 2,
        p: 2,
        "&:first-of-type": {
          mt: 2,
        },
      }}
      to={`/product/${uuid}`}
      onClickHandler={() =>
        adTracked({ category: currentCategory, title, uuid })
      }
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
    </Card>
  );
}
