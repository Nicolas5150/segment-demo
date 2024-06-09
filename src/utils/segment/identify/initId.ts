/* eslint-disable no-console */
export function initId(id: string, adtData?: Record<string, unknown>) {
  if (window.analytics && typeof window.analytics.identify === "function") {
    window.analytics.identify(id, {
      ...adtData,
    });
    console.log(`Identified user with id: ${id}`);
  } else {
    console.error("Segment analytics is not properly initialized.");
  }
}
