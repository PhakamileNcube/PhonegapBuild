
//localStorage.clear();
console.log(localStorage);
 
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
//console.log(new Date(y, m, d));
 
/*
localStorage.removeItem(""+new Date(y, m, 24)+"");
localStorage.removeItem(""+new Date(y, m, 25)+"");
localStorage.removeItem(""+new Date(y, m, 26)+"");
localStorage.setItem(""+new Date(y, m, 17)+"",[3,2]);
localStorage.setItem(""+new Date(y, m, 18)+"",[3,2]);
localStorage.setItem(""+new Date(y, m, 19)+"",[3,2]);
 */

for(i = 0; i < 7; i++){
var parsed = parseInt(d + i);
var theDate = new Date(y, m, parsed);
var minus = parsed - parsed;
if(minus == 1){
//console.log(new Date(theDate));
}
//localStorage.setItem(""+theDate+"",[1,2]);

 
} 

var getI = [];
var todayDate = new Date(y, m, d);
for(i = 0; i < 7; i++){
var theKey = (new Date(localStorage.key(i)));
if(todayDate <= theKey){
//console.log(new Date(localStorage.key(i)) + "a "+ i +"");
}else{
//console.log(new Date(localStorage.key(i)) + "b "+ i +"");
getI.push(i);
//localStorage.removeItem(new Date(localStorage.key(i)));
//localStorage.setItem(""+new Date(localStorage.key(i))+"",[9,0]);
}
}

 
var e = todayDate.getDate();
var u = e + 6;
var r = new Date(y, m, u);
var t = getI.length;


/* new code begins here  
*/
//console.log(localStorage.length);

for(i = 0; i < localStorage.length; i++){
if(new Date(localStorage.key(i)) < todayDate){
//localStorage.removeItem(localStorage.key(i));
}

var changing = new Date(localStorage.key(i)).getDate();
var leastDate = todayDate.getDate();
var ax = leastDate + 1;
var bx = leastDate + 2;
var cx = leastDate + 3;
var dx = leastDate + 4;
var ex = leastDate + 5;
var fx = leastDate + 6;
var gx = leastDate + 7;

switch(changing){
case ax :
console.log("first one");
break;
case bx :
console.log("first two");
break;
case cx :
console.log("first third");
break;
case dx :
console.log("first fourth");
break;
case ex :
console.log("first fife");
break;
case fx :
console.log("first six");
break;
case gx :
console.log("first seven");
break;
} 


//console.log(ax +" huku "+ bx +" huku "+ cx +" huku "+dx +" huku "+ex +" huku "+fx +" huku "+gx +" huku ");
//localStorage.setItem(""+new Date(y, m , u + i)+"",[0,2]);


}

 
for(i = 0; i < getI.length; i++){
var dome = getI[i];
var changeDate  = new Date(localStorage.key(dome));
///console.log(changeDate.getDate());
if(todayDate > changeDate ){
//console.log("huku" + dome);
}

}
 


for(i = 1; i < getI.length + 1; i++){

//localStorage.setItem(""+new Date(y, m , u + i)+"",[0,2]);
//console.log(""+new Date(y, m , u + i)+"",[0,2]);
}

 /*
new code here ends */


//console.log(getI[i]);
 

//console.log(localStorage);
var setDate = new Date(2018, 11, 9);
var magni = localStorage.key(6);
//console.log(magni);

/*
localStorage.clear();
console.log(localStorage);

localStorage.setItem(""+ y+","+m+","+d+"",[1,3]);
var result = localStorage.getItem(""+ y+"/"+m+"/"+d+"");

var reverse = d -1;
var summerBaby = localStorage.key(0);
var today = ""+ y+"/"+m+"/"+ reverse +"";
var neD = new Date(summerBaby);
var laT = new Date(today);

if(neD => laT){
alert("summerBaby");
}else{
alert("summerOppo");
}
 
*/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
