console.log(1);

const promise1 = new Promise((resolve, reject) => {
  console.log(2)
  resolve(3)
})

promise1.then(res => console.log(res))

console.log(4);

// 1, 2, 4, 3