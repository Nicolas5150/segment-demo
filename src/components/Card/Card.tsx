import { Box } from "@mui/material";
import { Link } from "react-router-dom";

type CardProps = {
  cardType?:
    | React.ElementType<unknown, keyof React.JSX.IntrinsicElements>
    | typeof Link;
  currentCategory: string;
  children: React.ReactNode;
  sx?: {};
  to?: string;
};

export function Card({
  cardType = Link,
  children,
  currentCategory,
  sx,
  to,
}: CardProps) {
  return (
    <Box
      component={cardType}
      data-category={currentCategory}
      sx={{
        backfaceVisibility: "hidden",
        borderRadius: 2,
        boxShadow: "2px 7px 10px lightgray",
        color: "black",
        display: "flex",
        textDecoration: "none",
        transform: "perspective(1px) translateZ(0)",
        transition: "scale 200ms ease-in-out",
        "&:hover": {
          cursor: "pointer",
          scale: "1.02",
        },
        ...sx,
      }}
      {...(cardType === Link ? { to } : {})}
    >
      {children}
    </Box>
  );
}
