/* eslint-disable no-console */
/**
 * Fetches data from the specified URL.
 * @param url The URL to fetch the data from.
 * @param options Additional options for the fetch request.
 * @returns A Promise that resolves to the fetched data, or null if an error occurs.
 */
export async function getData(
  url: string,
  options?: RequestInit,
): Promise<unknown> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status} - ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
