/**
 * 7/4(화)
 * 2-4) 프라미스와 async, await
 * https://cat-antlion-144.notion.site/async-await-005a54681eb24755826dde5e2ad68399?pvs=25
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


// .finally: 어떠한 경우에도 실행되는 구문
new Promise((resolve, reject) => {
  setTimeout(() => resolve("결과"), 2000)
})
  .finally(() => console.log("프라미스가 준비되었습니다."))
  .then(result => console.log(result)); // <-- .then에서 result를 다룰 수 있음


// 예시: loadScript
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    // let script = document.createElement('script');
    let script = {};
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

    // document.head.append(script);
  });
}

let promise4 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise4.then(
  script => console.log(`${script.src}을 불러왔습니다!`),
  error => console.log(`Error: ${error.message}`)
);

promise4.then(script => console.log('또다른 핸들러...'));



/**
 * << 프라미스 체이닝 >>: .then 메서드를 계속 연결하는 방법,
 *                        콜백 지옥 문제 해결 가능
 *                        then 메서드에서 반환한 값이 다음 then 메서드의 인자로 전달됨
 *                        중간에 비동기 작업이 필요하면 Promise 반환 가능
 */

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) { // (**)
    console.log(result); // 2
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });


// << loadScript 개선하기 >>
loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"));


/**
 * << 프라미스와 에러 핸들링 >>
 * Promise는 executor에서 오류가 발생시 자동으로 reject를 실행
 */
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
}).catch(console.log); // Error: 에러 발생!


/**
 * << 처리되지 못한 거부 >>
 * Promise에서 에러를 처리하지 못한 경우
 * 일반적으로 호스트 환경에서 이벤트가 발생하여 이를 처리
 */


/**
 * << 프라미스 API >>
 * - Promise.all:        비동기 작업을 동시에 실행시키고 모두 완료될 때까지 기다림
 *                       하나라도 실패하면 전체가 실패
 * - Promise.allSettled: 비동기 작업을 동시에 실행시키고 모두 완료될 때까지 기다림
 *                       하나가 실패하더라도 나머지는 영향받지 않음
 * - Promise.race:       비동기 작업을 동시에 실행시키고 가장 먼저 처리되는 결과를 반환
 * - Promise.resolve:    resolve가 실행된 Promise를 생성
 *                       간단하게 Promise 객체를 생성할 때 사용
 * - Promise.reject:     reject가 실행된 Promise를 생성 (거의 사용 X)
 */

// 1) Promise.all
// Promise.all([
// fetch('/template.html'),
// fetch('/style.css'),
// fetch('/data.json')
// ]).then(render); // render 메서드는 fetch 결과 전부가 있어야 제대로 동작합니다.

// 2) Promise.allSettled
Promise.all([
  // fetch('/template.html'),
  // fetch('/style.css'),
  // fetch('/data.json')
])
  .then(results => {
    // results(결과)는 다음과 같이 나옵니다
    results = [
      { status: 'fulfilled', value: "...응답..." },
      { status: 'fulfilled', value: "...응답..." },
      { status: 'rejected', reason: "...에러 객체..." }
    ]
    // ...
  });

// 3) Promise.race
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("에러 발생!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1

// 4) Promise.resolve
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  // return fetch(url)
  return function () { return "Result: "; }
    .then(response => response.text())
    .then(text => {
      cache.set(url, text);
      return text;
    });
}

//5)  Promise.reject
// let promise5 = new Promise((resolve, reject) => reject(error));


/**
 * << 마이크로태스크 >>
 * - 마이크로테스크 큐는 먼저 들어온 작업을 실행함
 * - 실행할 것이 아무것도 남아있지 않을 때만 마이크로태스크 큐에 있는 작업이 실행됨
 */

let promise6 = Promise.resolve();
promise6.then(() => console.log("프라미스 성공!"));
console.log("코드 종료"); // 가장 먼저 실행


// 코드의 실행순서를 유지하기 위해서는 다음과 같이 then으로 계속 체이닝을 하면 됨
Promise.resolve()
  .then(() => console.log("프라미스 성공!"))
  .then(() => console.log("코드 종료"));


/**
 * << async와 await >>
 * - async 함수: function 앞에 위치하며 해당 함수는 항상 Promise 객체를 반환
 *               사실상 해당 함수가 Promise의 executor가 되도록 자동으로 만들어 줌
 */

async function someFunction() { // Promise 객체를 반환합ㄴ니다
  return 1;
}
someFunction().then(console.log); // 1

// => 다음과 동일합니다

function someFunction() {
  return new Promise((resolve) => {
    resolve(1);
  });
}
someFunction().then(console.log); // 1


/**
 * await 키워드: 프라미스가 처리될 때까지 기다림, 프라미스의 결과값이 반환
 *               Promise.then 을 사용하지 않고 마치 동기함수인 것처럼 코드를 작성
 */

async function showAvatar() {
  try {
    // JSON 읽기
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // github 사용자 정보 읽기
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // 아바타 보여주기
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // 3초 대기
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();
    return githubUser;
  }
  catch (err) {
    console.log(err.message);
  }
}
showAvatar();