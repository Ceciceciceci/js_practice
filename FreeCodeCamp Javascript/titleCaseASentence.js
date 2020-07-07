/**
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".} str 
 */

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    for (let i =0 ; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    str = str.join(" ");
    return str;
}

titleCase("I'm a little tea pot");
//should return I'm A Little Tea Pot
//titleCase("sHoRt AnD sToUt") should return Short And Stout.