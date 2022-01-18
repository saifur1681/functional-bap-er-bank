// update input section.....
function updateInput(inputId) {
    const Input = document.getElementById(inputId);
    const InputText = Input.value;
    const getInput = parseFloat(InputText);
    // clear input value.....
    Input.value = "";
    return getInput;
}

// update show value section.....
function updateValue(updateValueId, getInput) {
    const textValue = document.getElementById(updateValueId);
    const valueText = textValue.innerText;
    const getValue = parseFloat(valueText);
    // get total deposit value.....
    const valueTotal = getValue + getInput;
    textValue.innerText = valueTotal;
}

function currentTotalBalance() {
    const previousTotal = document.getElementById("total-balance");
    const totalBalanceText = previousTotal.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    return totalBalance;
}

// total balance update....
function updateTotal(getInput, isAdd) {
    const previousTotal = document.getElementById("total-balance");
    /* const totalBalanceText = previousTotal.innerText;
    const totalBalance = parseFloat(totalBalanceText); */
    const totalBalance = currentTotalBalance();
    if (isAdd == true) {
        const updateTotalBalance = totalBalance + getInput;
        previousTotal.innerText = updateTotalBalance;
    }
    else {
        const updateTotalBalance = totalBalance - getInput;
        previousTotal.innerText = updateTotalBalance;
    }
}

// deposit section.....
document.getElementById("deposit-button").addEventListener("click", function () {
    const getDepositInput = updateInput("user-deposit-input");

    if (getDepositInput > 0) {
        updateValue("show-deposit-value", getDepositInput);
        updateTotal(getDepositInput, true);
    }

    // get deposit input value.....

    /*
    const depositInput = document.getElementById("user-deposit-input");
    const depositInputText = depositInput.value;
    const getDepositInput = parseFloat(depositInputText);
    */
    // get deposit value.....

    /*
    const depositValue = document.getElementById("show-deposit-value");
    const depositValueText = depositValue.innerText;
    const getDepositValue = parseFloat(depositValueText);
    // get total deposit value.....
    const depositValueTotal = getDepositValue + getDepositInput;
    depositValue.innerText = depositValueTotal;
    */
    // total balance update with deposit value.....

    /*  
    const previousTotal = document.getElementById("total-balance");
     const totalBalanceText = previousTotal.innerText;
     const totalBalance = parseFloat(totalBalanceText);
     const updateTotalBalance = totalBalance + getDepositInput;
     previousTotal.innerText = updateTotalBalance;
      */
    // clear input value.....
    // depositInput.value = "";

})

// withdraw section.....
document.getElementById("withdraw-button").addEventListener("click", function () {

    const getWithdrawInput = updateInput("withdraw-input");
    const currentTotal = currentTotalBalance();
    if (getWithdrawInput > 0 && getWithdrawInput < currentTotal) {
        updateValue("show-withdraw-value", getWithdrawInput);
        updateTotal(getWithdrawInput, false);
    }

    // get withdraw input value.....
    /*
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const getWithdrawInput = parseFloat(withdrawInputText);
    */
    // get withdraw value.....

    /*
     const withdrawValue = document.getElementById("show-withdraw-value");
    const withdrawValueText = withdrawValue.innerText;
    const getWithdrawValue = parseFloat(withdrawValueText);
    // get Total Withdraw Value.....
    const withdrawValueTotal = getWithdrawValue + getWithdrawInput;
    withdrawValue.innerText = withdrawValueTotal;
     */
    // total balance update with withdraw value.....

    /*
      const previousTotal = document.getElementById("total-balance");
     const totalBalanceText = previousTotal.innerText;
     const totalBalance = parseFloat(totalBalanceText);
     const updateTotalBalance = totalBalance - getWithdrawInput;
     previousTotal.innerText = updateTotalBalance; 
     */
    // clear withdraw Value.....
    // withdrawInput.value = "";
})

