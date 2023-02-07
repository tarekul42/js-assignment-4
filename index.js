// First problem
/* 
mindGame
*/


// assignment practice problem solution one 

/* write this function about javascript operation . javascript operation is test here */

// function mindGame(number){
//     let number1 = number * 3;
//     let number2 = number1 + 10;
//     let number3 = number2 / 2;
//     let number4 = number3 - 5;
//     return number4;
// }
// // mindGame();
// console.log(mindGame(5));
                            //          RIGHT 
function mindGame(number){
    if(typeof number != 'number'){
        return "Error! Please, Enter a valid Number"
    }
    let number1 = number * 3;
    let number2 = number1 + 10;
    let number3 = number2 / 2;
    let number4 = number3 - 5;
    return number4;
}
// mindGame();
console.log(mindGame(5));


// function MindGame(number){
//     let numbers = number*3+10/2-5;
//     return numbers;
// }
// console.log(MindGame(5));

// assignment practice problem solution two

/* write this funtion for cheak javascript code conditions .  */

                                     //         right 
function evenOdd(string){
    if(typeof string != 'string'){
        return "Error! Please, Enter a valid string"
    }

    let evenOdd =  string.length;
  
    if(evenOdd % 2 == 0){
      return "Even"
    }
    else if(evenOdd % 2 != 0){
       return "odd"
     }
};
let string = evenOdd("abu Sayed");
console.log(string);
                            //   edited

// function evenOdd(inputString){

//     let evenOdd =  inputString.length;

//     let inputType = typeof(inputString);

//     if(inputType == String == true){
//         if(evenOdd % 2 == 0){
//             return "Even"
//         }
//         else if(evenOdd % 2 != 0){
//             return "odd"
//         }
//     }
//     else{
//         return "Please , Enter a valid number"
//     }
// };
// let tring = evenOdd("h");
// console.log(tring);

// function evenOdd(inputString){
//     let evenOdd = inputString.length;
//     // if(typeof(inputString) != String){
//     if(evenOdd % 2 == 0){
//         // return "Please, Enter a string"
//         return "even"
//     }
//     // else if(evenOdd % 2 == 0){

//     else if(typeof(inputString) != String){
//         // return "even"
//         return "Please, Enter a string"
//     }
//     else{
//         return "odd"
//     }
// }
// // evenOdd();
// console.log(evenOdd("hlw"));




// assignment practice problem solution three

/* write this funtion for cheak javascript code conditions .  */


                                                //                    right 

function isLGSeven(mainNumber){
    if(typeof mainNumber != 'number'){
        return "Error! Please, Enter a valid string"
    }
    let number = mainNumber - 7;
    if(number < 7){
        return number;
    }
    else if(number >= 7){
        return mainNumber*2;
    }
}
console.log(isLGSeven(90));



                                                        //              right 

// assignment practice problem solution four

/* write this funtion for cheak javascript code conditions .  */
function findingBadData(dataStore){
    if(typeof dataStore != 'object'){
        return "Error! Please, Enter a valid object"
    }
    let bad_Data = [];
    for(let i=0; i<dataStore.length; i++){
        let data = dataStore[i];
        if(data <= 0){
            bad_Data.push(data);
        }
    }
    return bad_Data.length;
}
let myArray = findingBadData([30, 0, -9, 40, 50, -7, -4]);
console.log(myArray);


/* function positive(numbers){
    let positiveNumber = [];
    for(let i=0; i<numbers.length; i++){
        let number = numbers[i];
        if(number > 0){
            positiveNumber.push(number)
        }
        else{
            break;
        };
    };
    return positiveNumber;
}
var myArray = positive([90, 92, 07, -2, 78, 67, 13])
console.log(myArray) */



                                                                //  right
// assignment practice problem solution four
/* write this funtion for cheak javascript code conditions . Here used variables, conditionals, operations, and multi perameters*/
function gemsToDiamond(number1, number2, number3){
    if(typeof number1 != 'number' || typeof number2 != 'number' || typeof number3 != 'number'){
        return "Error! Please, Enter a valid number"
    }
    let firstFriend = number1 * 21;
    let secondFriend = number2 * 32;
    let thirdFriend = number3 * 43;
    let totalDiamond = firstFriend + secondFriend + thirdFriend;
    let double = 1000*2;
    if(totalDiamond > double){
        let extraDiamond = totalDiamond - 2000;
        return extraDiamond;
    }
    return totalDiamond;
};
let MyArray = gemsToDiamond(20, 200, 50)
console.log(MyArray)

