const promise = new Promise((resolve, reject) => {
    console.log(1);

    setTimeout(() => {
        console.log(1);

        resolve(2);

        console.log(3);
    }, 0);

    console.log(4);
});

promise.then((res) => console.log(res));

console.log(5);

// 1, 4, 5, 1, 3, 2