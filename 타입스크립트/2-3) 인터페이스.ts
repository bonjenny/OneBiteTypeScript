/**
 * 7/4(화)
 * 2-3) 인터페이스
 * https://cat-antlion-144.notion.site/492287f07834440f93aa7e24d3f46eed?pvs=25
 * =============================================================
 */

// <<인터페이스 선언>>
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// Todo 인터페이스를 준수해야 합니다
const todo: Todo = {
  id: 1,
  content: "typescript",
  completed: false,
};

// 인터페이스에 정의되어 있지 않은 프로퍼티는 사용할 수 없습니다
// console.log(todo.name);
console.log(todo.id);

// <<옵셔널 프로퍼티>>
interface CraftBeer {
  name: string;
  hop?: number;
}
let myBeer = {
  name: "Saporo",
};
let myBeer2 = {
  name: "Heineken",
  hop: 2,
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.name, beer.hop || ""); // Saporo
}
brewBeer(myBeer);

function brewBeer2(beer: CraftBeer) {
  console.log(beer.name, beer.hop || ""); // Heineken 2
}
brewBeer2(myBeer2);

// <<읽기 전용 속성>>: readonly 키워드
interface CraftBeer3 {
  readonly brand: string;
}

const myBeer3: CraftBeer3 = {
  brand: "Belgian Monk",
};
// myBeer3.brand = "Korean Carpenter"; // 읽기 전용 속성이므로 'brand'에 할당할 수 없습니다.

// <<읽기 전용 배열>>: ReadonlyArray<T>
let arr: ReadonlyArray<number> = [1, 2, 3];
// arr.splice(0, 1); // error
// arr.push(4); // error
// arr[0] = 100; // error

// <<함수 타입>>
interface login {
  (username: string, password: string): boolean;
}

let loginUser: login = function (id: string, pw: string) {
  console.log("로그인 했습니다");
  // return 1; // number 형식은 boolean 형식에 할당할 수 없습니다.
  return true;
};

// <<클래스 타입>>
interface CraftBeer4 {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer4 implements CraftBeer4 {
  beerName: string = "Baby Guinness";
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}

// <<인터페이스 상속>>
interface Person {
  name: string;
}
interface Drinker {
  drink: string;
}
interface Developer extends Person, Drinker {
  skill: string;
}
const fe: Developer = {
  name: "josh",
  skill: "TypeScript",
  drink: "Beer",
};
console.log(fe);

// <<하이브리드 타입>>
interface CraftBeer5 {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer5(): CraftBeer5 {
  const hybrid = (beer: string) => beer;
  hybrid.brand = "Beer Kitchen";
  hybrid.brew = () => {
    console.log(`BRAND: ${hybrid.brand}`);
  };
  return hybrid;
}

const brewedBeer = myBeer5();
brewedBeer("My First Beer");
brewedBeer.brand = "Pangyo Craft";
brewedBeer.brew();

// <<인덱스 시그니쳐>>: 타입의 프로퍼티명을 미리 알지 못하지만, 프로퍼티와 값의 타입은 아는 경우
interface FruitDictionary {
  [key: string]: number;
}
const dic: FruitDictionary = {};
dic.apple = 100;
// dic.orange = "good"; // Error

interface NumberDictionary2 {
  [key: string]: number;
  length: number; // ok
  // name: string; // Error
}
