let code = ''
let usage;
let arr;
arr = JSON.parse(localStorage.getItem('Recharge History'))
let ar = [
    // {
    //     i : '',
    //     date : '',
    //     Network : '',
    //     Amount : '',
    //     rechargePin : '',
    //     rechargeRef : '',
    //     Status : '',
    //     Delete : '' 
    // }
] 

if(JSON.parse(localStorage.getItem('Recharge History'))){
    ar = JSON.parse(localStorage.getItem('Recharge History'))
    display()
   
}
    // mainTable.innerHTML = JSON.parse(localStorage.getItem('Recharge History'))
function generate(){
    code = Math.floor(Math.random() * 10000000000000000)
    pinContainer.value = code
}
    
function record(){
    if (netProvider.value == 'MTN'){
        Ref = '*555*'
    }
    else if (netProvider.value == 'AIRTEL'){
        Ref = '*123*'
    }
    else if (netProvider.value == 'GLO'){
        Ref = '*222*'
    }
    else if (netProvider.value == '9Mobile'){
        Ref = '*121*'
    }
    console.log(Ref);
    const period = new Date();
    period.toLocaleString();
    
    let RechargeHis = 
    {   
        date : period,
        Network : netProvider.value,
        Amount : cardPrice.value,
        rechargePin : pinContainer.value,
        rechargeRef : (Ref + pinContainer.value),
        Status : usage = 'unused',
        // Delete : `<button>Delete</button>`
    }
    ar.push(RechargeHis)
    display()
    localStorage.setItem('Recharge History', JSON.stringify(ar))
    window.location.reload()
    alert('Recharge card purchased successfully')
    if (elem.rechargePin === pinContainer.value){
        alert('This card has already been purchased')
    }
}
function display(){
    mainTable.innerHTML = ''
    mainTable.innerHTML = 
    `
    <table>
        <tr>
        <td>S/N</td>
        <td>Date</td>
        <td>Network</td>
        <td>Amount</td>
        <td>Recharge Pin</td>
        <td>Recharge Ref</td>
        <td>Status</td>
        <td>Delete</td>
    </tr>   
    </table>
    `
    
    ar.forEach((elem, i) => {
        mainTable.innerHTML += 
        `
        <table>
    <tr>            
        <td>${i + 1}</td>
        <td>${elem.date}</td>
        <td>${elem.Network}</td>
        <td>${elem.Amount}</td>
        <td>${elem.rechargePin}</td>
        <td>${elem.rechargeRef}</td>
        <td>${elem.Status}</td>
        <td>   
            <button onclick = "remov(${i})">Delete </button>
        </td>
    </tr>
    </table>
        `
        
    });
    localStorage.setItem('Recharge History', JSON.stringify(ar))
}
function remov(i){
  ar.splice(i, 1) 
  display() 
}
const useCard = ar.fiter(checkUsage);
function checkUsage(card){
// for (let i= 0; i<ar.length; i++) {
//     if (ar[i].Status === 'unused' && ar[i].rechargeRef === rechargeHere.value){
//      ar[i].Status = 'used'
//      alert('Recharge successful')}
//      else if(ar[i].Status === 'used' && ar[i].rechargeRef === rechargeHere.value){
//      alert('This card has already been used')
//      } 
//     }if(!rechargeHere.value){
//      alert('Please enter a valid pin')}

    ar.forEach((elem) => {
    if (elem.Status === 'unused' && elem.rechargeRef === rechargeHere.value){
            elem.Status = 'used'
            alert('Recharge successful')
    }else if(elem.Status === 'used' && elem.rechargeRef === rechargeHere.value){
        alert('This card has already been used')
    }
    }); if(!rechargeHere.value){
    alert('Please enter a valid pin')}

    display()
}