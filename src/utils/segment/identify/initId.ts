/* eslint-disable no-console */
/**
 * Initializes a user ID in Segment analytics.
 *
 * @param {string} id - The user ID to initialize.
 * @param {Record<string, unknown>} [userData] - Additional user data.
 */
export function initId(id: string, userData?: Record<string, unknown>) {
  if (window.analytics && typeof window.analytics.identify === "function") {
    window.analytics.identify(id, {
      ...userData,
    });
    console.log(`Identified user with id: ${id}`);
  } else {
    console.error("Segment analytics is not properly initialized.");
  }
}
