function PromotionCal(promotions){
    this.promotions = promotions;
};
PromotionCal.prototype.cal = function (catItems) {
    var getPromotion = function (type, promotions) {

        var promotion;

        for (var i = 0; i < promotions.length; i++) {
            if (promotions[i].type === type) {
                promotion = promotions[i];
                break;
            }
        }
        return promotion;
    }
};
PromotionCal.prototype.init = function(promotionType) {

  var allPromotions = loadPromotions();

  for(var i=0; i < allPromotions.length; i++){

    if(allPromotions[i].type === promotionType){

      this.promotion = allPromotions[i];
      break;

    }
  }
};
PromotionCal.prototype.cartItemPromotionnum = function(cartItem) {

    for(var i = 0; i < this.promotion.barcodes.length; j++) {

        if(cartItem.getBarcode() === this.promotion.barcodes[j]) {

        cartItem.promotionNum = parseInt(cartItem.num/3);
        break;

        }
    }
};
