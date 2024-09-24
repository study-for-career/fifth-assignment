// Get the elements
const donationCards = document.getElementById('donation-cards');
const donationBtn = document.getElementById('donation-btn');

// History Section
const historyArea = document.getElementById('history');
const historyBtn = document.getElementById('history-btn');

// Available Balance
const availableBalanceEl = document.getElementById('available-balance');

// Noakhali Flood Donation Area
const noakhaliFloodEl = document.getElementById('donation-amount-noakhali');

// Feni Flood Relief Area
const feniFloodEl = document.getElementById('amount-feni');

// Qouta Movement Donation Amount Area
const qoutaArea = document.getElementById('quota-amount');



// Donation Button Funtionalities
donationBtn.addEventListener('click', function(){
    donationCards.classList.remove('hidden');
    historyArea.classList.add('hidden');
     // Add the background color of donation button and remove from history button
    donationBtn.classList.add('bg-primary');
    donationBtn.classList.remove('bg-white');
    
    historyBtn.classList.add('bg-white');
    historyBtn.classList.remove('bg-primary');
})

// History Button Funtionalities
historyBtn.addEventListener('click', function(){
    historyArea.classList.remove('hidden');
    donationCards.classList.add('hidden');
    // Add the background color of history button and remove from donation button
    historyBtn.classList.add('bg-primary');
    historyBtn.classList.remove('bg-white')

    donationBtn.classList.add('bg-white');
    donationBtn.classList.remove('bg-primary');
})


// Noakhali Flood Donation Functionalities Area
document.getElementById('btn-noakhali').addEventListener('click', function(){
    const donationAmount = getInputValue("input-noakhali");
    const totalDonationAmount = getInnerText("donation-amount-noakhali");
    const availableBalance = getInnerText('available-balance');

    if(typeof donationAmount !== 'number' || donationAmount < 1 ||  availableBalance < donationAmount){
        my_modal_6.showModal()
        // alert('Invalid Input or Insufficient Balance')
         return
    } else {
        // Add Donation Balance to the Noakhali Balance Field
        const newDonationAmount = totalDonationAmount + donationAmount;
        noakhaliFloodEl.innerText = newDonationAmount.toFixed(2);

        // Substract Available  Balance after Successful Donation
        const newAvailabelBalance = availableBalance - donationAmount;
        availableBalanceEl.innerText = newAvailabelBalance.toFixed(2);

        // Add Transaction to History section

        const trxHistory = document.createElement('div');
        trxHistory.className = "border-2 border-gray-100 rounded-lg p-5";
        trxHistory.innerHTML = `
        <h3> <span class="font-bold">${donationAmount.toFixed(2)}</span> Taka is Donated for Flood at Noakhali, Bangladesh</h3>
        <p class="bg-gray-200 p-1 rounded-lg"> Date : ${new Date()}</p>
        `
        historyArea.insertBefore(trxHistory, historyArea.firstChild);

        my_modal_5.showModal();
    }

})


// Feni Flood Relief Functionalities Area

document.getElementById('btn-feni').addEventListener('click', function(){
    const donationAmount = getInputValue("input-feni");
    const totalDonationAmount = getInnerText("amount-feni");
    const availableBalance = getInnerText('available-balance');

    if(typeof donationAmount !== 'number' || donationAmount < 1 || availableBalance < donationAmount){
        my_modal_6.showModal()
        // alert('Invalid Input or Insufficient Balance')
         return
    } else {
        // Add Donation Balance to the Noakhali Balance Field
        const newDonationAmount = totalDonationAmount + donationAmount;
        feniFloodEl.innerText = newDonationAmount.toFixed(2);

        // Substract Available  Balance after Successful Donation
        const newAvailabelBalance = availableBalance - donationAmount;
        availableBalanceEl.innerText = newAvailabelBalance.toFixed(2);

        // Add Transaction to History section

        const trxHistory = document.createElement('div');
        trxHistory.className = "border-2 border-gray-100 rounded-lg p-5";
        trxHistory.innerHTML = `
        <h3> <span class="font-bold">${donationAmount.toFixed(2)}</span> Taka is Donated for Feni Flood Relief, Bangladesh</h3>
        <p class="bg-gray-200 p-1 rounded-lg"> Date : ${new Date()}</p>
        `
        historyArea.insertBefore(trxHistory, historyArea.firstChild);

        my_modal_5.showModal();
    }
})


// Qouta Movement Injured Donation Functionalities
document.getElementById('btn-qouta-donation').addEventListener('click', function(){
    const donationAmount = getInputValue("input-qouta");
    const totalDonationAmount = getInnerText("quota-amount");
    const availableBalance = getInnerText('available-balance');

    if(typeof donationAmount !== 'number' || donationAmount < 1 || availableBalance < donationAmount){
        my_modal_6.showModal()
        // alert('Invalid Input or Insufficient Balance')
         return
    } else {
        // Add Donation Balance to the Noakhali Balance Field
        const newDonationAmount = totalDonationAmount + donationAmount;
        qoutaArea.innerText = newDonationAmount.toFixed(2);

        // Substract Available  Balance after Successful Donation
        const newAvailabelBalance = availableBalance - donationAmount;
        availableBalanceEl.innerText = newAvailabelBalance.toFixed(2);

        // Add Transaction to History section

        const trxHistory = document.createElement('div');
        trxHistory.className = "border-2 border-gray-100 rounded-lg p-5";
        trxHistory.innerHTML = `
        <h3> <span class="font-bold">${donationAmount.toFixed(2)}</span> Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p class="bg-gray-200 p-1 rounded-lg"> Date : ${new Date()}</p>
        `
        historyArea.insertBefore(trxHistory, historyArea.firstChild);

        my_modal_5.showModal();
    }
})
