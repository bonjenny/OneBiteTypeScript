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

type MyName = string;
const capName: MyName = "capt";

type Developer = {
  name: string;
  skill: string;
};

type Direction = "Up" | "Down" | "Left" | "Right";
