import { Article as ArticlePage } from "src/pages/article";
import { Product as ProductPage } from "src/pages/product";

export const otherRoutes = [
  {
    element: <ArticlePage />,
    path: "/article/:uuid",
  },
  {
    element: <ProductPage />,
    path: "/product/:uuid",
  },
];
