document.getElementById("btnClick").addEventListener("click", function () {
    let discountInput = document.getElementById("amount").value;
    let tipInput = document.getElementById("tiprange").value;
    let priceInput = document.getElementById("price").value;

    let priceDiv = document.getElementById('priceDiv')
    let discountDiv = document.getElementById('discountDiv')
    let tipDiv = document.getElementById('tipDiv')
    let finalPriceDiv = document.getElementById('finalPriceDiv')
    let resultPriceDiscount = (Number(priceInput) * discountInput) / 100
    discountDiv.innerHTML = "(تومان) مقدار تخفیف: " + Math.floor(resultPriceDiscount)
    let resultPriceTip = (Number(priceInput) * tipInput) / 100
    tipDiv.innerHTML = "(تومان) مقدار انعام: " + Math.floor(resultPriceTip)
    let resultPriceAll = (priceInput - resultPriceDiscount) + resultPriceTip
    finalPriceDiv.innerHTML = "مبلغ پرداختی: " + Math.floor(resultPriceAll)
    priceDiv.innerHTML = "مبلغ اصلی: " + priceInput
})