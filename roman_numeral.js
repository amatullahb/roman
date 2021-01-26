//convert arabic numberals to roman numerals 
// 1=I, 5=V, 10=X, 50=L, 100=C, 500=D, 1000=M
//remember that numbers ending in 9 like 19 use subtraction so 19=XIX

// requires prompt-sync -- npm install prompt-sync
const prompt = require('prompt-sync')();
const input = prompt('Please enter number ');
console.log(toRoman(input));

function toRoman(num) {
    //converts arabic numerals below 4000 to roman numerals
    if (isNaN(num)) return 0;
    const map = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };
    let roman = "";
    let stringNum = "";
    const values = Object.values(map);
    const keys = Object.keys(map);

    for (let i=0; i<keys.length; i++) { 
        stringNum = ('' + num).split('');
        if (stringNum[0] == 4) { // 4 case
            if ((num - values[i]) > values[i]) {
                roman += keys[i] + keys[i-1];
                num -= values[i] * 4;
            }
        } else if (stringNum[0] == 9) { // 9 case
            if ((num - values[i]) > values[i]) {
                roman += keys[i] + keys[i-2];
                num -= values[i] * 9;
            }
        } else {
            while (num >= values[i]) { // covers basics, doesn't account for 9 or 4
                roman += keys[i];
                num -= values[i];
                if (num === 0) return roman;
            }
        }
    }
    return roman;
    // let prev = "";
    // for (const prop in map) { 
    //     stringNum = ('' + num).split('');
    //     if (stringNum[0] == 4) {
    //         if ((num - map[prop]) > map[prop]) {
    //             roman += prop + prev;
    //             num -= map[prop] * 4;
    //         }
    //     } else if (stringNum[0] == 9) {
    //         if ((num - map[prop]) > map[prop]) {
    //             roman += prop + prev;
    //             num -= map[prop] * 9;
    //         }
    //     } else {
    //         while (num >= map[prop]) { //covers basics, doesn't account for 9 or 4
    //             roman += prop;
    //             num -= map[prop];
    //             if (num === 0) return roman;
    //         }
    //     }
    //     prev = prop; // bc of 9 case, not sure this method is the best for this but I'd like to get this to work
    // }
    // return roman;
}