var copyButton = document.getElementById("copyButton");
var copyIcon = document.getElementById("copyIcon");

var generateIcon = document.getElementById("generateIcon");

var passwordLength = document.getElementById("password-length-number"); //password length controller
var slider = document.getElementById("password-length-slider");

var length; // password length default value is 8 from number input & slider

var selectAll = document.getElementById("selectAll");

var password = document.getElementById("generated-password");

var sourceRedirection = document.getElementById("github");

const uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
const numberList = '0123456789';
const symbollist = '!@#$%^&*';

var uppercase = document.getElementById("uppercase");
var lowercase =  document.getElementById("lowercase");
var number = document.getElementById("number");
var symbol = document.getElementById("symbol");


document.addEventListener("DOMContentLoaded", autoGenerate); // auto generate password on page load

copyButton.addEventListener("click", copyPassword);
copyIcon.addEventListener("click", copyPassword);
generateIcon.addEventListener("click", generatePassword);
selectAll.addEventListener("click", selectAllBoxes);
sourceRedirection.addEventListener("click", githubRedirection);
passwordLength.addEventListener("change", lengthUpdateSlider);
slider.addEventListener("change", sliderUpdateLength);
uppercase.addEventListener("change", useUppercase);
lowercase.addEventListener("change", useLowercase);
number.addEventListener("change", useNumber);
symbol.addEventListener("change", useSymbol);


function autoGenerate() 
{
 password.value = passwordResult(length) ;  
}

function copyPassword() 
{
  var copyText = document.getElementById("generated-password");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

}

function generatePassword()
{
  password.value = passwordResult(length) ;
}

function passwordResult(length)
{
    let characters = '';
    let result = '';
    length  = passwordLength.value;
  
    if (useUppercase() !== false || allOptionUnchecked() == true)
    {
      characters += uppercaseList;
    }
    if(useLowercase() !== false || allOptionUnchecked() == true)
    {
      characters += lowercaseList;
    }
    if(useNumber() !== false || allOptionUnchecked() == true)
    {
      characters += numberList;
    }
    if(useSymbol() !== false || allOptionUnchecked() == true)
    {
      characters += symbollist;
    }

    const charactersLength = characters.length;
    let counter = 0;

    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;

}

function sliderUpdateLength() 
{
  passwordLength.value = slider.value;
}

function lengthUpdateSlider() {
  slider.value = passwordLength.value;
}

function useUppercase()
{ 
  if (uppercase.checked == true) {
    return true;
  }else{
    return false;
  }
}  

function useLowercase()
{
  
  if (lowercase.checked == true ) {
    return true;
  }else{
    return false;
  }
}  

function useNumber()
{
  if (number.checked == true ) {
    return true;
  }else{
    return false;
  }
}  

function useSymbol()
{
  if (symbol.checked == true ) {
    return true;
  }else{
    return false;
  }
}  

function allOptionUnchecked()
{
  if(uppercase.checked == false
    && lowercase.checked == false 
    && number.checked == false
    &&  symbol.checked == false)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function selectAllBoxes()
{
  uppercase.checked = true;
  lowercase.checked = true;
  number.checked = true;
  symbol.checked = true;
}

function githubRedirection()
{
 window.open("https://github.com/arisuv/passwordgenerator-extension"); //sorcecode
}