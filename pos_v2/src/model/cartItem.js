function CartItem(item, num){
    this.item = item;
    this.num = num;

    this.saveNum = 0;
    this.saveMoney = 0;
    this.total = 0;
    this.isPromotion = false;
};

CartItem.prototype.itemSum = function(promotion){
    if(this.num == 0){
        this.total = 0;
        this.saveNum = 0;
        this.saveMoney = 0;
        return;
    }

    this.total = this.item.price * this.num;

    for(var i = 0; i < promotion.barcodes.length; i++){
        if(this.item.barcode == promotion.barcodes[i]){
            this.saveNum = parseInt(this.num / 3);
            this.saveMoney = this.saveNum * this.item.price;
            this.total -= this.saveMoney;
            this.isPromotion = true;
            break;
        }
    }
};

CartItem.prototype.getBarcode = function(){
    return this.item.barcode;
};
