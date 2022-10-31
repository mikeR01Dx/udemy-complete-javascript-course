// declare two variables that stores the respective masses of John and Mark
let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log('This is for test data 1')
console.log('Mark\'s BMI is higher than john\'s BMI, (true or false?)',markHigherBMI)

markMass = 95;
johnMass = 85;


markHeight = 1.88;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log('This is the for test data 2')
console.log('Mark\'s BMI is higher than john\'s BMI, (true or false?)',markHigherBMI)