/**
 * 7/5(수)
 * 타입스크립트 Exercises 15번
 * https://typescript-exercises.github.io/#exercise=15&file=%2Findex.ts
 * =============================================================
 */

export class ObjectManipulator {
  constructor(protected obj) {}

  public set(key, value) {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get(key) {
    return this.obj[key];
  }

  public delete(key) {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject() {
    return this.obj;
  }
}
