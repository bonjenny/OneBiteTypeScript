type numstrType = number | string;
enum ENUM_LENGTH_INPUT_TYPE {
  Value = "value",
  Length = "length",
}

const getLength = (value: numstrType): number =>
  typeof value === "number"
    ? value.toString().split(".")[0].length
    : value.length;

function addLength<T extends numstrType>(
  value1: T,
  value2: T,
  fnGetLength: Function,
  type: ENUM_LENGTH_INPUT_TYPE = ENUM_LENGTH_INPUT_TYPE.Value
): number {
  switch (type) {
    case ENUM_LENGTH_INPUT_TYPE.Value:
      // 2번 방법: 분기문 작성 ==================================
      if (typeof value1 === "number" && typeof value2 === "number") {
        return fnGetLength(value1 + value2);
      }
      if (typeof value1 === "string" && typeof value2 === "string") {
        return fnGetLength(value1 + value2);
      }
      return fnGetLength(value1) + fnGetLength(value2);

    case ENUM_LENGTH_INPUT_TYPE.Length:
      return fnGetLength(value1) + fnGetLength(value2);

    default:
      return 0;
  }
}

console.log(addLength(5, 10, getLength, ENUM_LENGTH_INPUT_TYPE.Value));
console.log(addLength(5, 10, getLength, ENUM_LENGTH_INPUT_TYPE.Length));
console.log(addLength("Hello", "World", getLength));

// 다음과 같이 숫자와 문자열을 함께 넘기면 타입 에러가 발생해야 합니다
// console.log(addLength(100, "World", getLength));
