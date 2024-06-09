export function adTracked(adtData?: Record<string, unknown>) {
  window.analytics.track("Ad Viewed", {
    ...adtData,
  });
}
