//TODO: Please write code in this file.
function printInventory(inputs){

  var allItems = loadAllItems();
  var promotions = loadPromotions();
  var goodsNum = [];
  var giftNum = [];

  for(var i = 0; i < allItems.length; i++){
    goodsNum[i] = 0;
    giftNum[i] = 0;
  }

  for(var i = 0; i < inputs.length; i++){
    for(var j = 0; j < allItems.length; j++){

      if(inputs[i].substring(0,10) === allItems[j].barcode){
        if(inputs[i].length > 10){
          goodsNum[j] += parseInt(inputs[i].split("-")[1]);
        }else{
          goodsNum[j] ++;
         }
      }
    }
  }
  for(var i = 0; i < promotions.length; i++){

    if(promotions[i].type === "BUY_TWO_GET_ONE_FREE"){
      var pro_barcodes = promotions[i].barcodes;

      for(var j = 0; j < pro_barcodes.length; j++){
        for(var k = 0; k < allItems.length; k++){

          if(pro_barcodes[j] == allItems[k].barcode){
            giftNum[k] = parseInt(goodsNum[k]/3);
          }
        }
      }
    }
  }

  var output = "***<没钱赚商店>购物清单***\n" ;
  var sum = 0;
  var save = 0;

  for(var i = 0; i < allItems.length; i++){

    if(goodsNum[i] > 0){
      var num = goodsNum[i]-giftNum[i];
      output += "名称："+allItems[i].name+"，数量："+goodsNum[i]+allItems[i].unit
      +"，单价："+(allItems[i].price).toFixed(2)+"(元)，小计："+(allItems[i].price*num).toFixed(2)+"(元)\n";
      sum += allItems[i].price*num;
    }
  }

  output += "----------------------\n挥泪赠送商品：\n";

  for(var i = 0; i < allItems.length; i++){
    if(giftNum[i] > 0){
      output += "名称："+allItems[i].name+"，数量："+giftNum[i]+allItems[i].unit+"\n";
      save += giftNum[i]*allItems[i].price;
    }
  }

  output += "----------------------\n";
  output += "总计："+(sum).toFixed(2)+"(元)\n" ;
  output += "节省："+(save).toFixed(2)+"(元)\n" ;
  output += "**********************";
  console.log(output);
}
