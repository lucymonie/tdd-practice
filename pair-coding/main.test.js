describe("Tests for checkout, check that it", function() {
  it('should create a new instance of checkout when constructor is called', function () {
    let co = new Checkout();
    expect(typeof co).toBe('object');
    expect(typeof co.scan).toBe('function');
  })

  it('should scan the item, add the item to the basket and add the price to the subtotal', function() {
    let co1 = new Checkout();
    co1.scan('FR1');
    expect(co1.subtotal).toBe(3.11);
    expect(co1.basket['FR1']).toBe(1);
  });

  it('should keep track of many items added to the subtotal and basket', function () {
    let co2 = new Checkout()
    co2.scan('FR1');
    co2.scan('FR1');
    co2.scan('CF1');
    co2.scan('SR1');
    co2.scan('CF1');
    expect(co2.subtotal).toBe((2*3.11)+5.00+(2*11.23));
    expect(co2.basket).toEqual({FR1:2,SR1:1,CF1:2});
  });

  it('should apply discounts when total is called', function() {
    let co3 = new Checkout();
    co3.subtotal = (5*3.11)+5.00+(2*11.23);
    co3.basket = {FR1:5,SR1:1,CF1:2};
    expect(co3.total()).toBe(((5*3.11)+5.00+(2*11.23))-2.50-3.11-3.11)
  });

  it('should still work even if there are no discounts to apply', function () {
    let co4 = new Checkout();
    co4.basket = {FR1:1,SR1:0,CF1:2}
    co4.subtotal = (3.11+(2*11.23));
    expect(co4.total()).toBe(3.11+(2*11.23))
  });

  it('should be able to remove an item from the basket and subtotal before total is called', function () {
    let co5 = new Checkout();
    co5.basket = {FR1:1,SR1:0,CF1:2}
    co5.subtotal = (3.11+(2*11.23));
    co5.remove('FR1');
    expect(co5.basket).toEqual({FR1:0,SR1:0,CF1:2});
    expect(co5.subtotal).toBe(2*11.23);
  });

})
