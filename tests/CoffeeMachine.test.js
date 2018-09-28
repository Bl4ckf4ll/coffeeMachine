let CoffeeMachine = require('../App/CoffeeMachine');

CoffeeMachine = new CoffeeMachine({
    coffee: 10,
    sugar: 10,
    cups: {
        small: 20,
        medium: 10,
        large: 5,
    },
});

describe('Test coffe machine', () => {
    describe('Test cups', () => {
        test('Get small cup of coffee', () => {
            const coffee = CoffeeMachine.get('small', 2, 2);
            const expectedCoffee = {
                type: 'small',
                coffeeAmount: 2,
                sugarAmount: 2,
            };

            expect(coffee).toMatchObject(expectedCoffee);
        });
    });

    test('Get medium cup of coffee', () => {
        const coffee = CoffeeMachine.get('medium', 2, 2);
        const expectedCoffee = {
            type: 'medium',
            coffeeAmount: 2,
            sugarAmount: 2,
        };

        expect(coffee).toMatchObject(expectedCoffee);
    });

    test('Get large cup of coffee', () => {
        const coffee = CoffeeMachine.get('large', 2, 2);
        const expectedCoffee = {
            type: 'large',
            coffeeAmount: 2,
            sugarAmount: 2,
        };

        expect(coffee).toMatchObject(expectedCoffee);
    });
})
