export function articleTracked(adtData?: Record<string, unknown>) {
  window.analytics.track("Article Viewed", {
    ...adtData,
  });
}
