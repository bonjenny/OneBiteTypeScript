/**
 * 7/4(화)
 * 2-4) 프라미스와 async, await
 * =============================================================
 */



// 콜백
function loadScript(src, callback) {
  // let script = document.createElement('script');
  let script = {};
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));
  // document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
  if (error) return handleError(error);
  console.log(`${script.src}가 로드되었습니다.`);
  console.log(_); // 스크립트에 정의된 함수
});


// 콜백 지옥
loadScript('1.js', function (error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function (error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function (error, script) {
          if (error) {
            handleError(error);
          } else {
            // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
          }
        });
      }
    })
  }
});


// 프라미스
// Promise 객체: 비동기 작업을 처리하기 위해 사용하는 객체
let promise = new Promise(function (resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.
  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
  setTimeout(() => resolve("완료"), 1000);
});


// 소비자: then, catch, finally
// Promise 객체의 결과를 then, catch, finally 메서드를 통해 소비
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("완료!"), 1000);
});
// resolve 함수는 .then의 첫 번째 함수(인수)를 실행합니다.
promise2.then(
  result => console.log(result), // 1초 후 "완료!"를 출력
  error => console.log(error) // 실행되지 않음
);


// .catch: 실패할 경우에 실행되는 구문
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("에러 발생!")), 1000);
});

// .catch(f)는 promise.then(null, f)과 동일하게 작동합니다
promise3.catch(console.log); // 1초 뒤 "Error: 에러 발생!" 출력
// promise3.then(
//   error => console.log(error)
// );