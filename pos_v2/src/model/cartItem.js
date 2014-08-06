function CartItem(item, num){
    this.item = item;
    this.num = num;
    this.promotionNum = 0;
};

CartItem.prototype.itemSum = function(){

    var itemSum = this.item.price * (this.num - this.promotionNum);
    return itemSum;
};

CartItem.prototype.getBarcode = function(){
    return this.item.barcode;
};
