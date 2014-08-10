function Pos(cart) {
    this.cart = cart;
    //this.promotionCal = promotionCal;
}

Pos.prototype.printInventory = function () {

    this.cart.calculate();
    var total = this.cart.total;
    console.log(this.cart.length);

    var itemsText = '',
        promotionItemsText = '',
        totalPrice = 0,
        promotionTotalPrice = 0,
        formatter = Utils.formatter;

    //this.promotionCal.cal(this.cart.cartItems);

    for (var i = 0; i < this.cart.cartItems.length; i++) {
        var cartItem = this.cart.cartItems[i];
        if(cartItem.isPromotion){
            promotionItemsText += '名称：' + cartItem.item.name + '，数量：' + cartItem.saveNum + cartItem.item.unit + '\n';
        }

        itemsText += '名称：' + cartItem.item.name + '，数量：' + cartItem.num + cartItem.item.unit +
            '，单价：' + formatter.formatPrice(cartItem.item.price) + '(元)，小计：' + formatter.formatPrice(cartItem.total) + '(元)\n';

    }

    console.log(
            '***<没钱赚商店>购物清单***\n' +
            '打印时间：' + formatter.formatDateTime(new Date()) + '\n' +
            '----------------------\n' +
            itemsText +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            promotionItemsText +
            '----------------------\n' +
            '总计：' + formatter.formatPrice(this.cart.total) + '(元)\n' +
            '节省：' + formatter.formatPrice(this.cart.totalSave) + '(元)\n' +
            '**********************'
    );
};
