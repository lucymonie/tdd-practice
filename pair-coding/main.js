const Checkout = function () {
  this.basket = {
    FR1: 0,
    SR1: 0,
    CF1: 0
  };
  this.scan = function (productCode) {
    this.basket[productCode] += 1;
    this.subtotal += items[productCode].price;
  };
  this.subtotal = 0;
  this.discount = function () {
    let discountTotal = this.subtotal;
    let discountNumFr1 = Math.ceil(this.basket.FR1 / 2);
     discountTotal -= (items.FR1.price * this.basket.FR1);
     discountTotal += (items.FR1.price * discountNumFr1);
     discountTotal -= ((items.SR1.price / 2) * this.basket.SR1);
    return discountTotal;
  }
  this.total = function() {
    return this.discount();
  };
}

const items = {
	FR1: {name: 'Fruit tea', price: 3.11, discount: 'two for one'},
	SR1: {name: 'Strawberries', price: 5.00, discount: 'half price'},
	CF1: {name: 'Coffee', price: 11.23, discount: null}
}
