const weight=document.getElementById('Weight');
const grams=document.getElementById('OutputGrams');
const milligrams=document.getElementById('OutputMilliGrams');

document.getElementById("output").style.visibility='hidden';
document.getElementById("output2").style.visibility='hidden';
weight.addEventListener('keyup',(e)=>{
    e.preventDefault();
    document.getElementById("output").style.visibility='visible';
    document.getElementById("output2").style.visibility='visible';
    grams.innerHTML=weight.value*1000+"g";
    milligrams.innerHTML=weight.value*1000000+"mg";
})