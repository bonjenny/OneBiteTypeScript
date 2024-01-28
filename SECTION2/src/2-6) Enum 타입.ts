/**
 * 1/2(화)
 * * 2-6) Enum 타입
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=155995&tab=curriculum
 * =============================================================
 */

// * <<Enum 타입>>
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// JS가 아닌, TS에서만 제공하는 새로운 타입

// ! Enum은 컴파일 결과 사라지지 않음
// 자바스크립트의 객체로 남아, 우리가 값 접근 시 사용할 수 있음

// * <<숫자형 Enum>>
// 숫자가 할당되는 Enum

// ! 나쁜 코드: 숫자만 보고 기억하기 어려움

const userBad1 = {
  name: "이정환",
  role: 0 // 0 <- 관리자
};

const userBad2 = {
  name: "홍길동",
  role: 1 // 1 <- 일반 유저
};

const userBad3 = {
  name: "아무개",
  role: 2 // 2 <- 게스트
};

// TODO: 나은 코드: 이렇게 바꿔보기

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// 위와 동일
enum Role {
  ADMIN,
  USER,
  GUEST,
}

// enum Role10 {
//   ADMIN = 10,
//   USER = 11,
//   GUEST = 12,
// }

// 위와 동일
enum Role10 {
  ADMIN = 10,
  USER,
  GUEST,
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN // 0 <- 관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER // 1 <- 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST // 2 <- 게스트
};

console.log(user1, user2, user3);

// * <<숫자형 Enum>>
// 숫자가 할당되는 Enum

enum Language {
  korean = "ko",
  english = "en"
}

const userLang1 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean,
}

const userLang2 = {
  name: "홍길동",
  role: Role.ADMIN,
  language: Language.english,
}
