import { ArticleCarousel } from "src/components/ArticleCarousel";
import { Article as ArticleType } from "src/types/data/article";

/**
 * Render articles based on the provided article data and the most frequent category.
 * @param {Map<string, ArticleType[]>} articleData - The map of article data, where each key is a category and the value is an array of articles.
 * @param {string} mostFrequentCategory - The most frequent category.
 * @returns {JSX.Element[]} - An array of JSX elements representing the rendered articles.
 */
export function renderArticles(
  articleData: Map<string, ArticleType[]>,
  mostFrequentCategory: string,
): JSX.Element[] {
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
