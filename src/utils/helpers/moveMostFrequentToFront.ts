/**
 * Moves the entry with the specified key to the front of the map.
 *
 * @param {Map<string, []>} originalMap - The original map.
 * @param {string} targetKey - The key to move to the front.
 * @returns {Map<string, []>} A new map with the entry moved to the front, or the original map if the key is not found.
 */
export function moveMostFrequentKeyToFront(
  originalMap: Map<string, []>,
  targetKey: string,
): Map<string, []> {
  const entries = Array.from(originalMap.entries());

  const [targetEntry, otherEntries] = entries.reduce(
    ([target, others], entry) =>
      entry[0] === targetKey ? [entry, others] : [target, [...others, entry]],
    [null as [string, []] | null, [] as [string, []][]],
  );

  if (!targetEntry) {
    return originalMap;
  }

  return new Map([targetEntry, ...otherEntries]);
}
