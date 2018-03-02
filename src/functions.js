export function calculateSubtotal(plateQuantity, napkinsQuantity, cupsQuantity){
  console.log(cupsQuantity);
  let plateTotal = (plateQuantity)*1.50;
  let napkinsTotal = (napkinsQuantity)*1.59;
  let cupsTotal = (cupsQuantity)*3.79;
  let subTotal = (plateTotal + napkinsTotal + cupsTotal).toFixed(2);
  return subTotal;
}

export function calculateTax(taxRate, subTotal){
  let tax = (taxRate*subTotal).toFixed(2);
  return tax;
}

export function calculateTotal(subTotal, tax){
  subTotal = parseFloat(subTotal);
  tax = parseFloat(tax);
  console.log(`subtotal: ${subTotal}`)
  console.log(`tax: ${tax}`)
  var total = subTotal + tax;
  console.log(`Calculate total: ${total}`)
  return parseFloat(total).toFixed(2);
}

export function disableInputs(){
  let platesQuantity = document.getElementById("platesquantity");
  let napkinsQuantity = document.getElementById("napkinsquantity");
  let cupsQuantity = document.getElementById("cupsquantity");
  platesQuantity.disabled = true;
  napkinsQuantity.disabled = true;
  cupsQuantity.disabled = true;
}
