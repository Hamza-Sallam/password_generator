const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const generate_btn = document.querySelector('#generate-btn')
const reset_btn = document.querySelector('#reset-btn')
const password1=document.querySelector('#password1')
const password2=document.querySelector('#password2')
const passwordLengthEl=document.getElementById('pass-length')
const includeSymbolsEl=document.getElementById('symbols?')
const includeNumbersEl= document.getElementById('numbers?')



function generate(){
    let passwordLength = parseInt(passwordLengthEl.value);
    let includeSymbols = includeSymbolsEl.checked;
    let includeNumbers = includeNumbersEl.checked;
    if (!passwordLength || passwordLength < 5 || passwordLength > 15) {
    alert("Please enter a valid password length between 5 and 15");
    reset();
    return;
  }
    let passwordss=[]
    let chars=[...letters]
    if(includeSymbols)chars=chars.concat(symbols)
    if(includeNumbers)chars=chars.concat(numbers)
    for(var i=0;i<2;i++){
    var pass=""
    for(let i=0; i<passwordLength;i++){
        let index=Math.floor(Math.random()*chars.length)
        pass+=chars[index]
    }
    passwordss.push(pass)}
    
    password1.textContent=passwordss[0]
    password2.textContent=passwordss[1]
    generate_btn.textContent='Regenerate'
    reset_btn.style.display='inline'
}

function reset(){
    passwordLengthEl.value=5
    includeSymbolsEl.checked=false
    includeNumbersEl.checked=false
    password1.textContent=""
    password2.textContent=""
    generate_btn.textContent='Generate Password'
    reset_btn.style.display='none'
}


function copy(num){
    if(num ===1)navigator.clipboard.writeText(password1.textContent)
    else navigator.clipboard.writeText(password2.textContent)
    showAlert()
}


function showAlert() {
    const alertBox = document.createElement("div");
    alertBox.textContent = "Text copied!";
    alertBox.style.position = "fixed";
    alertBox.style.bottom = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.background = "#273549";
    alertBox.style.color = "#10B981";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.zIndex = "1000";
    alertBox.style.opacity = "1";
    alertBox.style.transition = "opacity 0.5s ease-out";
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 500);
    }, 500);
}
