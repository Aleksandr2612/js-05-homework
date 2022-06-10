// №1


// function isMozartHere(str) {
//     let result = str.trim();
//     console.log(result);
//     return result = str.includes("Mozart");
// };
// let result = isMozartHere("London hello serhio Mozart aguerro");
// console.log(result);


//№2
// function showUpperCaseLetter(str) {
//     if (!str) return str;
//     return newStr = str[0].toUpperCase() + str.slice(1);


// };
// console.log(showUpperCaseLetter("kristiano"));



// №3 
// let arr = ["One", "Two", "Six", "Ten"];
// console.log(arr.length);
// console.log(arr[2], arr[3]);


// №4 
// let javaScriptTypes = ["number", "null", "undefined", "string"];
// console.log(javaScriptTypes);
// javaScriptTypes.push("boolean", "symbol", "bigit", "object");
// console.log(javaScriptTypes);

// №5 
// let subString = "451 градус по Фаренгейту";
// let result1 = subString.length;
// console.log(result1);
// let str = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";
// let result3 = str.indexOf(subString, 0);
// console.log(result3);
// let result4 = str.substring(124, 148);
// console.log(result4);

// №6

// function getRandom(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log("Рандомное число:", getRandom(100));


//№7

// let newStr = "Я учу JavaScript очень мало";
// newString = newStr.replace("мало", "много");
// console.log(newString);

//№8 
// let str = "Дорогой, а вдруг он потеряется?";

// function viewString(firstArg, secondArg) {

//     let result = str.indexOf(firstArg, 0);
//     let result2 = str.indexOf(secondArg, 0);
//     if (result !== -1) {
//         console.log('Строка содержт подстроку:', firstArg);

//     } else console.log("Строка не содержит данную подстроку");
//     // return result;
//     if (result2 !== -1) {
//         console.log('Строка содержт подстроку:', secondArg);
//     } else console.log("Строка не содержит данную подстроку");
//     return result;

// };
// let hiStr = viewString("вдруг", "вместе");
// console.log(hiStr);


//№9 

// let arr = ["red", "blue", "black", "orange"];
// console.log(arr);
// delete arr[0];
// console.log(arr);
// arr.splice(-1, 1);
// console.log(arr);
// arr.push('green');
// console.log(arr);
// arr.unshift('red');
// console.log(arr);