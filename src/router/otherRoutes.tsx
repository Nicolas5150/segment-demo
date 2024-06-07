import { Article as ArticlePage } from "src/pages/article";
import { Product as ProductPage } from "src/pages/product";

export const otherRoutes = [
  {
    path: "/article/:uuid",
    element: <ArticlePage />,
  },
  {
    path: "/product/:uuid",
    element: <ProductPage />,
  },
];
