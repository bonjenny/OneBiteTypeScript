/**
 * 1/2(화)
 * * 2-5) 타입 별칭과 인덱스 시그니처
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=155994&tab=curriculum
 * =============================================================
 */

// * <<타입 별칭>>
// 계속해서 타입을 정의해야 하는 경우 사용
// 같은 스코프에 중복된 타입 별칭 사용 불가 (마치 변수같이 사용) 

// ! 나쁜 코드: 타입 정의만 코드의 절반, 타입 정의가 중복됨

let userBad: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
}

let userBad2: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
}

// TODO: 나은 코드: 이렇게 수정

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
}

// ! 같은 스코프에서는 중복된 타입 별칭 사용 불가
// type User = {};

function func() {
  // 다른 스코프에서는 중복된 타입 별칭 사용 가능
  type User = {};
}

// * <<인덱스 시그니처>>
// 모든 국가들의 코드를 넣어야 한다면?
// 많은 수의 key를 넣어야 하는 경우,
// key와 value의 규칙을 지정하여 타입을 지정하는 것

// ! 나쁜 코드
type CountryCodesBad = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
  // ...
}

// TODO: 더 나은 코드
// key가 전부 string 타입이고,
// value도 전부 string 타입이면?

type CountryCodes = {
  [key: string]: string;
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // Korea라는 key가 꼭 있어야 하는 경우, 이렇게 작성
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStage: 840,
  UnitedKingdom: 826,
}

// Korea: number; 를 추가하면 오류가 발생하게 됨
// let countryNumberCodesWarning: CountryNumberCodes = {};

// ! <<인덱스 시그니처 사용 시 주의점>>
// 빈 객체도 허용함

// ! <<추가적인 프로퍼티를 사용할 경우>>
// 인덱스 시그니처의 value와 일치하거나 호환되어야 함

// ? 아래는 오류 발생
// type CountryNumberCodes = {
//   [key: string]: number;
//   Korea: string; // Korea라는 key가 꼭 있어야 하는 경우, 이렇게 작성
// }