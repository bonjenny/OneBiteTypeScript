function sayInfo(age, height) {
  console.log(this.name, age, height);
}

const kim = {
  name: "김",
}

sayInfo.apply(kim, [20, 200]); // this에 kim이 바인딩된 채로, 배열 형식으로 바인딩, sayInfo가 바로 호출됨
sayInfo.call(kim, 20, 200); // this에 kim이 바인딩된 채로, 인자 여러 개로 바인딩, sayInfo가 바로 호출됨
const newSayInfo = sayInfo.bind(kim); // this에 kim이 바인딩된 채로, 새로운 sayInfo 함수를 만들어 리턴
newSayInfo(20, 200);

