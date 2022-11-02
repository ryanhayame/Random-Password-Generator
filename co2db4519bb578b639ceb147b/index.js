const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let leftEl = document.getElementById("left")
let rightEl = document.getElementById("right")

const passwordLength = 12

function getRandCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function generate() {
    let leftResult = ""
    let rightResult = ""
    for (let i = 0; i < passwordLength; i++) {
        leftResult += getRandCharacter()
        rightResult += getRandCharacter()
    }
    leftEl.textContent = leftResult
    rightEl.textContent = rightResult
}

function copy(leftOrRight) {
    let copyText = document.getElementById(leftOrRight).textContent;
    
    if (copyText === "") {
        return;
    }
    
    let TempText = document.createElement("input");
    TempText.value = copyText;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
    
    alert("Copied the text: " + TempText.value);
}


