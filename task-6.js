console.log(1)

const foo = () => (new Promise((resolve, reject) => {
  console.log(2);
  resolve(3)
}))

console.log(4)

foo().then(res => console.log(res))

console.log(5)

// 1, 4, 2, 5, 3