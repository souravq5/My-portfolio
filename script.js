const text = [
"Computer Operator",
"Data Entry Operator",
"Office Assistant",
"Web Learner"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = text[i];

if(!isDeleting){
document.getElementById("typing").innerHTML =
current.substring(0,j++);
}else{
document.getElementById("typing").innerHTML =
current.substring(0,j--);
}

if(j === current.length+1){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(j === 0){
isDeleting = false;
i++;
if(i === text.length) i = 0;
}

setTimeout(type,isDeleting?50:120);
}

type();