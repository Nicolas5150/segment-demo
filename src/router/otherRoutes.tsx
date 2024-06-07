import { Article as ArticlePage } from "src/pages/article";
import { Product as ProductPage } from "src/pages/product";

export const otherRoutes = [
  {
    path: "/article",
    element: <ArticlePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
];
