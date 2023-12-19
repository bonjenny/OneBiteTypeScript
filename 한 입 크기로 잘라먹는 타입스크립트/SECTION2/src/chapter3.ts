/**
 * 12/19(화)
 * * 2-4) 객체
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=155993&tab=curriculum
 * =============================================================
 */

// * <<object>> - 객체를 의미하는 타입
let user: object = { // 객체의 타입을 object로만 지정하면 객체타입이라는 것만 알 수 있음
  id: 1,
  name: "엄지희"
};
// user.id; // ! object 형식에 id 속성이 없다는 오류 발생

// ? 그럼 어떻게 지정하냐? -> 객체 리터럴 타입 사용
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "엄지희"
}
user2.id; // user2 객체의 id 속성이 number인 것까지 추론 가능

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
}

// TODO: <<구조적 타입 시스템>> (Property Based Type System)
// TODO: 타입스크립트에서는 단순히 Object로 명명하는게 아니라,
// TODO: 해당 타입의 "구조(이 객체를 이루는 프로퍼티와 메서드가 어떻게 생겼냐)"로 해당 객체의 타입을 결정

// <<명목적 타입 시스템>>
// C언어나 자바에서는 "이름"을 기준으로 한 타입 시스템을 사용 (구조적 타입 시스템과 반대)

let user3: {
  id?: number; // <<선택적 프로퍼티(Optional Property)>> - 이 프로퍼티가 있어도 되고 없어도 됨!
  name: string;
} = {
  name: "홍길동",
}

// user3 = {
//   id: "1", // ! string 형식은 number 형식에 할당할 수 없다는 오류 발생
//   name: "엄지희",
// }

let config: {
  readonly apiKey: string; // <<읽기전용 프로퍼티>> - 값이 바뀌어서는 안되는 프로퍼티에 readonly 키워드 붙임
} = {
  apiKey: "MY API KEY",
}
// config.apiKey = "수정됨"; // ! 읽기 전용 속성이므로 'apiKey'에 할당할 수 없다는 오류 발생