import { Box } from "@mui/material";
import { Ad as AdType } from "src/types/data/ad";

type AdProps = {
  ad: AdType;
  currentCategory: string;
};

export function Ad({ ad, currentCategory }: AdProps) {
  return (
    <Box
      sx={{
        boxShadow: "2px 7px 10px lightgray",
        m: 2,
        height: "125px",
        p: 2,
        transition: "scale 200ms ease-in-out",
        backfaceVisibility: "hidden",
        transform: "perspective(1px) translateZ(0)",
        "&:hover": {
          scale: "1.02",
          cursor: "pointer",
        },
        "&:first-of-type": {
          pt: 0,
          mt: 0,
        },
      }}
    >
      {ad.url}
      {currentCategory}
    </Box>
  );
}
