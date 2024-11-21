const BASE_URL ="https://v6.exchangerate-api.com/v6/4c6bd8004a3097a6af6d7041/pair";
const dropdownSelect=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromValue=document.querySelector(".from select");
const toValue=document.querySelector(".to select");
for(let drop of dropdownSelect){
    //onsole.log(drop);
    for(let code in countryList){
        let newOption=document.createElement("option");
        newOption.value=code;
        newOption.innerText=code;
        drop.append(newOption);
        if(drop.name==='from'&&code==='USD'){
            newOption.selected=true;
        }
        else if(drop.name==='to'&&code==='INR'){
            newOption.selected=true;
        }
    }
    drop.addEventListener('change',(evt)=>{
        changeImage(evt.target);
    })
}
//change image logic
function changeImage(select){
    let selectedValue=select.value;
    //console.log(countryList[selectedValue]);
    let imgCode=countryList[selectedValue];
    let newSrc=`https://flagsapi.com/${imgCode}/flat/64.png`;
    let img=select.parentElement.querySelector('img');
    img.src=newSrc;

}
//exchange logic
async function exchangeAmount(){
    let input=document.querySelector(".amount input");
    let inputV=input.value;
    if(inputV===""||inputV<0){
        input.value="1";
        inputV=1;
    }
    const url=`${BASE_URL}/${fromValue.value}/${toValue.value}`;
    let response=await fetch(url);
    let data=await response.json();
    let finalA=data.conversion_rate*inputV;
    let msg=document.querySelector(".msg");
    msg.innerText=`${inputV} ${fromValue.value} = ${finalA} ${toValue.value}`;
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    exchangeAmount();
});
window.addEventListener("load",()=>{
    exchangeAmount();
})