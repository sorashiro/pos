function Cart(barcodes){

  var init = function(barcodes, cartItemList) {

    var items = loadAllItems();

    for(var i = 0; i < barcodes.length; i++){

      for(var j = 0; j < items.length; j++){

        if(items[j].barcode === barcodes[i]){

          var cartItem = new CartItem(items[j], 1);
          cartItemList.push(cartItem);
          break;

        }
      }
    }

    for(var i = 0; i < cartItemList.length; i++){

      for(var j = 0; j < i; j++){

        if(cartItemList[j].getBarcode() === cartItemList[i].getBarcode()){
          cartItemList[j].num += cartItemList[i].num;
          cartItemList.splice(i,1);
          i--;
          break;
        }

      }
    }

  };

  this.cartItemList = [];

  init(barcodes, this.cartItemList);
}

Cart.prototype.getCartItemList = function() {
  return this.cartItemList;
};
