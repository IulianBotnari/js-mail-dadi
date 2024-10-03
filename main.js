
//email

// let userList = ["tizio, caio, sempronio"]

// let user = prompt("Inserisci user")

// let emailUser


// if (user = userList[0] || [1] || [2]){
//     emailUser = prompt("Inserisci mail")
//     console.log("email inserita");
    
// } else {
//     console.log("ci hai provato");
    
// }

// gico dei dadi

let computer = Math.floor(Math.random() * 6) + 1

let user = Math.floor(Math.random() * 6) + 1


if (computer > user){

    console.log(`Computer vince! ${computer}`);
    
} else if (user > computer){
    console.log(`User vince! ${user}`);

} else{
    console.log("parita");
    
}