var reverseBits = function(n) {

    var str = n.toString(2).split("").reverse().join("");
    // .toString  used to get certain bit by bit at 2 decimal points each
    while(str.length < 32){
        str = str + '0'; //takes care of missing 0's
    }
    
    console.log(str);
    return parseInt(str, 2);
};