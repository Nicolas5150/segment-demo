import { useEffect, useState } from "react";
import { getData } from "src/utils/getData";
import { ArticleCarousel } from "src/components/ArticleCarousel";
import { Article } from "src/types/data/article";

export function Home() {
  const url = "/data/articles.json";
  const [articleData, setArticleData] = useState<Map<string, Article[]>>();

  const initArticleData = async () => {
    const sortedSections = new Map();
    const dataRetrieved = (await getData(url)) as Article[];
    dataRetrieved.forEach((article) => {
      article.categories.forEach((category) => {
        const categoryData = sortedSections.get(category);
        if (categoryData !== undefined) {
          sortedSections.set(category, [...categoryData, article]);
        } else {
          sortedSections.set(category, [article]);
        }
      });
    });
    console.log(sortedSections);
    setArticleData(sortedSections);
  };
  useEffect(() => {
    initArticleData();
  }, []);

  if (!articleData) {
    return null;
  }

  return (
    <div>
      {Array.from(articleData!.entries()).map(([key, articles]) => (
        <ArticleCarousel articles={articles} category={key} key={key} />
      ))}
    </div>
  );
}
