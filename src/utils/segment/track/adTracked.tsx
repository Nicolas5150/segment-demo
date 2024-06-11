/**
 * Tracks an ad view event using Segment.io.
 * @param userData Additional data to include in the tracking event.
 */
export function adTracked(userData?: Record<string, unknown>) {
  window.analytics.track("Ad Viewed", {
    ...userData,
  });
}
