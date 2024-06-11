import { EventDataResponse } from "src/types/segment/eventData";
import { TraitDataResponse } from "src/types/segment/traitData";
import { getData } from "../getData";

const baseUrl = "http://localhost:3001/api";

// This is the manual way of finding from the last tracked items a frequently visited article category.
// It is prone to more errors and logic as it requires the frontend to parse the object
// and may need to grab more than the last N events to get an accurate reading.

// The only time this seems to be more effective is if you need a more instantaneous result.
// this is because it takes a few minutes to have the Trait in Segment updated while this fetches more up-to-date data.
async function getMostFrequentCategoryByEvent(url: string) {
  const dataRetrieved = (await getData(url)) as EventDataResponse | null;
  const categories = new Map<string, number>();
  if (dataRetrieved == null || dataRetrieved?.data === null) {
    return "";
  }
  dataRetrieved.data.forEach((item) => {
    const { category } = item.properties;
    const catCount = categories.get(category);
    categories.set(category, catCount ? catCount + 1 : 1);
  });
  if (categories.size >= 1) {
    const mostFreqCat: string = [...categories.entries()].reduce(
      (largestKey, [key, value]) => {
        return value > categories.get(largestKey)! ? key : largestKey;
      },
      categories.keys().next().value,
    );
    return mostFreqCat;
  }
  return "";
}

// Same function return as above but done server side by Segment Traits.
async function getMostFrequentCategoryByTrait(url: string) {
  const dataRetrieved = (await getData(url)) as TraitDataResponse | null;
  if (
    dataRetrieved !== null &&
    dataRetrieved?.traits?.trending_article_category
  ) {
    return dataRetrieved.traits.trending_article_category;
  }
  return "";
}

export async function getMostFrequentCategory({
  byTrait,
}: {
  byTrait?: boolean;
} = {}) {
  const segmentUser = "segment-user";
  const user = localStorage.getItem(segmentUser);

  if (user === null) {
    return "";
  }

  if (byTrait) {
    const traitUrl = `${baseUrl}/traits/${user}/trending_article_category`;
    const mostFrequentCategory = await getMostFrequentCategoryByTrait(traitUrl);
    return mostFrequentCategory;
  }

  const eventUrl = `${baseUrl}/events/${user}/Article Viewed`;
  const mostFrequentCategory = await getMostFrequentCategoryByEvent(eventUrl);
  return mostFrequentCategory;
}
