type uniqInputArrType = number | string | Object;

function uniq<T extends uniqInputArrType>
  (arr: Array<T>, compare: (value1: T, value2: T) => boolean = (a, b) => a === b): Array<T> {
  return arr.filter((item, idx) => arr.findIndex((findItem) => compare(item, findItem)) === idx);
}

console.log(uniq([2, 1, 2])); // [ 2, 1 ]
console.log(uniq(["사과", "귤", "사과"])); // [ '사과', '귤' ]

const objArr = [
  { key: 1, name: "길동" },
  { key: 2, name: "민수" },
  { key: 1, name: "민지" },
  { key: 1, name: "민지" },
];
console.log(uniq(objArr, (a, b) => a.key === b.key)); // [ { key: 1, name: '길동' }, { key: 2, name: '민수' } ]
console.log(uniq(objArr, (a, b) => a.key === b.key && a.name === b.name)); // [ { key: 1, name: '길동' }, { key: 2, name: '민수' }, { key: 1, name: '민지' } ]
