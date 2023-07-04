/**
 * 7/4(화)
 * 2-2) 클래스
 * https://cat-antlion-144.notion.site/19575b2a595047e09856d8effd1f7f81?pvs=25
 * =============================================================
 */



// 기본 문법
class User {
  age = 20; // 클래스 필드

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("이름이 너무 짧습니다.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
user.sayHi(); // John
console.log(user.name); // John

user = new User(""); // 이름이 너무 짧습니다.



// 클래스 상속: extends 문법으로 다른 클래스 상속 가능
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} 이/가 멈췄습니다.`);
  }
}

class Rabbit extends Animal {
  // 생성자 오버라이딩
  constructor(name, earLength) {
    super(name); // super 키워드를 사용해 부모 객체의 생성자 호출
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} 이/가 숨었습니다!`);
  }

  // 메서드 오버라이딩
  stop() {
    super.stop(); // super 키워드를 사용해 부모 클래스의 stop을 호출해 멈추고,
    this.hide(); // 숨습니다.
  }

  sayEarLength() {
    console.log(`${this.name} 의 귀 길이는 ${this.earLength} 입니다.`)
  }
}

let rabbit = new Rabbit("흰 토끼");
rabbit = new Rabbit("흰 토끼", 5); // 생성자 오버라이딩

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!

// 메서드 오버라이딩
rabbit.stop(); // 흰 토끼 이/가 멈췄습니다. 흰 토끼 이/가 숨었습니다!
rabbit.sayEarLength(); // 흰 토끼 의 귀 길이는 5 입니다.



// 정적 메서드와 정적 프로퍼티
class Article {
  title = "title";
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static publisher = "Ilya Kantor"; // 정적 프로퍼티: 클래스 자체에서 제공하는 프로퍼티
  static createTodays() {           // 정적 메서드: 클래스 자체에서 제공하는 메서드
    // this는 Article입니다.
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();
console.log(article.title); // Today's digest
console.log(Article.publisher); // Ilya Kantor



// 접근 한정자: public, protected, private
/**
 * public: 외부에서 접근 가능, 일반적인 모든 메서드, 프로퍼티
 * protected: 외부에서 접근 불가능하지만 "상속받은 객체"에서는 접근 가능.
 *            JS에서 지원 X, 변수에 _를 붙이는 관습(컨벤션)으로 한정 가능
 * private: 외부에서 접근 불가능, 내부에서만 접근 가능. # 키워드 사용
 */

class CoffeeMachine {
  // private
  #waterAmount = 0;

  // protected
  _power = 100;

  // public
  get waterAmount() {
    return this.#waterAmount;
  }

  // public
  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
// console.log(machine.#waterAmount); // SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
console.log('machine.waterAmount:', machine.waterAmount);
console.log('machine._power:', machine._power); // 접근이 가능하지만 관습적으로 _변수를 직접 호출하지 않음



// instance of: 객체가 특정 클래스의 인스턴스인지, 상속 관계인지 아닌지 확인
class Rabbit2 { }
let rabbit2 = new Rabbit2();
console.log(rabbit2 instanceof Rabbit2); // true



// 믹스인: 다중상속을 지원하지 않는 JS에서 여러 클래스의 기능을 혼합하여 사용하기 위함
let eventMixin = {
  /**
   *  이벤트 구독
   *  사용패턴: menu.on('select', function(item) { ... }
  */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   *  구독 취소
   *  사용패턴: menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   *  주어진 이름과 데이터를 기반으로 이벤트 생성
   *  사용패턴: this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return; // no handlers for that event name
    }
    // 핸들러 호출
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};


// 클래스 생성
class Menu extends Rabbit2 {
  choose(value) {
    this.trigger("select", value);
  }
}
// 이벤트 관련 메서드가 구현된 믹스인 추가
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// 메뉴 항목을 선택할 때 호출될 핸들러 추가
menu.on("select", value => console.log(`선택된 값: ${value}`));

// 이벤트가 트리거 되면 핸들러가 실행되어 얼럿창이 뜸
// 얼럿창 메시지: Value selected: 123
menu.choose("123");
