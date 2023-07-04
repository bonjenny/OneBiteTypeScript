/**
 * 7/4(화)
 * 2-1) 기본 타입
 * https://cat-antlion-144.notion.site/1622ca3e52c64f28b27b177ec9356d5c
 * =============================================================
 */

// << 타입 선언 >>
let foo: string = "hello";
// let bar: number = true; // Type 'boolean' is not assignable to type 'number'.

/**
 * << 타입 종류 >>
 * - Boolean
 * - Number
 * - String
 * - Object
 * - Symbol
 * - Array
 * - Tuple
 * - Enum
 * - Any
 * - Void
 * - Null
 * - Undefined
 * - Unknown
 * - Never
 */

// String
let str: string = "hi";

// Number
let num: number = 10;

// Boolean
let bool: boolean = false;

// Object
let obj: object = {};

// Symbol
let sym: symbol = Symbol("id");

// Array
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// Tuple
let tpl: [string, number] = ['hi', 10];