function Cart(){
    this.cartItems = [];

    this.total = 0;
    this.totalSave = 0;
    this.totalSaveCount = 0;
    this.promotionItems = [];
}
Cart.prototype.get = function (barcode) {

    for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].barcode === barcode) {
            return this.cartItems[i];
        }
    }

    return null;
};

Cart.prototype.add = function (cartItem){
    var item =  this.get(cartItem);
    if(item == null){
        this.cartItems.push(cartItem);
    }
    else{
        item.num += cartItem.num;
    }
};

Cart.prototype.calculate = function(){
    var allPromotion = loadPromotions();
    for (var i = 0; i < this.cartItems.length; i++){
        this.cartItems[i].itemSum(allPromotion[0]);
        this.total += this.cartItems[i].total;
        this.totalSave += this.cartItems[i].saveMoney;
        this.totalSaveCount += this.cartItems[i].saveNum;

        if(this.cartItems[i].isPromotion){
            this.promotionItems.push(this.cartItems[i]);
        }
    }
}
