// import { Equal } from "@type-challenges/utils";
type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

// type Includes<T extends readonly any[], U> = T extends [
//   infer First,
//   ...infer Reset
// ]
//   ? true extends MyEqual<First, U>
//     ? true
//     : Includes<Reset, U>
//   : false;
// your answers

// type Includes<T extends readonly any[], U> = T extends [infer K, ...infer P]
//   ? MyEqual<U, K> extends true
//     ? true
//     : Includes<P, U>
//   : false;

type Includes<T extends readonly any[], U> = true extends {
  [I in keyof T]: MyEqual<T[I], U>;
}[number]
  ? true
  : false;
