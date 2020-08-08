function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
    
    return bound - remainder;
}



/**
* Jasmine Test Suite 
*/
describe('maxMultiple()', () => {
    it('returns largest integer up to boundary', () => {
        // arrange
        const divisor = 3;
        const bound = 10;
        
        // act
        const result = maxMultiple(divisor, bound);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});