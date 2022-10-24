const totalEl = document.querySelector('#total');
const stepEl =  document.querySelector('#step');
const diceEl =  document.querySelector('main h1');
const btn =     document.querySelector('button');

let total = 0;
let step = 1;
let diceSides = 6;

btn.addEventListener('click', () => {

    // slumpa ett tärningsvärde 
    const dice = Math.ceil(Math.random()*diceSides);

    // update dice UI
    diceEl.textContent = dice;

    // räkna upp kast med 1, visa i UI
    total++;
    totalEl.textContent = total;
    console.log(dice)

    // jämför slaget värde med step
    if(dice === step) {
        // true
        
        // Öka step med 1
        step++;
        // Uppdatera Step UI
        stepEl.innerText = step;

        if(step === diceSides){
            console.log('Goal!')
        }
    }
})