//transaction area 
const enterBtn=document.querySelector('#enterBtn');
enterBtn.addEventListener('click',function(){
  const transaction=document.querySelector('#transaction');
  transaction.style.display='none';
  document.querySelector('.second-part').style.display='block';
})
// addEventListener add,input deposit,depositBtn
const depositBtn=document.querySelector('#depositBtn');
depositBtn.addEventListener('click',function(){
  const depositAmount=document.querySelector('#depositAmount').value;
  const depositAmountNumber=parseFloat(depositAmount);
  // capture deposit amount
  const deposit=document.querySelector('#deposit').innerText;
  const depositNumber=parseFloat(deposit);
  const total=depositAmountNumber+depositNumber;
  document.querySelector('#deposit').innerText=total;
  //balance output
  const balance=document.querySelector('#balance').innerText;
  const balanceAmount=parseFloat(balance);
  const balanceTotal=balanceAmount+depositAmountNumber;
  document.querySelector('#balance').innerText=balanceTotal;
  // input text empty rule
  depositAmount=document.querySelector('#depositAmount').value='';
})
//withdrawBtn,withdrawAmount,addeventlistener
const withdrawBt=document.querySelector('#withdrawBtn');
withdrawBt.addEventListener('click',function(){
  const withdrawAmount=document.querySelector('#withdrawAmount').value;
  const withdrawAmountNumber=parseFloat(withdrawAmount);
  //capture withdrawAmount
  const withdraw=document.querySelector('#withdraw').innerText;
  const withdrawNumber=parseFloat(withdraw);
  const total=withdrawAmountNumber+withdrawNumber;
  document.querySelector('#withdraw').innerText=total;
   // output text empty rule
   document.querySelector('#withdrawAmount').value='';
    //balance output
  const balance=document.querySelector('#balance').innerText;
  const balanceAmount=parseFloat(balance);
  const balanceTotal=balanceAmount-withdrawAmountNumber;
  document.querySelector('#balance').innerText=balanceTotal;
})

