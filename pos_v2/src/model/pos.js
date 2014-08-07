function Pos(cart, promotionCal) {
    this.cart = cart;
    this.promotionCal = promotionCal;
}

Pos.prototype.printInventory = function () {

    console.log(this.cart.length);

    var itemsText = '',
        promotionItemsText = '',
        totalPrice = 0,
        promotionTotalPrice = 0,
        formatter = Utils.formatter;

    this.promotionCal.cal(this.cart.cartItems);

    for (var i = 0; i < this.cart.cartItems.length; i++) {

        var cartItem = this.cart.cartItems[i],
            item = cartItem.item,
            itemNum = cartItem.num,
            subtotal = cartItem.itemSum();

        if (cartItem.promotionNum > 0) {
            promotionItemsText += '名称：' + item.name + '，数量：' + cartItem.promotionNum + item.unit + '\n';
            promotionTotalPrice += cartItem.promotionSubtotal;
        }

        itemsText += '名称：' + item.name + '，数量：' + itemNum + item.unit +
            '，单价：' + formatter.formatPrice(item.price) + '(元)，小计：' + formatter.formatPrice(subtotal) + '(元)\n';

        totalPrice += subtotal;
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
            '总计：' + formatter.formatPrice(totalPrice) + '(元)\n' +
            '节省：' + formatter.formatPrice(promotionTotalPrice) + '(元)\n' +
            '**********************'
    );
};
