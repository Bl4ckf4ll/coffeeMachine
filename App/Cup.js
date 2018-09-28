function Cup(amount) {
    this.amount = amount;
}

Cup.prototype.give = function (amount) {
    this.amount -= amount;
}

Cup.prototype.has = function () {
    return this.amount > 0;
}

module.exports = Cup;