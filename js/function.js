function getInputFileValueById(id){
   const inputValue = document.getElementById(id).value;
   const inputNbr = parseFloat(inputValue)
   return inputNbr;
}


function getTextFileValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNbr = parseFloat(textValue);
    return textNbr;
}

function showSectionById (id){
    document.getElementById('btn-donation-from').classList.add('hidden'); 

    document.getElementById('btn-history-from').classList.add ('hidden') ;
    
    document.getElementById(id).classList.remove('hidden');
}