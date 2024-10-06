const containerElem = document.querySelector('.container'); 
const submitButtonElem = document.querySelector('.js-submit-button-popup'); 
const cancelButtonElem = document.querySelector('.js-cancel-button-popup'); 
const setSizeButtonElem = document.querySelector('.js-set-size-button'); 
const resetSizeButtonElem = document.querySelector('.js-reset-button'); 

function createGrid(n) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            let squareElem = document.createElement('div');  
            squareElem.style.width = `${700/n-1}px`; 
            squareElem.style.height = `${500/n-1}px`; 
            squareElem.style.borderStyle= 'solid'; 
            squareElem.style.borderWidth= '0.0001px'; 
            squareElem.style.borderColor = 'darkgrey'; 
            squareElem.className = 'square'; 
            containerElem.appendChild(squareElem);
        }
    }

    const children = document.querySelectorAll('.square'); 
    children.forEach((child) => {
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = 'black'; 
        }); 
    }); 
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
}
  
function closePopup() {
    const userInput = document.getElementById("userInput");
    userInput.value = ''; 
    document.getElementById("popup").style.display = "none";
}
  
function submitInput() {
    const userInput = document.getElementById("userInput");
    const inputValue = userInput.value; 
    userInput.value = ''; 
    userInput.focus(); 

    if (inputValue && inputValue > 0 && inputValue <101) {
        containerElem.innerHTML = ''; 
        createGrid(inputValue); 
        closePopup(); 
    } else {
        alert("Enter a grid size between 1-100");
        openPopup(); 
    }
}

setSizeButtonElem.addEventListener('click', openPopup); 
submitButtonElem.addEventListener('click', submitInput); 
cancelButtonElem.addEventListener('click', closePopup); 

resetSizeButtonElem.addEventListener('click', () => {
    containerElem.innerHTML = ''; 
    createGrid(16);
});

createGrid(16); 



