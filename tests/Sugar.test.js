let Sugar = require('../App/Sugar');

Sugar = new Sugar(5);

beforeEach(() => {
    Sugar.amount = 5;
});

describe('Test Sugar', () => {
    test('There is sugar', () => {
        expect(Sugar.has()).toBeTruthy();
    });

    test('There is no sugar', () => {
        Sugar.amount = 0;

        expect(Sugar.has()).toBeFalsy();
    });

    test('Give sugar', () => {
        const beforeAmount = Sugar.amount;

        Sugar.give(2);

        expect(Sugar.amount).toBeLessThan(beforeAmount);
    });
});
