var funcs = [];

for (var i = 0; i < 2; i++) {
  funcs[i] = function () {
    return i;
  }
}

for (let j = 0; j < 2; j++) {
  console.log(funcs[j]());
}