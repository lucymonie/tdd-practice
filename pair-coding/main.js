var test = function (name) {
  return 'Hello ' + name + '!';
}

const Checkout = function () {
  this.sum = 0;
  this.tracking = {
    FR1: 0,
    SR1: 0,
    CF1: 0
  }
  this.scan = function (productCode) {
    this.tracking.productCode += 1
  }
  this.total = function() {
    return sum;
  }
}

let co = new Checkout();


const items = {
	FR1: {name: 'Fruit tea', price: 3.11, discount: 'two for one'},
	SR1: {name: 'Strawberries', price: 5.00, discount: 'half price'},
	CF1: {name: 'Coffee', price: 11.23, discount: null}
}
