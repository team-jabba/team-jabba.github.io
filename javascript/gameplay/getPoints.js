import { checkForPair } from './checkForPair.js';

export const getPoints = function(array) {
    let flag = 0;
    let dummy = array.slice(0, array.length);
    if(checkForPair(dummy)) {
        const pairValue = checkForPair(dummy);

        for(let i = 0; i < dummy.length; i++) {
            const currentNumber = dummy[i];
            if(currentNumber === pairValue && flag < 3) {
                dummy.splice(i, 1);
                flag++;
            }
        }
        return dummy[0];
    } else {
        return 0;
    }

};




