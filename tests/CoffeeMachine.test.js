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
  describe('Test cups are set', () => {
    test('Get small cup of coffee', () => {
      expect(CoffeeMachine.cups.small).toBeTruthy();
    });

    test('Get medium cup of coffee', () => {
      expect(CoffeeMachine.cups.medium).toBeTruthy();
    });

    test('Get large cup of coffee', () => {
      expect(CoffeeMachine.cups.large).toBeTruthy();
    });
  });

  test('There is coffee', () => {
    expect(CoffeeMachine.coffee.has()).toBeTruthy();
  });

  test('There is sugar', () => {
    expect(CoffeeMachine.sugar.has()).toBeTruthy();
  });

  test('there are small cups', () => {
    expect(CoffeeMachine.cups.small.has()).toBeTruthy();
  });

  test('there are medium cups', () => {
    expect(CoffeeMachine.cups.medium.has()).toBeTruthy();
  });

  test('there are large cups', () => {
    expect(CoffeeMachine.cups.large.has()).toBeTruthy();
  });

  test('Give sugar', () => {
    const beforeAmount = CoffeeMachine.sugar.amount;

    CoffeeMachine.sugar.give(2);

    expect(CoffeeMachine.sugar.amount).toBeLessThan(beforeAmount);
  });

  test('Give Coffee', () => {
    const beforeAmount = CoffeeMachine.coffee.amount;

    CoffeeMachine.coffee.give(2);

    expect(CoffeeMachine.coffee.amount).toBeLessThan(beforeAmount);
  });

  test('Give Cup', () => {
    const beforeAmount = CoffeeMachine.cups.small.amount;

    CoffeeMachine.cups.small.give(2);

    expect(CoffeeMachine.cups.small.amount).toBeLessThan(beforeAmount);
  });

  test('Give full coffee', () => {
    const coffee = CoffeeMachine.get('small', 2, 2);
    const expectedCoffee = {
      type: 'small',
      coffeeAmount: 2,
      sugarAmount: 2,
    };

    expect(coffee).toMatchObject(expectedCoffee);
  });
});
