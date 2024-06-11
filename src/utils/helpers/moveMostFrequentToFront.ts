export function moveMostFrequentKeyToFront(
  originalMap: Map<string, []>,
  targetKey: string,
): Map<string, []> {
  const entries = Array.from(originalMap.entries());

  const [targetEntry, otherEntries] = entries.reduce(
    ([target, others], entry) =>
      entry[0] === targetKey ? [entry, others] : [target, [...others, entry]],
    [null, []] as [[string, []] | null, [string, []][]],
  );

  return new Map(targetEntry ? [targetEntry, ...otherEntries] : otherEntries);
}
