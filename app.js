// Get the elements
const donationCards = document.getElementById('donation-cards');
const historyArea = document.getElementById('history');
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

// Available Balance
const availableBalanceEl = document.getElementById('available-balance');

// Noakhali Flood Donation Area
const noakhaliFloodEl = document.getElementById('donation-amount-noakhali');


// Donation Button Funtionalities
donationBtn.addEventListener('click', function(){
    donationCards.classList.remove('hidden');
    historyArea.classList.add('hidden');
     // Add the background color of donation button and remove from history button
    donationBtn.classList.add('bg-primary');
    donationBtn.classList.remove('bg-transparent');
    
    historyBtn.classList.add('bg-transparent');
    historyBtn.classList.remove('bg-primary');
})

// History Button Funtionalities
historyBtn.addEventListener('click', function(){
    historyArea.classList.remove('hidden');
    donationCards.classList.add('hidden');
    // Add the background color of history button and remove from donation button
    historyBtn.classList.add('bg-primary');
    historyBtn.classList.remove('bg-transparent')

    donationBtn.classList.add('bg-transparent');
    donationBtn.classList.remove('bg-primary');
})


// Noakhali Flood Donation Button
document.getElementById('btn-noakhali').addEventListener('click', function(){
    const inputNoakhali = getInputValue("input-noakhali");
    const totalDonationAmount = getInnerText("donation-amount-noakhali");
    const availableBalance = getInnerText('available-balance');

    if(typeof inputNoakhali !== 'number' || inputNoakhali < 1 || false ){
         alert('Invalid Input')
         return
    } else {
        // Add Donation Balance to the Noakhali Balance Field
        const newDonationAmount = totalDonationAmount + inputNoakhali;
        noakhaliFloodEl.innerText = newDonationAmount;

        // Substract Available  Balance after Successful Donation
        const newAvailabelBalance = availableBalance - inputNoakhali;
        availableBalanceEl.innerText = newAvailabelBalance;
        my_modal_5.showModal()
    }

})

