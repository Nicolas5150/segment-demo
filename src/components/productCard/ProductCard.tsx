import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "src/components/Card";
import { productTracked } from "src/utils/segment/track/productTracked";
import { Product as ProductType } from "src/types/data/product";

/**
 * Props for the ProductCard component.
 */
type ProductProps = {
  product: ProductType;
  currentCategory: string;
};

/**
 * A card component for displaying a product.
 * @param {ProductProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function ProductCard({
  product,
  currentCategory,
}: ProductProps): JSX.Element {
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
      onClickHandler={() =>
        productTracked({ category: currentCategory, title, uuid })
      }
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
