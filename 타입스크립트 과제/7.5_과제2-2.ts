interface Animal {
  name: string;
  speed: number;
  walk(): void;
}

interface Tuttle extends Animal {
  shellThickness: number;
}

interface Rabbit extends Animal {
  earLength: number;
}

const tuttle: Tuttle = {
  name: "거북이",
  speed: 1,
  walk(): void {
    console.log("엉금엉금");
  },
  shellThickness: 10,
};

const rabbit: Rabbit = {
  name: "토끼",
  speed: 10,
  walk(): void {
    console.log("깡총깡총");
  },
  earLength: 20,
};

function isTuttle(arg: any): arg is Tuttle {
  return arg.shellThickness !== undefined;
}
function isRabbit(arg: any): arg is Rabbit {
  return arg.earLength !== undefined;
}

function getProperty(animal: Animal) {
  if (isTuttle(animal)) {
    return animal.shellThickness;
  }
  if (isRabbit(animal)) {
    return animal.earLength;
  }
  return animal.name;
}

console.log(getProperty(tuttle));
console.log(getProperty(rabbit));
