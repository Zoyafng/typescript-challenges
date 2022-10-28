type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
//  js 实现
function tupleToObject(tuple) {
  let obj;
  // tuple 参数类型限制
  tuple.forEach((item) => {
    obj[item] = item;
  });
  return obj;
}
