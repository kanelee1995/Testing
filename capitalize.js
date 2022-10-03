function capitalize(string) {
    const arr = string.split("");

    const newArr = arr.map((letter, index) => {
        if (index === 0) {
            return letter.toUpperCase();
        }

        return letter;
    });

    const newString = newArr.join('');

    return newString;
}

module.exports = capitalize;
