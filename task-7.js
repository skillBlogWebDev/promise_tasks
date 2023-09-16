console.log(1)

Promise.resolve(2).then((res) => console.log(res))

setTimeout(() => console.log(3), 0);

Promise.resolve(4).then((res) => console.log(res))

console.log(5)

// 1, 5, 2, 4, 3
