const personKim = {
  myName: "김",
  getMyName() {
    return this.myName;
  },
}

console.log(personKim.getMyName());

const personLee = {
  myName: "이",
}

personLee.getMyName = personKim.getMyName;
console.log(personLee.getMyName());