function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
console.log(getFirstElement<number>([1, 2, 3]));

getFirstElement<string>(["a", "b", "c"]); // "a"
console.log(getFirstElement<string>(["a", "b", "c"]));
getFirstElement<boolean>([true, false, true]); // true
console.log(getFirstElement<boolean>([true, false, true]));
getFirstElement<number | string | boolean>([1, "hello", true]); // 1
console.log(getFirstElement([1, "hello", true]));
