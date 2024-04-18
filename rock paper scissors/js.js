let playerChoice 
function popup(){
    let input = prompt("Choose rock, paper, or scissors");
    playerChoice = input
    return playerChoice
}
popup();
const computerOptions = ["rock", "paper", "scissors"];
let computerChoice
function AI(){
let random = Math.floor(Math.random()* computerOptions.length);
computerChoice = computerOptions[random];
return computerChoice
}
AI();
console.log(computerChoice);
function playRound(){
    switch(playerChoice){
    case "rock":
        switch (computerChoice) {
            case "rock":
                return "tie";
            case "paper":
                return "you lose";
            case "scissors":
                return "you win";
            default:
                break;
        } break;
    case "paper":
            switch(computerChoice){
                case "rock":
                    return "you win";
                case "paper":
                    return "tie";
                case "scissors":
                    return "you lose";
                default:
                    break;
            } break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    return "you lose";
                case "paper":
                    return "you win";
                case "scissors":
                    return "tie";
                default:
                    break;}
        default:
                    return "incorrect word"
                }
    
}
playRound();
const result = playRound();
console.log(result);
// make the prompt = to player choice (done)
//account for user to input paper and scissors(done)
// tried for loops & while loops to get the game to replay after each round but still cant figure out how to do it properly, will update when done hopefully soon
