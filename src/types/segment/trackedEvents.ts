export type TrackedEventNames =
  | "Ad Viewed"
  | "Article Viewed"
  | "Product Viewed";

export type SegmentEvent = {
  event: string;
  properties: Record<string, unknown>;
  timestamp: string;
};

export type SegmentResponse = {
  events: SegmentEvent[];
};
