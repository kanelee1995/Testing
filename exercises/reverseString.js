function reverseString(string) {
    const arr = string.split("");
    let reversedIndex = arr.length;
    const newArr = [];

    for(let i=arr.length; i >= 0; i--) {
        newArr.push(arr[reversedIndex]);
        reversedIndex--;
    }

    const newString = newArr.join('');

    return newString;
}

module.exports = reverseString;
