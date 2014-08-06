function printInventory(inputs){

    var transverter = new Transverter(inputs);

    var cart = new Cart(inputs);

    var promotionCal = new PromotionCal();

    var pos = new Pos(cart, promotionCal);
        pos.printInventory(inputs);
//    concole.log(pos..........)
//    console.log(pos.titlePrint() + pos.commonPrint()
//              + pos.givePrint() + pos.pricePrint());
}
