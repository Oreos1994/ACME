// function convertSeconds(s) {
//   let min = floor(s / 60);
//   let sec = s % 60;
//   return nf(min, 2) + ':' + nf(sec, 2);
// }

// let ding;

// function preload() {
//   ding = loadSound('explosion.wav');
// }


// Drop down menu JS//
const menu = document.querySelector("#menu")

menu.addEventListener('click', function(e){
    e.preventDefault()

    const sub = e.target.parentElement.children[1]

    if (sub.classList.contains('show')) {
        sub.classList.remove('show')
    } else {
        sub.classList.add('show')
    }
})





var start = 100;
var end = 1000;
let val;

val = Math.floor(Math.random() * 1000 + 1);

console.log(val);


function range(start, end) {
    var ans = [];
    for (let i = 100; i <= 999; i--) {
        ans.push(i);
    }
    return ans;
}

function bomb(){
    let timer = document.getElementById('timer');

    timer.innerHTML= end - start;

    function timeIt(){
        start++;
    timer.innerHTML= end - start;
    }

    setInterval(timeIt, 1000);
}

bomb();


// 




  


