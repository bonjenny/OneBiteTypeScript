function Person(name) {
  console.log("my name is ", name);
  this.name = name;
  this.say = function () {
    console.log("say: ", name);
  };
  return "hihi";
}

console.log(Person("Mark"));
console.log(new Person("Mark"));


