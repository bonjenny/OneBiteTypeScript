/**
 * 7/5(수)
 * 4-3) 유틸리티 타입
 * https://cat-antlion-144.notion.site/45dff6ab8c71469a94c60b38d5bb05af
 * =============================================================
 */

// <<Partial>>
// 특정 타입의 모든 부분 집합을 만족하는 타입을 정의
// 모든 프로퍼티가 옵셔널로 변경되는 것과 같음

interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "test@abc.com" }; // 가능
const all: MayHaveEmail = { email: "capt@hero.com", address: "Pangyo" }; // 가능

// <<Pick>>
// 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의

interface Hero {
  name: string;
  skill: string;
}
const human: Pick<Hero, "name"> = {
  name: "스킬이 없는 사람",
};

// <<Omit>>
// 특정 타입에서 지정된 속성만 제거한 타입을 정의

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}
const phoneBook: Omit<AddressBook, "address"> = {
  name: "재택근무",
  phone: 12342223333,
  company: "내 방",
};
const chingtao: Omit<AddressBook, "address" | "company"> = {
  name: "중국집",
  phone: 44455557777,
};
