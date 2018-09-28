let Cup = require('../App/Cup');

Cup = new Cup(5);

describe('Test Cup', () => {
    test('There are cups', () => {
        expect(Cup.has()).toBeTruthy();        
    });

    test('There are no cups', () => {
        Cup.amount = 0 

        expect(Cup.has()).toBeFalsy();        
    });    
    
    test('Give cup', () => {
        const beforeAmount = Cup.amount;

        Cup.give(2);

        expect(Cup.amount).toBeLessThan(beforeAmount);
    });
});
