describe("Tests for checkout", function() {
  it('should create a new instance of checkout when constructor is called', function () {
    let co = new Checkout()
    expect(typeof co).toBe('object');
    expect(typeof co.scan).toBe('function');
  })

  it('should scan the item, add the item to the basket and add the price to the subtotal', function() {
    co.subtotal = 0;
    co.scan('FR1');
    expect(co.subtotal).toBe(3.11);
    expect(co.basket['FR1']).toBe(1);
  });

  it('should keep track of many items added to the subtotal and basket', function () {
    co.subtotal = 0;
    co.basket = {FR1:0, SR1:0, CF1:0};
    co.scan('FR1');
    co.scan('FR1');
    co.scan('CF1');
    co.scan('SR1');
    co.scan('CF1');
    expect(co.subtotal).toBe((2*3.11)+5.00+(2*11.23));
    expect(co.basket).toEqual({FR1:2,SR1:1,CF1:2});
  });

  it('should apply discounts when total is called', function() {
    co.subtotal = (5*3.11)+5.00+(2*11.23);
    co.basket = {FR1:5,SR1:1,CF1:2};
    expect(co.total()).toBe(((5*3.11)+5.00+(2*11.23))-2.50-3.11-3.11)
  });

})
