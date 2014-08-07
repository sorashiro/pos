function Cart(barcodes){
    this.barcodes = barcodes;
    this.cartItems = [];
}
Cart.prototype.get = function (barcode) {

    //var cartItem;
    var items = loadAllItems();
    for (var i = 0; i < items.length; i++) {
        if (items[i].barcode === barcode) {
            // cartItem = this.cartItems[i];
            // break;
            return items[i];
        }
    }

//    return cartItem;
};
Cart.prototype.add = function (item, num){

    var existCartItem;

    if (existCartItem = this.get(item.barcode)) {
        existCartItem.num += num;
        return;
    }

    this.cartItems.push(new CartItem(item, num));
};
