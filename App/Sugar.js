function Sugar(amount) {
    this.amount = amount;
}

Sugar.prototype.setAmount = function (amount) {
    this.amount = amount;
}

Sugar.prototype.give = function (amount) {
    this.amount -= amount;
}

Sugar.prototype.has = function() {
    return this.amount > 0;
}

module.exports = Sugar;