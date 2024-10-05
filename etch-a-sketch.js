const containerElem = document.querySelector('.container'); 

for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        let squareElem = document.createElement('div');  
        squareElem.style.width = `${600/16-1}px`; 
        squareElem.style.height = `${600/16-1}px`; 
        squareElem.style.borderStyle= 'solid'; 
        squareElem.style.borderWidth= '0.0001px'; 
        squareElem.style.borderColor = 'darkgrey'; 
        containerElem.appendChild(squareElem);
    }
}