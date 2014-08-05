function Pos(cart, promotionCal){
    this.cart = cart;
    this.promotionCal = promotionCal;
}

Pos.prototype.printInventory = function(){
    var sumPrice = 0;
    promotionSumPrice = 0;
    farmatter = Utils.formatter;
}

Pos.prototype.titlePrint = function() {
    var result = '***<没钱赚商店>购物清单***\n' + '打印时间：' + this.date + '\n';
    return result;
};

Pos.prototype.commonPrint = function(barcodes) {
    var result = '----------------------\n';
    for(var i = 0; i < barcodes.length; i++){
        if(itemlist[i].ispromotion === 1){
            result += '名称：' + barcodes[i].item.name
                      + '，数量：' + barcodes[i].num + barcodes[i].item.unit
                      + '，单价：' + barcodes[i].item.price.toFixed(2)
                      + '(元)，小计：' + (barcodes[i].item.price * (barcodes[i].num - parseInt(barcodes[i].num / 3))).toFixed(2)
                      + '(元)\n';
            this.sumPrice +=  barcodes[i].item.price * (barcodes[i].num - parseInt(barcodes[i].num / 3));
        }else{
            result += '名称：' + barcodes[i].item.name
           + '，数量：' + barcodes[i].num + barcodes[i].item.unit
                + '，单价：' + barcodes[i].item.price.toFixed(2)
                + '(元)，小计：' + (barcodes[i].item.price * barcodes[i].num).toFixed(2)
                + '(元)\n';
          this.sumPrice +=  barcodes[i].item.price * barcodes[i].num;
        }

    }return result;
};

Inventory.prototype.givePrint = function(itemlist) {
    var result = '----------------------\n挥泪赠送商品：\n';
    for(var i = 0; i < itemlist.length; i++){
        if(itemlist[i].ispromotion === 1 && itemlist[i].num > 2)
            result += '名称：' + itemlist[i].item.name + '，数量：'
             + parseInt(itemlist[i].num / 3) + itemlist[i].item.unit
                + '\n';
            this.savePrice +=  parseInt(itemlist[i].num / 3) * itemlist[i].item.price;
    }return result;
};

Inventory.prototype.pricePrint = function() {
    var result = '----------------------\n'
               + '总计：' + this.sumPrice.toFixed(2) + '(元)\n'
               + '节省：' + this.savePrice.toFixed(2) + '(元)\n'
               + '**********************';
    return result;
};
