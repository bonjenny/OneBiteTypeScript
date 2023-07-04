/**
 * 7/4(화)
 * 2-1) 프로토타입과 프로토타입 상속
 * =============================================================
 */



// 예제 1
let animal = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.



// 예제 2
let animal2 = {
  eats: true,
  walk() {
    /* rabbit은 이제 이 메서드를 사용하지 않습니다. */
  }
};

let rabbit2 = {
  __proto__: animal2,
  walk() { }
};

rabbit2.walk = function () {
  console.log("토끼가 깡충깡충 뜁니다.");
};

rabbit2.walk(); // 토끼가 깡충깡충 뜁니다.
animal2.walk();



// for ... in 반복문
let animal3 = {
  eats: true
};

let rabbit3 = {
  jumps: true,
  __proto__: animal3 // __proto__: 모든 객체가 갖고 있음, link 지정 시
};

for (let prop in rabbit3) {
  let isOwn = rabbit3.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`객체 자신의 프로퍼티: ${prop}`); // 객체 자신의 프로퍼티: jumps
  } else {
    console.log(`상속 프로퍼티: ${prop}`); // 상속 프로퍼티: eats
  }
}



// 함수의 prototype 프로퍼티
let animal4 = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal4; // prototype: 생성자 "함수"의 원형 지정 시, class의 extends와 동일

let rabbit4 = new Rabbit("흰 토끼"); //  rabbit.__proto__ == animal
console.log(rabbit4.eats); // true



// constructor
function Rabbit2() { }
// 디폴트 prototype:
// Rabbit2.prototype = { constructor: Rabbit2 }

let rabbit5 = new Rabbit2(); // { constructor: Rabbit2 }를 상속받음
console.log(rabbit5.constructor == Rabbit2); // true ([[Prototype]]을 거쳐 접근함)
// [[Prototype]]: 생성자 "함수"로 생성된 객체의, 생성자 원형에 접근



// 프로토타입 메서드와 __proto__가 없는 객체
let animal6 = {
  eats: true
};


/**
 * Object.create(proto, [descriptors]): [[Prototype]]이 proto를 참조하는 빈 객체 생성
 * Object.getPrototypeOf(obj): obj의 [[Prototype]]을 반환
 * Object.setPrototypeOf(obj, proto): obj의 [[Prototype]]이 proto가 되도록 설정
 */
// 프로토타입이 animal6인 새로운 객체를 생성합니다.
let rabbit6 = Object.create(animal6);
console.log(rabbit6.eats); // true
console.log(Object.getPrototypeOf(rabbit6) === animal6); // true
Object.setPrototypeOf(rabbit6, {}); // rabbit의 프로토타입을 {}으로 바꿉니다.



// 위의 메서드를 사용하여 객체 모든 내용 효과적으로 복사하는 방법
let obj = Object.create(animal6);
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
console.log(obj);
console.log(clone);

// 프로토타입이 존재하지 않는 단순한 객체 생성
let simpleObj = Object.create(null);
console.log(simpleObj); // [Object: null prototype] {}
console.log(simpleObj.toString()); // TypeError: simpleObj.toString is not a function