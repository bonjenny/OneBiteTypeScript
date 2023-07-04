/**
 * 7/4(화)
 * 2-4) 이넘(enum)
 * https://cat-antlion-144.notion.site/enum-9d583ca491854d2da0e44501f11c8ce0?pvs=25
 * =============================================================
 */

// <<숫자형 이넘>>
enum Direction {
  Up, // 0
  Down, // 1
}

function go(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("go up");
      break;
    case Direction.Down:
      console.log("go down");
      break;
  }
}
go(Direction.Down);

// <<문자형 이넘>>
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// <<런타임 시점에서의 이넘 특징>>
enum E {
  X,
  Y,
  Z,
}

function getX(obj: { X: number }) {
  return obj.X;
}
console.log(getX(E)); // 이넘 E의 X는 숫자이기 때문에 정상 동작

// // 내부에서는...
// var E;
// (function (E) {
//   E[(E["X"] = 0)] = "X";
//   E[(E["Y"] = 1)] = "Y";
//   E[(E["Z"] = 2)] = "Z";
// })(E || (E = {}));
// function getX(obj) {
//   return obj.X;
// }
// console.log(getX(E)); // 이넘 E의 X는 숫자이기 때문에 정상 동작

// 리버스 매핑
enum Enum {
  A,
}
let a = Enum.A; // 키로 값을 획득 하기
let keyName = Enum[a]; // 값으로 키를 획득 하기
console.log(keyName);

// const enum
const enum Direction3 {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Direction3.Up,
  Direction3.Down,
  Direction3.Left,
  Direction3.Right,
];
console.log(directions);

// 내부에서는...
// let directions = [
//   0 /* Direction.Up */,
//   1 /* Direction.Down */,
//   2 /* Direction.Left */,
//   3 /* Direction.Right */,
// ];
