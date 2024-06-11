export type TraitDataResponse = {
  cursor: {
    url: string;
    has_more: false;
    limit: number;
  };
  traits: {
    trending_article_category: string;
  };
};
