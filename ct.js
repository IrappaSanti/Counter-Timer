let entry = document.getElementById("Entry");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let time=document.getElementById("timeCount");

function cEntry() {
    button1.classList.remove("d-none");
    entry.classList.add("d-none");
}
function tEntry() {
    button2.classList.remove("d-none");
    entry.classList.add("d-none");
}
function cPart() {
    button1.classList.add("d-none");
}

function tPart() {
    button1.classList.remove("d-none");
}

function decrease() {
    let prev = document.getElementById("count").textContent;
    let updated = parseInt(prev) - 1;
    document.getElementById("count").textContent = updated;
    if (updated < 0) {
        document.getElementById("count").style.color = "red";
    } else if (updated > 0) {
        document.getElementById("count").style.color = "green";
    } else {
        document.getElementById("count").style.color = "black";
    }
}

function increase() {
    let prev = document.getElementById("count").textContent;
    let updated = parseInt(prev) + 1;
    document.getElementById("count").textContent = updated;
    if (updated < 0) {
        document.getElementById("count").style.color = "red";
    } else if (updated > 0) {
        document.getElementById("count").style.color = "green";
    } else {
        document.getElementById("count").style.color = "black";
    }
}

function reset() {
    let updated = 0;
    document.getElementById("count").textContent = updated;
    if (updated < 0) {
        document.getElementById("count").style.color = "red";
    } else if (updated > 0) {
        document.getElementById("count").style.color = "green";
    } else {
        document.getElementById("count").style.color = "black";
    }
}

let c=0;
let d;
function startTimer(){
    d=setInterval(function(){
        c+=1;
        time.textContent=c;
    },1000);
    
}
function stopTimer(){
    clearInterval(d);
}
function resetTimer(){
    c=0;
    clearInterval(d);
    time.textContent=0;
}

let backBtn=document.getElementById("back");
function back(){
    entry.classList.remove("d-none");
    button1.classList.add("d-none");
    button2.classList.add("d-none");
}
