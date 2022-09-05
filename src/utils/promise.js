let ok = true;

let promesa = (task) => {
    return new Promise((resolve, reject) => {
        if (ok) {
            setTimeout(() => {
                resolve(task)
            }, 500);
        } else {
            reject("Error")
        }
    });
}

export default promesa;