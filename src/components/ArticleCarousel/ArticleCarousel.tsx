import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Article } from "src/types/data/article";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

type ArticleCarouselProps = {
  articles: Article[];
  category: string;
};

export function ArticleCarousel({ articles, category }: ArticleCarouselProps) {
  return (
    <Box
      sx={{
        borderTop: "solid 1px lightgray",
        "&:first-of-type": {
          borderTop: "none",
        },
        "& .carousel-container": {
          mb: 4,
          pb: 2,
        },
        "& .react-multiple-carousel__arrow": {
          bottom: 0,
        },
      }}
    >
      <Typography
        component="h4"
        sx={{
          pt: 2,
          pb: 1,
        }}
        variant="h4"
      >
        {category}
      </Typography>
      <Carousel
        infinite
        keyBoardControl
        showDots
        ssr // means to render carousel on server-side.
        autoPlaySpeed={1000}
        containerClass="carousel-container"
        customTransition="all .5"
        dotListClass="custom-dot-list-style"
        draggable={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        swipeable={false}
        transitionDuration={500}
      >
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {articles.map(({ title, author, image, body, uuid }) => (
          <Box
            component={Link}
            key={uuid}
            sx={{
              color: "black",
              textDecoration: "none",
              display: "flex",
              boxShadow: "2px 7px 10px lightgray",
              m: 2,
              mb: 8,
              height: "350px",
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
            to={`/article/${uuid}`}
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
                <b>Posted by: </b>
                {author}
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
        ))}
      </Carousel>
    </Box>
  );
}
