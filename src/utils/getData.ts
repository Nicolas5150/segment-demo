export async function getData(
  url: string,
  options?: unknown,
): Promise<unknown> {
  try {
    const res = await fetch(url, options as RequestInit);
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
