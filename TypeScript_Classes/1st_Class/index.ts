// Variable kya hota hai TypeScript mein?
// Variable aik container hota hai jo kisi value (number, string, boolean, object, waghera) ko store karta hai, aur TypeScript mein uski type bhi specify kar sakte ho taake compile time pe bugs pakray jaayen.

let age: number = 21;
const namee: string = "Ilyas";
var isOnline: boolean = true;

// var, let, aur const ka farq?
// | Keyword | Scope           | Hoisting                 | Reassignable?      | Redeclarable? |
// | ------- | --------------- | ------------------------ | ------------------ | ------------- |
// | `var`   | Function/global | Haan (undefined se init) | ✅ haan             | ✅ haan        |
// | `let`   | Block (`{}`)    | Haan (TDZ tak dead zone) | ✅ haan             | ❌ nahi        |
// | `const` | Block (`{}`)    | Haan (TDZ)               | ❌ nahi (must init) | ❌ nahi        |

// var: Purana tareeqa JS ka. Function-scoped, hoisted, reassign aur redeclare dono ho sakte.
// let: Block-scoped, hoisted lekin temporal dead zone mein, reassign hota lekin redeclare nahi hota.
// const: Block-scoped, must initialize karna, reassign nahi ho sakta. (Magar object ke andar values mutate ho sakti hain.)




// 123321234 //This is the data type Number
// "32424324"//This is the data type String
// true false//This is the data type Boolean
let num: number = 123321234;
let str: string = "32424324";
let bool: boolean = true;

// var data1 = "jojo";
// console.log(data1);
// var data1 = "jojo2";
// console.log(data1);

// var data1 = "jojo";
// console.log(data1);
// data1 = "jojo2";
// console.log(data1);

// var data2;
// console.log(data2);
// data2 = "jojo2";
// console.log(data2);


// Comment:
// Duplicate let same scope mein → Error: “Cannot redeclare block‑scoped variable ‘data1’.”
// TS safety feature.
// let data1;
// let data1;



// let data1: string = "sdfsd";
// data1 = "Ilyas";
// console.log(data1);

// const NAME: string = "SHOP EASY";
