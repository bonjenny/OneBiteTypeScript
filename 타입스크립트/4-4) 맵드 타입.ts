/**
 * 7/5(수)
 * 4-4) 맵드 타입(Mappped Types)
 * https://cat-antlion-144.notion.site/Mapped-Types-851dfdb9b5774b49a90fa5d822527e40
 * =============================================================
 */

/**
 * <<맵드 타입(Mappped Types)>>
 * 이미 존재하는 타입을 사용하여 마치 자바스크립트의 map() 함수를 사용하는 것과 같이
 * 동일한 프로퍼티에 대해 다른 타입을 가지는 새로운 타입을 생성하는 것
 */

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = { [Property in keyof FeatureFlags]: boolean };
// type FeatureOptions = {
//   darkMode: () => boolean;
//   newUserProfile: () => boolean;
// };

const options: FeatureOptions = {
  darkMode: true,
  newUserProfile: false,
};
