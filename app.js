// Get the elements
const donationCards = document.getElementById('donation-cards');
const historyArea = document.getElementById('history');
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

donationBtn.addEventListener('click', function(){
    donationCards.classList.remove('hidden');
    historyArea.classList.add('hidden');
     // Add the background color of donation button and remove from history button
    donationBtn.classList.add('bg-primary');
    donationBtn.classList.remove('bg-transparent');
    
    historyBtn.classList.add('bg-transparent');
    historyBtn.classList.remove('bg-primary');
})

historyBtn.addEventListener('click', function(){
    historyArea.classList.remove('hidden');
    donationCards.classList.add('hidden');
    // Add the background color of history button and remove from donation button
    historyBtn.classList.add('bg-primary');
    historyBtn.classList.remove('bg-transparent')

    donationBtn.classList.add('bg-transparent');
    donationBtn.classList.remove('bg-primary');
})
