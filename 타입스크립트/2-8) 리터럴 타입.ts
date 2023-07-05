/**
 * 7/5(수)
 * 2-8) 리터럴 타입
 * https://cat-antlion-144.notion.site/01c76e1743d547099a4b9a94a35667c9
 * =============================================================
 */

// <<리터럴 타입>>

// const는 값이 절대 변하지 않기 때문에 타입을 문자열 그대로 지정합니다
const helloWorld = "Hello World"; // "Hello World"

// 반면, let은 변경될 수 있으므로 타입을 string 으로 지정합니다
let hiWorld = "Hi World";

// <<union 타입과 함께 쓰는 경우>>

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "center");
