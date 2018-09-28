let Coffee = require('../App/Coffee');

Coffee = new Coffee(5);

describe('Test Coffee', () => {
    test('There is Coffee', () => {
        expect(Coffee.has()).toBeTruthy();
    });

    test('There is no Coffee', () => {
        Coffee.amount = 0;

        expect(Coffee.has()).toBeFalsy();
    });

    test('Give coffee', () => {
        const beforeAmount = Coffee.amount;

        Coffee.give(2);

        expect(Coffee.amount).toBeLessThan(beforeAmount);
    });
});