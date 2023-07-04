/**
 * 7/4(화)
 * 2-3) 에러 핸들링
 * =============================================================
 */



// 'try ... catch와 에러 핸들링
try {
  // ... 코드를 실행 ...
} catch (e) {
  // ... 에러 핸들링 ...
} finally {
  // ... 항상 실행 ...
}


// finally 구문은 에러가 있든/없든/try 구문에서 return이 일어나도 마지막에 항상 실행
function func() {
  try {
    return 1;
  } catch (e) {
    /* ... */
  } finally {
    console.log('finally');
  }
}
console.log(func()); // finally 안의 console.log가 실행되고 난 후, 실행됨


// 비동기 코드
try {
  // setTimeout(function () {
  //   noSuchVariable; // 스크립트는 여기서 죽습니다, 아래 catch 구문이 실행되지 않습니다
  // }, 1000);
} catch (e) {
  console.log("작동 멈춤");
}


// 에러 객체
try {
  lalala; // 에러, 변수가 정의되지 않음!
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  // console.log(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)

  // 에러 전체를 보여줄 수도 있습니다.
  // 이때, 에러 객체는 "name: message" 형태의 문자열로 변환됩니다.
  // console.log(err); // ReferenceError: lalala is not defined
}


// throw 연산자: 에러를 생성
var message = 'Error!';
let error = new Error(message);
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);

console.log(error.name, ':', error.message);
console.log(error2.name, ':', error2.message);
console.log(error3.name, ':', error3.message);


// throw 예제 2
let json = '{ "age": 30 }'; // 불완전한 데이터
try {
  let user = JSON.parse(json); // <-- 에러 없음
  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }
  console.log(user.name);
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log("JSON Error: " + e.message); // 특정 에러만 처리
  }
  // throw e; // 에러 다시 던지기 (*)
}


/**
 * << 전역 catch>>
 * : 예상치 못한 오류가 발생한 경우 이를 제어할 수 있도록 전역 catch 구문을 제공
 *   브라우저에서는 window.onerror,
 *   Node.js에서는 process.on("uncaughtException")을 사용 가능
 */
// window.onerror = function (message, url, line, col, error) {
//   console.log(`${message}\n At ${line}:${col} of ${url}`);
// };

// function readData() {
//   badFunc(); // 에러가 발생한 장소
// }

// readData();



// << 커스텀 에러와 에러 확장 >>
// 자체 에러 클래스가 필요한 경우 Error 클래스를 상속받아 커스텀 에러 구현 가능

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("에러 발생!");
}

try {
  test();
} catch (err) {
  console.log(err.name, err.message); // ValidationError 에러 발생!
  // console.log(err.stack); // 각 행 번호가 있는 중첩된 호출들의 목록
}