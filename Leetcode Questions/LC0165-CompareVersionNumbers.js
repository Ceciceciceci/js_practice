const compareVersion = (a, b) => {
    if (a.length === 0 && b.length === 0) {
        return 0
    } //base case if empty

    const aSplit = a.split('.');
    const bSplit = b.split('.');
    //first we will split by the .
    
    const firstA = Number(aSplit[0]);
    const firstB = Number(bSplit[0]);
    //change the first chara to a number and compare
    //compare each one like comparing elements in an array

    //compare them
    //if the number chara of ver a is bigger than b we can continue calling till 
    //once you find a charac of a that is smaller than b then it is false triggered
    if (firstA > firstB) {
        return 1;
    } else if (firstA < firstB) {
        return -1;
    }

    // create back into string the rest of the ver number
    const newA = aSplit.slice(1).join('.');
    const newB = bSplit.slice(1).join('.');

    //call back to compare
    return compareVersion(newA, newB);
};