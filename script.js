const redCircle = document.getElementById('red');
const yellowCircle = document.getElementById('yellow');
const greenCircle = document.getElementById('green');
let redOn = false;
let yellowOn = false;
let greenOn = false;

redCircle.addEventListener('click',
    function onClick(circle) {
        if (redOn){
            circle.target.style.backgroundColor = 'gray';
            redOn = false;
        } 
        else{
            circle.target.style.backgroundColor = 'red';
            redOn = true;
        } 
    }

);
yellowCircle.addEventListener('click',
    function onClick(circle) {
        if (redOn){
            circle.target.style.backgroundColor = 'gray';
            yellowOn = false;
        } 
        else{
            circle.target.style.backgroundColor = 'yellow';
            yellowOn = true;
        } 
    }
);
greenCircle.addEventListener('click',
    function onClick(circle) {
        if (greenOn){
            circle.target.style.backgroundColor = 'gray';
            greenOn = false;
        } 
        else{
            circle.target.style.backgroundColor = 'green';
            greenOn = true;
        }     }
);
