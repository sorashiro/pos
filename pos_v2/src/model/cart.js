function Cart(){
    this.cartItems = [];
}

CartItem.prototype.smallCal = function() {
  return this.item.price * (this.num - this.promotionNum);
};

CartItem.prototype.getBarcode = function() {
  return this.item.barcode;
};
//.........unfinished
