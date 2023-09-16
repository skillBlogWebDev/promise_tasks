const p = new Promise((resolve, reject) =>
        reject(Error('All is broken :(')))
    .catch((error) => console.log(1, error.message))
    .catch((error) => console.log(2, error.message));

    // 1 All is broken :(