export function twoOldestAges(ages: number[]): number[] {
  return ages.sort((a: number, b: number) => a - b).slice(ages.length - 2);
};

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
