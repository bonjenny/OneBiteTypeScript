/**
 * 7/5(수)
 * 3-2) 클래스
 * https://cat-antlion-144.notion.site/c2dcc8f5b6834ec78b67a53519e3fe96
 * =============================================================
 */

// <<추상 클래스>>

abstract class Developer {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log("drink sth");
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop web");
  }
  design(): void {
    console.log("design web");
  }
}
// const dev = new Developer(); // error: 추상 클래스의 인스턴스 객체를 만들 수 없습니다.
const josh = new FrontEndDeveloper();
josh.coding(); // develop web
josh.drink(); // drink sth
josh.design(); // design web
