type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// keyof 将其转为联合类型
// in 遍历枚举
