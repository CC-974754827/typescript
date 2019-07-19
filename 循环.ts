//for
var num:number = 5; 
var i:number; 
var factorial = 1; 
 
for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial);

//for...in
var j:any; 
var n:any = "a b c" 
 
for(j in n) {
    console.log(n[j])  
}

//for...of
let someArray = [1, "string", false];
 
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

//forEach
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});

//while
var num:number = 5; 
var factorial:number = 1; 
 
while(num >=1) { 
    factorial = factorial * num; 
    num--; 
} 
console.log("5 的阶乘为："+factorial);

//do...while
var a:number = 10;
do { 
    console.log(a); 
    a--; 
} while(a>=0);
