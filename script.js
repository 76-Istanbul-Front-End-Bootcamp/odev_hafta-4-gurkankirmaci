const data = {
  USD: {EUR: 0.82, GBP: 0.74, DH:3.67,  CA:1.29},
  EUR: {USD: 1.23, GBP: 0.91, DH:4.48,  CA:1.57},
  GBP: {USD: 1.35, EUR: 1.10, DH:5.00,  CA:1.72 },
  DH : {USD:0.27 , EURO:0.22, GBP:0.20, CA:0.35},
  CA : {USD:0.78,  EURO:0.64, GBP:0.57, DH:2.85},
};

const currencyKeys = Object.keys(data);


function createCurrencyElements(elements, root, inputName){
   
    for(let i =0; i< elements.length; i++){
      
        const currencyKeyDiv   = document.createElement("div");
       
        const currencyKeyInput = document.createElement("input");
        
        currencyKeyInput.setAttribute("type", "radio");
        
        currencyKeyInput.setAttribute("name", inputName);
       
        currencyKeyInput.setAttribute("id", inputName + elements[i]);
        
        currencyKeyInput.setAttribute("value", elements[i]);

        
        const currencyKeyLabel = document.createElement("label");
        
        currencyKeyLabel.setAttribute("for", inputName + elements[i]);
       
        currencyKeyLabel.textContent = elements[i];

        
        currencyKeyDiv.appendChild(currencyKeyInput);
        currencyKeyDiv.appendChild(currencyKeyLabel);

        
        root.appendChild(currencyKeyDiv);
    }
}

//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

// to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);


const calculateButton = document.querySelector("#calculate-button");

calculateButton.addEventListener("click", function(){
    
    let fromTarget = document.querySelector("input[name='currency_from']:checked");
    
    let toTarget   = document.querySelector("input[name='currency_to']:checked");
    
    const amount     = document.querySelector("input[name='amount']").value;

    const currencyResult = document.querySelector("#currency-result");


    if ( !(!fromTarget || !toTarget) ){
        fromTarget = fromTarget.value;
        toTarget = toTarget.value;

        if(fromTarget === toTarget){

            currencyResult.innerHTML = " Lütfen farklı 2 para birimi seçiniz...";
        
        
        } else if(isNaN(Number(amount))){
        
            currencyResult.innerHTML = "Lütfen bir sayı giriniz...";
        
        } 
          else {
                
            const currentCurrencyObject = data[fromTarget];
            
            const resultForOne = currentCurrencyObject[toTarget];
            
            const result = amount * resultForOne;
                
                
            currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
         }
    }
    else {

      if (!(fromTarget || toTarget))
        {
        currencyResult.innerHTML = "Lütfen dönüştüreceğiniz ve dönüşümünü yapacağınız para birimlerini seçiniz... "
        }

        else if(!fromTarget)
        {
            currencyResult.innerHTML = "Lütfen dönüşüm yapacağınız para birimini giriniz..."
        }

        else if(!toTarget)
        {
            currencyResult.innerHTML = "Lütfen dönüştüreceğiniz para birimini giriniz..."
        }
        
    }

 });
    
  