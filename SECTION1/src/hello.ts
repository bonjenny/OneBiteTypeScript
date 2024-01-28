export const hello = (message: string) => {
  // strict true인 경우 에러
  // 매개변수의 타입은 추론이 불가하기 때문에, 엄격한 검사가 필요한 경우 O
  console.log("hello " + message);
};
