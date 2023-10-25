function addFactory(N) {
  const number = N;

  return function add(n) {
    return N += n;
  }
}

const addOne = addFactory(1);
const addTwo = addFactory(2);

console.log(addOne(4)); // 5
console.log(addTwo(6)); // 8