/**
 * Tracks a product view event using Segment.io.
 * @param userData Additional data to include in the tracking event.
 */
export function productTracked(userData?: Record<string, unknown>) {
  window.analytics.track("Product Viewed", {
    ...userData,
  });
}
