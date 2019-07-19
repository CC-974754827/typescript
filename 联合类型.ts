// 联合类型可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
var val:string|number 
val = 12 
console.log("数字为 "+ val); 
val = "Runoob" 
console.log("字符串为 " + val);

//将联合类型作为函数参数
function disp(name:string|string[]) { 
    if(typeof name == "string") { 
            console.log(name) 
    } else { 
            var i; 
            for(i = 0;i<name.length;i++) { 
            console.log(name[i])
            } 
    } 
} 
disp("Runoob") 
console.log("输出数组....") 
disp(["Runoob","Google","Taobao","Facebook"])