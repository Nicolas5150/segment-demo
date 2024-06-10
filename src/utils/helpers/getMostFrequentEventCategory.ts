import { EventDataResponse } from "src/types/data/eventData";
import { getData } from "../getData";

const eventDataUrl = "http://localhost:3001/api/events/newUser/Article Viewed";

export async function getMostFrequentEventCategory() {
  const dataRetrieved = (await getData(eventDataUrl)) as EventDataResponse;
  const categories = new Map<string, number>();
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
