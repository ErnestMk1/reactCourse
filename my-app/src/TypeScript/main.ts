export const findOdd = (xs: number[]) => {
  const isOdd = (num: number): boolean => {
    return num % 2 === 1;
  };

  const uniqueItems = Array.from(new Set(xs));
  for (const uniqueItem of uniqueItems) {
    const numberOccurences = xs.filter(item => item === uniqueItem).length;
    if (isOdd(numberOccurences)) return uniqueItem;
  }

  Error('you lied. There are no numbers');
};

console.log(findOdd([1, 2,2,3,3,3,4,3,3,3,2,2,1]));
// sorted one: [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4]
