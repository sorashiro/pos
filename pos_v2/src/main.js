function printInventory(inputs){

    var cart = new Cart();
    var allCartItmes = LoadItems(inputs);
    for(var i = 0; i < allCartItmes.length; i++){
        cart.add(allCartItmes[i]);
    }

    var pos = new Pos(cart);
    pos.printInventory();
}


function LoadItems(inputs){
    var allCartItems = [];
    var allItems = loadAllItems();

    for(var i = 0; i < allItems.length; i++){
        var item = allItems[i];
        var ci = new CartItem(item, 0);

        for(var j = 0; j < inputs.length; j++){
            var info = Transvert(inputs[j]);
            if(info[0] == item.barcode){
                ci.num += info[1];
            }
        }

        if(ci.num > 0){
            allCartItems.push(ci);
        }
    }

    return allCartItems;
}


function Transvert(item){
    var barcodeSplit = item.split('-');
    var barcode = barcodeSplit[0];
    var num = parseFloat(barcodeSplit[1] )|| 1;

    return [barcode, num];
}
