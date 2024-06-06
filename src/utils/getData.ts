/**
 * Asynchronously fetch data from the specified URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<*>} A Promise that resolves to the parsed JSON response if the request is successful.
 *                      If the request fails or there's an error, it returns null.
 * @throws {Error} If the request to the specified URL fails (e.g., non-2xx HTTP status code).
 */
export async function getData(url: string): Promise<unknown> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status} - ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
}
