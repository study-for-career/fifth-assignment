// Function for getting input value

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
     let allLetters = [];
    for(letter of inputValue){
        const letterToNumber = parseFloat(letter);
        allLetters.push(letterToNumber);        
    }

    if(allLetters.includes(NaN) || inputValue === ''){
        return false;
    } else {
        return parseFloat(inputValue);
    }
}

// Function for getting innerText

function getInnerText(id){
    const getPirceText = document.getElementById(id).innerText;
    const priceInNum = parseFloat(getPirceText);
    return priceInNum;
}