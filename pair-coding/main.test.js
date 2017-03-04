describe("Tests for checkout", function() {
  it('should create a new instance of checkout when constructor is called', function () {
    let co = new Checkout()
    expect(typeof co).toBe('object');
    expect(typeof co.scan).toBe('function');
  })

  // it('should check that co.scan picks up the correct item', function() {
  //   co.scan(items.FR1);
  //   expect(co.total(sum)).toBe(3.11);
  // });

  // it('should check that co.total returns the current total', function() {
  //   sum = 0;
  //   checkout.scan(items.FR1);
  //   expect(checkout.total(sum)).toBe(3.11);
  // });

})
