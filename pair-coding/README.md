# Checkout constructor function

### Notes
This is a function that constructs checkout objects as follows
`var co = new Checkout();`

It has the following methods
- `co.scan()` to add an item to the basket and the price of the item to the subtotal
- `co.remove()` to remove an item from the basket and the price from the subtotal
- `co.discount()` to apply the appropriate discounts to discounted items
- `co.total()` to return the total after any discounts have been applied

It has following properties
- `co.subtotal` keeps track of the total price of items in the basket
- `co.basket` an object that counts the number of each item that has been scanned

Additional methods and properties that could be added
- `co.receipt()` method to generate a recipt from `co.basket`, `co.discount()` and `co.total`
- `co.refund()` method to refund an item after the transaction is completed, and create a new receipt
- Refactor Checkout function so `co.scan()` is a pure function and returns a new basket after each scan rather than modifying the basket object
