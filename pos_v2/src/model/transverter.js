function Transverter(inputs) {
    this.inputs = inputs;
}
Transverter.prototype.change = function(inputs) {

    var barcodes;
    for (var i = 0; i < inputs.length; i++){

        var barcodeSplit = inputs[i].split('-');
        var barcode = barcodeSplit[0];
        var num = parseFloat(barcodes[1] )|| 1;

        for (var j = 0; j < num; j++){
            barcodes.push(barcode);
        }
    }
    return barcodes;
    return num;
};
Transverter.prototype.get = function(barcodes){
    var allItems = loadAllItems();
    var getItem = function(barcode, allItems){

        var item;

        for(var i = 0; i < allItems.length; i++){
            if (barcode === allItems[i].barcode){
                item = allItems[i];
                break;
            }
        }
    }

    return new CartItem(item, num);
};
