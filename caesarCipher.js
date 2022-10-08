function caesarCipher(string) {
  //split into array
  const arr = string.split("");
  //for each letter in array

  const newArr = [];
  // const regex = new RegExp('/[a-zA-z]/g');

  for (let i = 0; i < arr.length; i++) {
    if (/^[a-uA-U]+$/.test(arr[i])) {
      // a to w
      newArr.push(String.fromCharCode(arr[i].charCodeAt() + 5));
    } else if (/^[v-zV-Z]+$/.test(arr[i])) {
      newArr.push(String.fromCharCode(arr[i].charCodeAt() - 21));
    } else {
        newArr.push(arr[i]);
    }
  }

  let newString = newArr.join("");

  return newString;
  //     const alphaSwift = (letter) => {
  //         // get ascII code from letter
  //         // ascII code plus 5
  //         // return the newLetter
  //     }
}

module.exports = caesarCipher;
