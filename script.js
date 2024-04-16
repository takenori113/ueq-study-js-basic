// ループ・配列・データ型の問題
export const func1 = (n) => {
  if (n >= 0 || n & 1 === 0) {
    const reslut = [];
    for (let i = 0; i < n; i++) {
      reslut.push(1 + i);
    }
    return reslut;
  }
  return [];
};

// 条件分岐・データ型の問題
export const func2 = (n) => {
  if (!(n >= 0 || n & 1 === 0)) {
    return "error";
  }
  if (n % 3 === 0 && n % 5 !== 0 && n >= 3) {
    return "Fizz";
  } else if (n % 3 !== 0 && n % 5 === 0 && n >= 5) {
    return "Buzz";
  } else if (n % 3 === 0 && n % 5 === 0 && n >= 15) {
    return "FizzBuzz";
  } else {
    return n;
  }


};

const main = () => {
  // func1の実行例
  const result1 = func1(5);
  console.log(result1);
  // func2の実行例
  const result2 = func2(1.1);
  console.log(result2);
};

main();
