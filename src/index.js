module.exports = function toReadable (number) {
    const stringNumber = String(number);
    const stringNumbersCollection = {
        // "0_0": "zero",
        "1_0": "one",
        "2_0": "two",
        "3_0": "three",
        "4_0": "four",
        "5_0": "five",
        "6_0": "six",
        "7_0": "seven",
        "8_0": "eight",
        "9_0": "nine",
        "0_1": "",
        "10_1": "ten",
        "11_1": "eleven",
        "12_1": "twelve",
        "13_1": "thirteen",
        "14_1": "fourteen",
        "15_1": "fifteen",
        "16_1": "sixteen",
        "17_1": "seventeen",
        "18_1": "eighteen",
        "19_1": "nineteen",
        "2_1": "twenty ",
        "3_1": "thirty ",
        "4_1": "forty ",
        "5_1": "fifty ",
        "6_1": "sixty ",
        "7_1": "seventy ",
        "8_1": "eighty ",
        "9_1": "ninety ",
        "1_2": "one hundred ",
        "2_2": "two hundred ",
        "3_2": "three hundred ",
        "4_2": "four hundred ",
        "5_2": "five hundred ",
        "6_2": "six hundred ",
        "7_2": "seven hundred ",
        "8_2": "eight hundred ",
        "9_2": "nine hundred ",
    }
    let readableNumber = "";
    for(let i = 0; i < stringNumber.length; i++){
        // readableNumber += stringNumbersCollection[stringNumber[i] + "_" + (stringNumber.length - i - 1)];
        const currentDigitPosition = stringNumber.length - i - 1;

        if(stringNumber[i] === "0" && stringNumber.length === 1){
            readableNumber += "zero";
            break;
        }else if(stringNumber[i] === "0"){
            continue;
        }
        if(currentDigitPosition === 1 && stringNumber[i] === "1"){
            readableNumber += stringNumbersCollection[stringNumber[i] + stringNumber[i+1] + "_" + currentDigitPosition];
            break;
        }
        readableNumber += stringNumbersCollection[stringNumber[i] + "_" + currentDigitPosition];
    }
    return readableNumber.trim();
}
