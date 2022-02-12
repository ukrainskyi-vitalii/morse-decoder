const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const DELIMETER = '**********';

const decode = expr => expr.split(DELIMETER).map(item => item.match(/.{1,10}/g).map(letter => decToMorse(letter)).join('')).join(' ');

const decToMorse = dec => {
    let res = '';
    res = dec.match(/.{1,2}/g).reduce((prev, current) => {
        return prev + (current === '10' ? '.' : (current === '11' ? '-' : ''));
    }, '');

    return MORSE_TABLE[res];
}

module.exports = {
    decode
}