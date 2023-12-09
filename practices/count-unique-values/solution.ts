export function solution(sortedArr: number[]) {
  if (sortedArr.length === 0) return 0;
  let i = 0;
  let j = 1;
  let count = 1;
  while (j < sortedArr.length) {
    if (sortedArr[i] !== sortedArr[j]) {
      count++;
      i = j;
      j = i + 1;
    } else {
      j++;
    }
  }
  return count;
}
