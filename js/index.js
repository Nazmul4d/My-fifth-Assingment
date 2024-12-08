// document.getElementById('donate-btn')
//           .addEventListener('click', function () {


//           const noakhaliInput = document.getElementById('input-noakhali').value;
//           const amntNoakhali = document.getElementById('noakhali-amnt').innerText;



//           const inputNbr = parseFloat(noakhaliInput);
//           const noakhaliNbr= parseFloat(amntNoakhali);




//           const total = inputNbr + noakhaliNbr

//           document.getElementById('noakhali-amnt').innerText = (total);



//           const totalAmnt = document.getElementById('total-amount').innerText;
//           const totalAmntNbr = parseFloat(totalAmnt);

//           const totalBalance = totalAmntNbr - total ; 



//           document.getElementById('total-amount').innerText = (totalBalance);



//           })


// document.getElementById('home-btn')
//   .addEventListener('click', function () {

//     window.location.href = '/home.html';
//   })

  // document.getElementById('blog-btn')
  // .addEventListener('click', function () {
  //   console.log('amahgd')
  //   // window.location.href = '/index.html';
  // });





// NOAKHALI DONATION JS.CODE


// const totalAmount = getTextFileValueById('total-amount');
// const totalBalance = totalAmount - totalValue;

// document.getElementById('total-amount').innerText = (totalBalance.toFixed(2));




//  const noakhaliInput = getInputFileValueById('input-noakhali');
//     const amntNoakhali = getTextFileValueById('noakhali-amnt');
//     const totalAmount = getTextFileValueById('total-amount');





document.getElementById('donate-btn')
  .addEventListener('click', function () {

    const noakhaliInput = getInputFileValueById('input-noakhali');
    const amntNoakhali = getTextFileValueById('noakhali-amnt');
    const totalAmount = getTextFileValueById('total-amount');


    if (!isNaN(noakhaliInput) && noakhaliInput >= 0) {
      const totalValue = noakhaliInput + amntNoakhali;

      document.getElementById('noakhali-amnt').innerText = (totalValue.toFixed(2));

    
      const totalBalance = totalAmount - totalValue;
      console.log(totalBalance);

      document.getElementById('total-amount').innerText = (totalBalance.toFixed(2));

    }

    else {
      alert("Please Provide A Number")
    }


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

      // const totalAmount2 = getTextFileValueById('total-amount');
      const totalBalance = totalAmount- totalValue2;

      document.getElementById('total-amount').innerText = (totalBalance.toFixed(2));

    }

    else {
      alert("Please Provide A Number")
    }


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

      // const totalAmount3 = getTextFileValueById('total-amount');
      const totalBalance = totalAmount - totalValue3;

      document.getElementById('total-amount').innerText = (totalBalance.toFixed(2));

    }

    else {
      alert("Please Provide A Number")
    }


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

  // historyItems

  document.getElementById('history-list').addEventListener('click',function(){
   
  })