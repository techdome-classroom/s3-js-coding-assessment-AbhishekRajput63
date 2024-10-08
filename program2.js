/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map();
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000);

    let num = map.get(s.charAt(s.length-1));

    for(let i = s.length -1; i>0; i--){
        if(map.get(s.charAt(i)) > map.get(s.charAt(i-1)) ){
            num-= map.get(s.charAt(i-1));
        }
        else{
            num+= map.get(s.charAt(i-1));
        }
    }
    return num;
};


module.exports={romanToInt}