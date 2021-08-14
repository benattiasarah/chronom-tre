let chrono=document.querySelector(".chrono")
let counter=0
let l


function incrementer(){
    counter++;
	let seconds = String(counter%60+100);
	let minutes = String(counter/60+100);
	chrono.innerHTML=minutes[1]+minutes[2]+" : "+seconds[1]+seconds[2];
    } 
    
function start(){
    l=setInterval(incrementer,1000);
}

function stop(){
    clearInterval(l);
}

function reset(){
    counter=0;
    chrono.innerHTML="00 : 00";
    clearInterval(l);
}

