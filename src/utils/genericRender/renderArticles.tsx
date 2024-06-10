import { ArticleCarousel } from "src/components/ArticleCarousel";
import { Article as ArticleType } from "src/types/data/article";

export function renderArticles(
  articleData: Map<string, ArticleType[]>,
  mostFrequentCategory: string,
) {
  return Array.from(articleData!.entries())
    .map(([key, articles]) => ({ key, articles }))
    .sort((a, b) => {
      if (a.key === mostFrequentCategory) {
        return -1;
      }
      if (b.key === mostFrequentCategory) {
        return 1;
      }
      return 0;
    })
    .map(({ key, articles }) => (
      <ArticleCarousel articles={articles} category={key} key={key} />
    ));
}
