function CartItem(barcodes, num){
    this.barcodes = barcodes;
    this.num = num || 0;
}
CartItem.prototype.init = function(){
    var itemlist;

    var items = loadAllItems();

    for(var i = 0; i < this.item.length; i++){
        for(var j = 0; j < items.length; j++){
            if(items[j].barcode === this.barcodes[i].barcode){
                var item = (items[j], this.itemList[i].quantity);
                goods.ispromotion = this.isPromotionItem(items[j]);
                itemlist.push(goods);
                break;
            }
        }
    } return itemlist;
};
