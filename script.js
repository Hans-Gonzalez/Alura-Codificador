const encryptButton= document.getElementById("primary-button");
const decryptButton= document.getElementById("secondary-button");
const copyButton=document.getElementById("copy-button");
const inputArea  = document.getElementById("input-area");
const outputArea=document.getElementById("output-area");
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const letters = ["e", "i", "a", "o", "u"];
const replacements=["enter", "imes", "ai", "ober", "ufat"];

let input;
let output="";
let encryptable = true;
let isEmpty=true;

function takeInput(){
    output="";
    input=inputArea.value;
    if(input.length<1){
        encryptable=false;
        isEmpty=true;

        alert("El campo de texto esta vacio");
    }
    else{
        encryptable=true;
        isEmpty=false;
    }
}
function checkLowerCase(){
    for(inputIndex=0;inputIndex<input.length;inputIndex++){
        let lowerCased=input[inputIndex];
        if(lowerCased==lowerCased.toLowerCase()){
            encryptable=true;
        }
        else {
            encryptable=false;
            break;
        }
    }
}
function checkContent(){
    let exist=false;
    for(inputIndex=0;inputIndex<input.length;inputIndex++){
        for(alphabetIndex=0;alphabetIndex<alphabet.length;alphabetIndex++){
            if(input[inputIndex]!== alphabet[alphabetIndex]&&input[inputIndex]!==' '){
                exist=false;
            }   
            else{
                exist=true;
                break;
            } 
        }

        if(exist!==true){
            encryptable=false;
        }
    }       
}
function cleanInput(){
    inputArea.value="";
}
function checkInput(){
    takeInput();
    checkContent();

}

function encrypt(){
    if (encryptable==true){
        for(inputIndex=0;inputIndex<input.length;inputIndex++){
           let replaced=false;
            for(lettersIndex=0;lettersIndex<letters.length;lettersIndex++){
                if(input[inputIndex]==letters[lettersIndex]){
                    output+=replacements[lettersIndex];
                    replaced=true;
                    break;
                }    
                else{
                    replaced=false;
                }                   
            }
            if(replaced!=true){
                output+=input[inputIndex];
            }
            replaced=false;
        }         
        outputArea.innerHTML=output;
        cleanInput();
        enableCopyButton()
    }
}

function decrypt(){
    if (encryptable==true){
        for(inputIndex=0;inputIndex<input.length;inputIndex++){
            let replaced=false;
            let encrypted=true;
            for(lettersIndex=0;lettersIndex<letters.length;lettersIndex++){
                for(i=0;i<replacements[lettersIndex].length;i++){
                    if(input[inputIndex]==letters[lettersIndex]){
                        let checkEncrypted=replacements[lettersIndex];
                        for(j=0;j<checkEncrypted.length;j++){
                            if(input[inputIndex+j]==checkEncrypted[j]){
                                encrypted=true;      
                                usable=true;                  
                            }
                            else{
                                encrypted=false;
                                break;
                            }
                        }
                    }   
                    else{
                        encrypted=false;
                        break;
                    }
                }
                
                if(encrypted==true){
                    output+=input[inputIndex];
                    inputIndex=inputIndex+replacements[lettersIndex].length-1;
                    replaced=true;
                    break;
                }    
                else{
                    replaced=false;
                }                   
            
            }
            
            if(replaced!=true){
                output+=input[inputIndex];
            }
            replaced=false;
     
        }         
        if(input==output && isEmpty!==true){
            alert("No hay nada por desencriptar");
            output="";
        }
        else{

            outputArea.innerHTML=output;
            cleanInput();
            enableCopyButton()
            
        }
    }

}

function startEncrypting(){
    checkInput();
    encrypt();
}

function startDecrypting(){
    checkInput();
    decrypt();
}

function enableCopyButton(){

    copyButton.style.display="block";
}

function copyOutput(){
    navigator.clipboard.writeText(output);
}


encryptButton.onclick = startEncrypting;
decryptButton.onclick = startDecrypting;
copyButton.onclick = copyOutput;

