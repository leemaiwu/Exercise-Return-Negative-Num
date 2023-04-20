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


// Alternative Solution


const makeNeg = (num) => -Math.abs(num)

console.log(makeNeg(1)) // -1
console.log(makeNeg(0)) // 0
console.log(makeNeg(-1)) // -1
