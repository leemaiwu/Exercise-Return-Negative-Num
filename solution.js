function makeNegative(num) {
  if (num === 0) {
    return num
  } else if (num < 0) {
    return num
  } else {
    return num * -1
  }
}

console.log(makeNegative(1)) // -1
console.log(makeNegative(0)) // 0
console.log(makeNegative(-1)) // -1