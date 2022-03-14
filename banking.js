function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    if ( !isNaN(inputField) && inputField == '') {
        alert('give a number')
    }
    else {

        const inputAmountText = parseFloat(inputField.value)
        inputField.value = '';
        return inputAmountText;
    }
}

function updateTotalField(inputFieldId,amount) {
    const totalField = document.getElementById(inputFieldId);
    const totalText = totalField.innerText;

    const previousTotal =parseFloat(totalText)

    totalField.innerText = previousTotal+amount;
}

function updateBalance(depositAmount,isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);
    if (isAdd == true) {

        const newBalanceTotal = balanceTotalText + depositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = balanceTotalText - depositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
}


document.getElementById('deposit-button').addEventListener('click', () => {
    const depositInputText = getInputValue('deposit-input')


    if (depositInputText > 0) {

        updateTotalField('deposit-total', depositInputText)
        updateBalance(depositInputText,true)
    }
    else {
        alert('give a positive number')
    }


})


document.getElementById('withdraw-button').addEventListener('click', () => {
    const withdrawInputText = getInputValue('withdraw-input')
    if (withdrawInputText > 0) {

        updateTotalField('withdraw-total',withdrawInputText)
        updateBalance(withdrawInputText,false)
    }
    else {
        alert('give a positive number')
    }

})







                 /*==============
                     RAW CODING
                  =============*/



/* document.getElementById('deposit-button').addEventListener('click', () => {

    const depositInput = document.getElementById('deposit-input');
    const depositInputText = parseFloat(depositInput.value);
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = parseFloat(depositTotal.innerText);
    const newDepositTotal = depositTotalText + depositInputText;
    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = balanceTotalText + depositInputText;
    balanceTotal.innerText = newBalanceTotal;


    depositInput.value = '';
})



// WITHDRAW SECTION


document.getElementById('withdraw-button').addEventListener('click', () => {

// withdraw part

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = parseFloat(withdrawInput.value);

    // withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotal = withdrawTotalText + withdrawInputText;
    withdrawTotal.innerText = newWithdrawTotal;

    // balance  total
     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = balanceTotalText - withdrawInputText;
    balanceTotal.innerText = newBalanceTotal;
    withdrawInput.value = '';

}) */



