const getLength = (value: any) =>
  typeof value === "number"
    ? value.toString().split(".")[0].length
    : value.length;

function addLength<T extends number | string>(
  value1: T,
  value2: T,
  fnGetLength: Function,
  type: string = "value"
) {
  if (!type) {
    type = "value";
  }
  switch (type) {
    case "value":
      if (typeof value1 === "number" && typeof value2 === "number") {
        return fnGetLength(value1 + value2);
      }
      if (typeof value1 === "string" && typeof value2 === "string") {
        return fnGetLength(value1 + value2);
      }

      return fnGetLength(value1) + fnGetLength(value2);
    case "length":
      return fnGetLength(value1) + fnGetLength(value2);
  }
}

console.log(addLength(5, 10, getLength, "length"));
console.log(addLength("Hello", "World", getLength));

// 다음과 같이 숫자와 문자열을 함께 넘기면 타입 에러가 발생해야 합니다
// console.log(addLength(100, "World", getLength));
