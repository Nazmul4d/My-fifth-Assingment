// NOAKHALI DONATION JS.CODE

document.getElementById('donate-btn')
  .addEventListener('click', function () {

    const noakhaliInput = getInputFileValueById('input-noakhali');
    const amntNoakhali = getTextFileValueById('noakhali-amnt');
    const totalAmount = getTextFileValueById('total-amount');


    if (!isNaN(noakhaliInput) && noakhaliInput >= 0) {
      const totalValue = noakhaliInput + amntNoakhali;

      document.getElementById('noakhali-amnt').innerText = (totalValue.toFixed(2));


      const totalBalance = totalAmount - noakhaliInput;

      document.getElementById('total-amount').innerText = (totalBalance.toFixed(2));

     
      document.getElementById('my_modal_5').showModal();


      const date = new Date()
      const historyForm = document.getElementById('btn-history-from')
      const noakhaliTitle = document.getElementById('noakhali-title').innerText
      const div = document.createElement('div');
      div.innerHTML = `
      
      <div class="w-11/12 mx-auto border border-[#B4F461] rounded-sm m-4">
     
      <div class="p-5 space-y-4">
                  <h3 class ="font-bold ">${noakhaliInput} Taka ${noakhaliTitle}</h3>
      <p class="text-[10px]"> ${date}</p>
      </div>
      
      </div>
      
      
      `
      historyForm.appendChild(div);

    }

    else {
      alert("Please Provide A Number")
    }

    const value = document.getElementById('input-noakhali').value = " ";
    console.log(value)

  })

// FENI DONATION JS.CODE

document.getElementById('donate-btn2')
  .addEventListener('click', function () {

    const feniInput = getInputFileValueById('input-Feni');
    const amntFeni = getTextFileValueById('Feni-amount');
    const totalAmount = getTextFileValueById('total-amount');



    if (!isNaN(feniInput) && feniInput >= 0) {
      const totalValue2 = feniInput + amntFeni;

      document.getElementById('Feni-amount').innerText = (totalValue2.toFixed(2));

      const totalBalance = totalAmount - feniInput;

      document.getElementById('total-amount').innerText = (totalBalance.toFixed(2));

      document.getElementById('my_modal_5').showModal();


      const date = new Date()
      const historyForm = document.getElementById('btn-history-from')
      const feniTitle = document.getElementById('feni-title').innerText;
      const div = document.createElement('div')
      div.innerHTML = `
          

      <div class="w-11/12 mx-auto border border-[#B4F461] rounded-sm m-4">
     
      <div class="p-5 space-y-4">
                  <h3 class ="font-bold ">${feniInput} Taka ${feniTitle}</h3>
      <p class="text-[10px]"> ${date}</p>
      </div>
      
      </div>
      
      
      `

      historyForm.appendChild(div)



    }

    else {
      alert("Please Provide A Number")
    }

    document.getElementById('input-Feni').value=" ";
    
  })


// QUOTA AID INJURED JS.CODE


document.getElementById('donate-btn3')
  .addEventListener('click', function () {

    const quotaInput = getInputFileValueById('input-quota');
    const amntQuota = getTextFileValueById('quota-amount');
    const totalAmount = getTextFileValueById('total-amount');



    if (!isNaN(quotaInput) && quotaInput >= 0) {
      const totalValue3 = quotaInput + amntQuota;

      document.getElementById('quota-amount').innerText = (totalValue3.toFixed(2));

      const totalBalance = totalAmount - quotaInput;

      document.getElementById('total-amount').innerText = (totalBalance.toFixed(2));
      document.getElementById('my_modal_5').showModal();

      const date = new Date()
      const historyForm = document.getElementById('btn-history-from')
      const qutaTitle = document.getElementById('quota-title').innerText;
      const div = document.createElement('div')
      div.innerHTML = `
          

      <div class="w-11/12 mx-auto border border-[#B4F461] rounded-sm m-4">
     
      <div class="p-5 space-y-4">
                  <h3 class ="font-bold ">${quotaInput} Taka ${qutaTitle}</h3>
      <p class="text-[10px]"> ${date}</p>
      </div>
      
      </div>
      
      
      `

      historyForm.appendChild(div)
    }


    else {
      alert("Please Provide A Number")
    }

    document.getElementById('input-quota').value = " ";


  })


// button section


document.getElementById('btn-history').addEventListener('click', function () {
  showSectionById('btn-history-from');
});


document.getElementById('btn-donate').addEventListener('click', function () {
  showSectionById('btn-donation-from');
})


document.getElementById('btn-history')
  .addEventListener('click', function () {

    document.getElementById('btn-history').classList.add('common-clr-btn');
    document.getElementById('btn-donate').classList.remove('common-clr-btn');



  })
document.getElementById('btn-donate')
  .addEventListener('click', function () {

    document.getElementById('btn-donate').classList.add('common-clr-btn');
    document.getElementById('btn-history').classList.remove('common-clr-btn');


  })

