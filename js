//Class 17 examples 
// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let faveHoliday = 'Halloween'
console.log(faveHoliday.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = ' Cam loves Cali and Itzel'

alert(str.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function takeFive(n1,n2,n3,n4,n5){
    let dif = n1 - n2 - n3 - n4 - n5
    alert(Math.abs(dif -100))
}


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowHigh(n1,n2,n3){
console.log(`The lowest is ${Math.min(n1,n2,n3)} and the highest is ${Math.max(n1,n2,n3)}`)
}


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsTails(){
    
let random = Math.randomm()
if ( random <= 0.5){
    return 'heads'
}else {
    return 'tails'
}


    }
    // Bonus do solution as a Ternary 
    function headOrTails(){
        return Math.random() <= .5 ? 'Heads':'Tails'
    }


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flipFlip(nums){
    let result = Math.random()

    for ( let i = 0 ; i<= nums; i++){
       let results = headOrTails()
       console.log(results)
        }
    
}

flipFlip(10)


function rockPaperScissors(){
  let result = Math.random()
  if (result < 0.33){
    return 'rock'
  }  else if (result < 0.66){
    return 'paper'
  }else {
    return 'scissors'
  }
}



function threeWayBattle(nums){

for ( let i = 0 ; i<=nums;i++){
    let results =rockPaperScissors()
    console.log(results)

}
}

threeWayBattle(5)


//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let currentShows = ['Big Brother', 'Survivor', 'Backyardagans']

currentShows.forEach((show,i)=>

console.log(show,i)

)

//Create and array of numbers

let num = [10, 18, 15 ,99,28]
//Return a new array of numbers that includes every even number from the previous Arrays

function onlyEvens (arr){
    return arr.filter(num =>num % 2 === 0 )

}

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondLowAndHigh(arr){
  let sorted = arr.sort((a,b=> a - b)) 
  alert(sorted[1] + sorted [sorted.length - 2]) 
}

