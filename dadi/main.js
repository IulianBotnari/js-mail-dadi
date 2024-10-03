
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

