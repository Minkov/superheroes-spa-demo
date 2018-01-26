const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time * 1000);
    });
};

const func = async () => {
    await wait(1);
    console.log(1);
};

module.exports = wait;