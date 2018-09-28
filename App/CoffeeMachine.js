const Sugar = require('./Sugar');
const Coffee = require('./Coffee');
const Cup = require('./Cup');

function CoffeeMachine(config) {
    this.coffee = new Coffee(config.coffee);
    this.sugar = new Sugar(config.sugar);
    this.cups = {
        small: new Cup(config.cups.small),
        medium: new Cup(config.cups.medium),
        large: new Cup(config.cups.large),
    };
}

CoffeeMachine.prototype.get = function (type, coffeeAmount, sugarAmount) {
    this.cups[type].give(1);
    this.coffee.give(coffeeAmount);
    this.sugar.give(sugarAmount);

    if (! this.sugar.has()) {
        throw {
            message: 'There is no Sugar',
        };
    }

    if (! this.coffee.has()) {
        throw {
            message: 'There is no coffee',
        };
    }

    if (! this.cups[type].has()) {
        throw {
            message: `There are no ${type} cups`,
        };
    }

    return {
        type,
        coffeeAmount,
        sugarAmount,
    };
}

module.exports = CoffeeMachine;