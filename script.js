let rollButton = document.querySelector(".rollButton");

rollButton.addEventListener("click",()=>{
    rollDice()
})

const rollDice = roll = ()=>{
    let randomNumber = Math.floor(Math.random()*6 + 1)
    switch(randomNumber){
        case 1:
            console.log("rolled 1!")
        break;
        case 2:
            console.log("rolled 2!")
        break;
        case 3:
            console.log("rolled 3!")
        break;
        case 4:
            console.log("rolled 4!")
        break;
        case 5:
            console.log("rolled 5!")
        break;
        case 6:
            console.log("rolled 6!")
        break;
        default:
            console.log("rolled")
    }
}