/**
 * 7/5(수)
 * 2-6) 타입 별칭
 * https://cat-antlion-144.notion.site/6ea75305e2454e9db9ffcfcbfb714df6
 * =============================================================
 */

// <<타입 별칭>>
// 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수
// 새로운 타입 값을 하나 생성하는 것이 아니라
// 정의한 타입에 대해 후에 쉽게 참고하도록 이름을 부여하는 것

type Direction = "Up" | "Down" | "Left" | "Right";
type MyName = string;
const capName: MyName = "capt";

type Developer = {
  name: MyName; // string
  skill: string; // string
  direction: Direction;
};

var person: Developer = {
  name: "josh",
  skill: "Developing",
  direction: "Down",
};

// <<type vs interface>>
// 1. 인터페이스는 상속할 수 있지만, 타입 별칭은 상속할 수 없습니다.
// 2. 인터페이스는 확장이 가능하지만 타입 별칭은 확장이 불가합니다.

// 따라서 "완전히 새로운 타입을 선언할 때": interface로 선언,
// "이미 존재하는 타입을 참조하여 타입을 선언할 때"에만: type을 사용
interface Window {
  title: string;
}

// 기존 인터페이스에 새 필드를 추가. 타입 별칭은 이러한 확장이 불가하다
interface Window {
  ts: "TypeScriptAPI";
}
