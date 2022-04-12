// Q 1

setTimeout(() => {
    const h1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    h1.innerText = `Hi`
    h1.append(p1)
}, 1000);


// Q2

setTimeout(() => {
    const h2 = document.getElementById(`timeout-nesting`);
    const p2 = document.createElement(`p`);
    h2.innerText =`One`;

    setTimeout(() => {
        const h3 = document.createElement(`p`);
        h3.innerText = `Two`;
        h2.append(h3);
    }, 1000);
}, 2000);


// Q 3a
let countUp = 1;

let counter = setInterval(() => {
  console.log(countUp);
  countUp++;

  
}, 1000);

const end = document.querySelector(`button`);

 end.addEventListener(`click`, () => {
   clearInterval(counter);
   
 });

 //! Bonus

 // Q4


const startMin = 2;
let time = startMin * 60;

let countdownEvent = document.querySelector(`#countdown`);


let timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;

    seconds = seconds < 10 ? `0` + seconds : seconds;

    countdownEvent.innerHTML = `${minutes}:${seconds}`;
    
        time--;
    if (time === 0){

        countdownEvent.innerHTML = `TIME IS UP!`
        
        clearInterval(timer);
    };
}

//! reference https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

//! and https://www.codegrepper.com/code-examples/javascript/javascript+countdown+timer+minutes%2C+seconds









// window.onload = function() {

//     const minute = 2;
//     const sec = 60;
//     setInterval(function() {
//       document.getElementById("countdown").innerHTML = minute + " : " + sec;
//       sec--;
//       if (sec == 00) {
//         minute --;
//         sec = 60;
//         if (minute == 0) {
//           minute = 2;
//         }
//       }
//     }, 1000);
//   }
 

//  clock.innerText('${num}')