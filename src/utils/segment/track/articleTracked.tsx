/**
 * Tracks an article view event using Segment.io.
 * @param userData Additional data to include in the tracking event.
 */
export function articleTracked(userData?: Record<string, unknown>) {
  window.analytics.track("Article Viewed", {
    ...userData,
  });
}
