// Q 1

setTimeout(() => {
    const h1 = document.querySelector(`h1`);
    const p1 = document.createElement(`p`);
    h1.innerText = `first`
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

//  const clock = document.getElementById(`countdown`);
//  const pcd = document.createElement(`p`);
//  let num = 20
 

 
//  const timer = setInterval(() => {
//      if (num > 0){
//          console.log(num);

//      } else {
//          console.log(num);
//          clearInterval(timer);
         
//      } 

//         clock.innerText = 'This is done'
     
//      num--;
//      const minutes = Math.floor((num % (1000 * 60 * 60)) / (1000 * 60));
//  const seconds = Math.floor((num % (1000 * 60)) / 1000);
//      clock.innerText=`${num}`;
//  },1000);














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