function Coffee(amount) {
    this.amount = amount;
}

Coffee.prototype.give = function (amount) {
    this.amount -= amount;
}

Coffee.prototype.has = function () {
    return this.amount > 0;
}

module.exports = Coffee;