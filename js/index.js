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


document.getElementById('home-btn')
 .addEventListener('click', function(){
  
          window.location.href = '/home.html';
})






// NOAKHALI DONATION JS.CODE



document.getElementById('donate-btn')
          .addEventListener('click', function (){

             const noakhaliInput = getInputFileValueById ('input-noakhali');
             const amntNoakhali = getTextFileValueById('noakhali-amnt');

             

          if( !isNaN(noakhaliInput) && noakhaliInput >= 0){
            const totalValue = noakhaliInput + amntNoakhali;
            
            document.getElementById('noakhali-amnt').innerText = (totalValue);

            const totalAmount = getTextFileValueById('total-amount');
            const totalBalance = totalAmount - totalValue;

            document.getElementById('total-amount').innerText = (totalBalance);

          }

          else{
                    alert("Please Provide A Number")
          }


          })

          // FENI DONATION JS.CODE

          document.getElementById('donate-btn2')
          .addEventListener('click', function (){

             const feniInput = getInputFileValueById ('input-Feni');
             const amntFeni = getTextFileValueById('Feni-amount');

             

          if( !isNaN(feniInput) && feniInput >= 0){
            const totalValue2 = feniInput + amntFeni;
            
            document.getElementById('Feni-amount').innerText = (totalValue2);

            const totalAmount2 = getTextFileValueById('total-amount');
            const totalBalance2 = totalAmount2 - totalValue2;

            document.getElementById('total-amount').innerText = (totalBalance2);

          }

          else{
                    alert("Please Provide A Number")
          }


          })


          // QUOTA AID INJURED JS.CODE

           
          document.getElementById('donate-btn3')
          .addEventListener('click', function (){

             const quotaInput = getInputFileValueById ('input-quota');
             const amntQuota = getTextFileValueById('quota-amount');

             

          if( !isNaN(quotaInput) && quotaInput>= 0){
            const totalValue3 = quotaInput + amntQuota ;
            
            document.getElementById('quota-amount').innerText = (totalValue3);

            const totalAmount3 = getTextFileValueById('total-amount');
            const totalBalance3 = totalAmount3 - totalValue3;

            document.getElementById('total-amount').innerText = (totalBalance3);

          }

          else{
                    alert("Please Provide A Number")
          }


          })


          // button section

          
          document.getElementById('btn-history').addEventListener('click', function (){
                    showSectionById('btn-history-from');
          });

      
          document.getElementById('btn-donate').addEventListener('click', function(){
            showSectionById('btn-donation-from');
          })
        

          document.getElementById('btn-history')
          .addEventListener('click',function(){

            document.getElementById('btn-history').classList.add('common-clr-btn');
            document.getElementById('btn-donate').classList.remove('common-clr-btn');

          
  
          })
          document.getElementById('btn-donate')
          .addEventListener('click',function(){

            document.getElementById('btn-donate').classList.add('common-clr-btn');
            document.getElementById('btn-history').classList.remove('common-clr-btn');
  
          })