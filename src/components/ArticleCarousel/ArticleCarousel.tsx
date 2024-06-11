import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "src/components/Card";
import { articleTracked } from "src/utils/segment/track/articleTracked";
import { Article } from "src/types/data/article";
import "react-multi-carousel/lib/styles.css";

/**
 * Responsive settings for the carousel.
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

/**
 * Props for the ArticleCarousel component.
 */
type ArticleCarouselProps = {
  articles: Article[];
  category: string;
};

/**
 * A carousel component for displaying articles.
 * @param {ArticleCarouselProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function ArticleCarousel({
  articles,
  category,
}: ArticleCarouselProps): JSX.Element {
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
          pb: 1,
          pt: 2,
        }}
        variant="h4"
      >
        {category}
      </Typography>
      <Carousel
        infinite
        keyBoardControl
        showDots
        ssr
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
        {articles.map(({ title, author, image, body, uuid }) => (
          <Card
            cardType={Link}
            currentCategory={category}
            key={uuid}
            sx={{
              height: "350px",
              m: 2,
              mb: 8,
              p: 2,
              "&:first-of-type": {
                ml: 1,
              },
            }}
            to={`/article/${uuid}`}
            onClickHandler={() => articleTracked({ category, title, uuid })}
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
                <b>Posted by: </b>
                {author}
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
        ))}
      </Carousel>
    </Box>
  );
}
