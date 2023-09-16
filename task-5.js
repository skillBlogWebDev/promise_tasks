setTimeout(() => console.log(1), 0);

const p = new Promise((resolve, reject) => {
    console.log(2);
    resolve()
})

const p2 = new Promise((resolve, reject) => reject(0))

p.then(() => console.log(4))

console.log(5)

console.log(6, p2)

// 2, 3, 5, 6 pending, 4, 1