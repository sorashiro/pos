function Transverter(){

}

Transverter.prototype.change = function(inputs){

    var barcodes;
    for (var i = 0, i < inputs.length, i++){

        var barcodeSplit = inputs[i].split('-');
        var barcode = barcodeSplit[0];
        var num = parseFloat(barcodes[1] )|| 1;

        for (var j = 0, j < num, j++){
            barcodes.push(barcode);
        }
        return new CartItem(barcodes, num);
    }
};
