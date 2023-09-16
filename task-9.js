Promise
    .resolve()
    .then(() => console.log(1))
    .then(() =>
        setTimeout(() =>
            console.log(2), 0)
    )
    .then(() => console.log(3));

Promise
    .resolve()
    .then(() => console.log(4))
    .then(() =>
        setTimeout(() =>
            console.log(5), 0)
    )
    .then(() => console.log(6));

// 1, 4, 3, 6, 2, 5