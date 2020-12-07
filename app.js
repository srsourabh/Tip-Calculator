function calculateTip(){
    
    resetTip();

    var billAmount = document.getElementById("amount").value;
    var tipPercentage = document.getElementById("tip").value;
    var numberOfPeople = document.getElementById("numberPeople").value;

    //validate bill amount field
    if(billAmount === ""){
        alert("Please enter the bill amount");
        return;
    }
    
    if(billAmount==0 || billAmount<0 ){
        alert("Bill amount cannot be '0' or negative")
        return;
    }
     //validate Tip Percentage field
    if( tipPercentage<0 ) {
        alert("Tip amount cannot be negative")
        return;
    }
    if( numberOfPeople<0 ) {
        alert("Number of people cannot be negative")
        return;
    }
    //calculating total tip
    function tipCalc(){
        let tipTotal = (billAmount * tipPercentage)/100;
        tipTotal  = tipTotal.toFixed(2);
        return tipTotal;
    }
    var totalTip = tipCalc();
    //if number of people are greater than 1
    if(numberOfPeople > 1){
        document.getElementById("multiple").style.display = "block";
        let bill = (billAmount / numberOfPeople);
        let tip = (totalTip / numberOfPeople);
        document.getElementById("totalTipMultiple").innerHTML = tip.toFixed(2);

        let amountEach = parseFloat(bill) + parseFloat(tip);
        document.getElementById("totalAmountEach").innerHTML = amountEach.toFixed(2);

        let multipleTotal = parseFloat(billAmount) + parseFloat(totalTip);
        document.getElementById("billTotalMultiple").innerHTML = multipleTotal.toFixed(2);

       
    }
    else{
        document.getElementById("single").style.display = "block";
        let singleTotal = (parseFloat(billAmount) + parseFloat(totalTip));
        document.getElementById("tipAmount").innerHTML = totalTip;
        document.getElementById("billTotal").innerHTML = singleTotal.toFixed(2);
    }
}

resetTip();
//hide the single and multiple blocks
function resetTip(){
    document.getElementById("single").style.display = "none";
    document.getElementById("multiple").style.display = "none";

}