module.exports = function toReadable (number) {
    const string = String(number);

    let array = [];

    const UNITS = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];


    const v = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    const HUNDREDS = [
        '',
        'one hundred',
        'two hundred',
        'three hundred',
        'four hundred',
        'five hundred',
        'six hundred',
        'seven hundred',
        'eight hundred',
        'nine hundred'
    ];

    if (string.length === 3) {
        array.push(HUNDREDS[string[0]])

        const tens = +string.slice(1)
        const stringOfTens = String(tens)

        if (tens < 20) {
            array.push(UNITS[tens])
        }
        if (tens > 19) {
            array.push(v[stringOfTens[0]])
            array.push(UNITS[stringOfTens[1]])
        }
    }

    if (string.length === 2 && number < 20) {
        array.push(UNITS[string])
    }
    if (string.length === 2 && number > 19) {
        array.push(v[string[0]])
        array.push(UNITS[string[1]])
    }

    if (string.length === 1) {
        array.push(UNITS[string[0]])
    }

    if (array.length!==1 && array[array.length-1]=== 'zero') {
        array.pop('zero')
    }

    return array.join(' ')
  


}
