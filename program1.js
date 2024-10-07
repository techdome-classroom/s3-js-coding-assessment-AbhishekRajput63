/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack =[];
    const machingBrack= {
        ')':'(',
        '}':'{',
        '[':']'
    }
    for(let char of s){
        if(char in machingBrack){
            if(stack.length === 0 || stack.pop() !== machingBrack[char]){
               return false;
            }
        }
        else{
            stack.push(char);
        }
    }
    return stack.length === 0;
};

module.exports = { isValid };
