// Function kya hota hai?
// Function ek reusable code block hai jo ek naam ke saath define hota hai, inputs (parameters) leta hai, aur kuch kaam karke output de sakta hai (ya sirf side effects, jaise console.log).
function verifyAge(age: number): void {
  // yahan age parameter hai, aur void return type matlab kuch return nahi
  // is ke andar logic chalega
}

// if‑else kya hota hai?
// if‑else ek conditional structure hai jo code ko branching allow karta hai:
if (condition1) {
  // jab condition1 true ho
} else if (condition2) {
  // jab condition1 false ho lekin condition2 true ho
} else {
  // jab sab false ho
}

// Inquirer package kya hai?
// Inquirer ek npm module hai jo command‑line pe interactive prompts show karta hai—jaise questions, multiple choice, input fields, waghera. User input promise-based API se milta hai.

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

// Triple‑equals (===) strict comparison karta hai (type + value).


import inquirer from "inquirer";
// Yahan hum verifyAge naam ka function banayenge
function verifyAge(Age: number){
    // 'age' parameter hai, number type ka
    // void return type matlab koi value return nahi karega
    if (Age <= 0) {
        console.log("🛑 Invalid Age");           // age 0 se kam ya barabar
    } else if (Age < 18) {
        console.log("👦 You are a Teenager");     // age 1–17
    } else if (Age <= 50) {
        console.log("👨 You are an Adult");       // age 18–50
    } else if (Age <= 100) {
        console.log("🧓 You are an Elder Person"); // age 51–100
    } else {
        console.log("🛑 Invalid Age above 100");  // age 101 se zyada
    }
}

// User se age poochne ke liye async function
async function getUserAge(){
    // inquirer.prompt ek Promise return karta hai
    const Umer = await inquirer.prompt(
        [
            {
                type: "number", // number input field
                name: "Age", // object key mein age milegi
                message: "Enter Your Age"
            }
        ]
    )
    // Umer.Age se value milti hai
    verifyAge(Umer.Age);
}

// Program start
getUserAge();