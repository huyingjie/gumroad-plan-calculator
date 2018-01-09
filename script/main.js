function CalculatePremiumMonthlyFee(cumCustomerNo){
  if (cumCustomerNo < 1000) return 10;
  else if (cumCustomerNo < 1999) return 25;
  else if (cumCustomerNo <4999) return 50;
  else if (cumCustomerNo <9999) 75;
  else if (cumCustomerNo < 14999) return 100;
  else if (cumCustomerNo < 24999) return 150;
  else if (cumCustomerNo < 49999) return 200;
  else return 250;
}


function calculate(form){
  var productPrice = parseFloat(form.productPrice.value);
  var salesPerMonth = parseInt(form.salesPerMonth.value);
  var cumCustomerNo = parseInt(form.cumCustomerNo.value);

  if (productPrice && salesPerMonth && cumCustomerNo) $("#results").show();
  var total = productPrice * salesPerMonth;
  $("#total").html(total);

  const freePercentage = 0.085;
  const premiumPercentage = 0.035;
  const membershipFee = CalculatePremiumMonthlyFee(salesPerMonth + cumCustomerNo);
  const feePerTransaction = 0.03;

  var feeForFree = (productPrice * freePercentage + feePerTransaction) * salesPerMonth;
  var feeForPremium = membershipFee + (productPrice * premiumPercentage + feePerTransaction) * salesPerMonth;
  var profitFree = total - feeForFree;
  var profitPremium = total - feeForPremium;
  $("#feeForFree").html(feeForFree.toFixed(2));
  $("#feeForPremium").html(feeForPremium.toFixed(2));
  $("#profitFree").html(profitFree.toFixed(2));
  $("#profitPremium").html(profitPremium.toFixed(2));
  if(profitFree > profitPremium) {
    $("#betterPlan").html("Free Plan");
    $("#diff").html((profitFree - profitPremium).toFixed(2));
  } else if (profitFree < profitPremium){
    $("#betterPlan").html("Premium Plan");
    $("#diff").html((profitPremium - profitFree).toFixed(2));
  } else {
    $("#betterPlan").html("Both plans");
    $("diff").html(0);
  }

  //console.log(productPrice, salesPerMonth, cumCustomerNo, total);

}
