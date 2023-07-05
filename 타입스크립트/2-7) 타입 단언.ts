/**
 * 7/5(수)
 * 2-7) 타입 단언
 * https://cat-antlion-144.notion.site/e41a8b544743454a81970d8253adbc12
 * =============================================================
 */

// <<타입 단언>>
// 개발자가 직접 타입을 구체적으로 명시
const myCanvas = "main_canvas" as string; // 1)
const myCanvas2 = <string>"main_canvas"; // 2)

// <<불가능한 타입 단언>>
// 보다 구체적이거나 덜 구체적인 버전으로 변환하는 타입 단언만 허용된
// const x = "hello" as number; // Error

// <<두 번의 타입 단언>>
// 다음과 같이 두 번의 단언을 사용 가능하지만, 권장되는 방식은 아님
const a = "hello" as any as number; // OK

// <<타입 단언과 컴파일>>
// 타입 단언은 컴파일러에 의해 제거되며 코드의 런타임 동작에는 전혀 영향을 주지 않음
function add10(num: number) {
  console.log(num + 10);
}
add10("hello" as any as number); // hello10
