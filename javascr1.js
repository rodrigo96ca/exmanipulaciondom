const inputuno=document.querySelector("#input1");
const inputdos=document.querySelector("#input2");
const btnCalc=document.querySelector("#btncalc");
const presult =document.querySelector("#resultado");

btnCalc.addEventListener("click",btnOnClick);

function btnOnClick(){
    const sumaInputs= Number(inputuno.value) + Number(inputdos.value) ;
    presult.innerText= "El resultado es : " + sumaInputs;

}