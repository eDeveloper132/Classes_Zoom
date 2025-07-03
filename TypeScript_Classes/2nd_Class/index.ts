// const country: string = "Bangladesh";

// if (country === "Pakistan") {
//     console.log("Pakistan is here")
// } else if (country === "India") {
//     console.log("India is here")
// } else if (country === "Bangladesh") {
//     console.log("Bangladesh is here")
// } else {
//     console.log("Not Specified Country Found")
// }
import inquirer from "inquirer";

function verifyAge(Age: number){
    if (Age <= 0) {
        console.log("Invalid Age");
    } else if(Age < 18) {
        console.log("You are Teenager");
    } else if (Age >= 18 && Age <= 50 ) {
        console.log("You are an Adult");
    } else if (Age > 50 && Age <= 100) {
        console.log("You are an elder Person");
    } else {
        console.log("Invalid Age above 100");
    }
}

async function getUserAge(){
    const Umer = await inquirer.prompt(
        [
            {
                type: "number",
                name: "Age",
                message: "Enter Your Age"
            }
        ]
    )
    verifyAge(Umer.Age);
}
getUserAge();