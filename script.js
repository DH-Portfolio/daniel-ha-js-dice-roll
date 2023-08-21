let dice = document.querySelector(".dice")
let rollButton = document.querySelector(".rollButton");
dice.animate
dice.src='/images/One.png';

setInterval(()=>{

},1000)

rollButton.addEventListener("click",()=>{
    rollDice()
})

const rollDice = roll = ()=>{
    let randomNumber = Math.floor(Math.random()*6 + 1)
    switch(randomNumber){
        case 1:
            dice.src='/images/One.png';
        break;

        case 2: 
            dice.src='/images/Two.png';
        break;

        case 3:
            dice.src='/images/Three.png';
        break;

        case 4:
            dice.src='/images/Four.png';
        break;

        case 5:
            dice.src='/images/Five.png';
        break;

        case 6:
            dice.src='/images/Six.png';
        break;

        default:
            console.log("rolled")
    }
}