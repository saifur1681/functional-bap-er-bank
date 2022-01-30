// update input section.....
function updateInput(inputId) {
    const Input = document.getElementById(inputId);
    const InputText = Input.value;
    const getInput = parseFloat(InputText);
    // clear input value.....
    Input.value = "";
    return getInput;
};

// update show value section.....
function updateValue(updateValueId, getInput) {
    const textValue = document.getElementById(updateValueId);
    const valueText = textValue.innerText;
    const getValue = parseFloat(valueText);
    // get total deposit value.....
    const valueTotal = getValue + getInput;
    textValue.innerText = valueTotal;
};

function currentTotalBalance() {
    const previousTotal = document.getElementById("total-balance");
    const totalBalanceText = previousTotal.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    return totalBalance;
};

// total balance update....
function updateTotal(getInput, isAdd) {
    const previousTotal = document.getElementById("total-balance");
    const totalBalance = currentTotalBalance();
    if (isAdd == true) {
        const updateTotalBalance = totalBalance + getInput;
        previousTotal.innerText = updateTotalBalance;
    }
    else {
        const updateTotalBalance = totalBalance - getInput;
        previousTotal.innerText = updateTotalBalance;
    }
};

// deposit section.....
document.getElementById("deposit-button").addEventListener("click", function () {
    const getDepositInput = updateInput("user-deposit-input");
    if (getDepositInput > 0) {
        updateValue("show-deposit-value", getDepositInput);
        updateTotal(getDepositInput, true);
    }
});

// withdraw section.....
document.getElementById("withdraw-button").addEventListener("click", function () {
    const getWithdrawInput = updateInput("withdraw-input");
    const currentTotal = currentTotalBalance();
    if (getWithdrawInput > 0 && getWithdrawInput < currentTotal) {
        updateValue("show-withdraw-value", getWithdrawInput);
        updateTotal(getWithdrawInput, false);
    }
});

