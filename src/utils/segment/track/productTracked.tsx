export function productTracked(adtData?: Record<string, unknown>) {
  window.analytics.track("Product Viewed", {
    ...adtData,
  });
}
