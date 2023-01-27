const mockRandomNumber = (time = 1000): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = parseInt((Math.random() + 1) * 100 + "");
            console.log(`产生随机数：${result}`);
            resolve(result);
        }, time);
    });
};
export { mockRandomNumber };
