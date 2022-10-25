type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// interface Todo1 {
//     title: string;
//     description: string;
//     completed: boolean;
//     meta: {
//       author: string;
//     };
//   }
