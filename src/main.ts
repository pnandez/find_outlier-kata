export function findOutlier(integers: number[]): number {
  const isPartyEven = integers.filter(x => x % 2 === 0).length > 1;
  if (isPartyEven) {
    return integers.find((x) => x % 2 !== 0)!;
  }
  return integers.find((x) => x % 2 === 0)!;
}
