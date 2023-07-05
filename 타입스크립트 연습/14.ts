/**
 * 7/5(수)
 * 타입스크립트 Exercises 14번
 * https://typescript-exercises.github.io/#exercise=14&file=%2Findex.ts
 * =============================================================
 */

export function map(mapper, input) {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
}

export function filter(filterer, input) {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input.filter(filterer);
}

export function reduce(reducer, initialValue, input) {
  if (arguments.length === 0) {
    return reduce;
  }
  if (arguments.length === 1) {
    return function subFunction(subInitialValue, subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      if (arguments.length === 1) {
        return function subSubFunction(subSubInput) {
          if (arguments.length === 0) {
            return subSubFunction;
          }
          return subSubInput.reduce(reducer, subInitialValue);
        };
      }
      return subInput.reduce(reducer, subInitialValue);
    };
  }
  if (arguments.length === 2) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.reduce(reducer, initialValue);
    };
  }
  return input.reduce(reducer, initialValue);
}

export function add(a, b) {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b;
}

export function subtract(a, b) {
  if (arguments.length === 0) {
    return subtract;
  }
  if (arguments.length === 1) {
    return function subFunction(subB) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a - subB;
    };
  }
  return a - b;
}

export function prop(obj, propName) {
  if (arguments.length === 0) {
    return prop;
  }
  if (arguments.length === 1) {
    return function subFunction(subPropName) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return obj[subPropName];
    };
  }
  return obj[propName];
}

export function pipe(...functions) {
  if (arguments.length === 0) {
    return pipe;
  }
  return function subFunction() {
    let nextArguments = Array.from(arguments);
    let result;
    for (const func of functions) {
      result = func(...nextArguments);
      nextArguments = [result];
    }
    return result;
  };
}
