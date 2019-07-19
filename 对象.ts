var object_name = { 
    key1: "value1", // 标量
    key2: "value",  
    key3: function() {
        // 函数
    }, 
    key4:["content1", "content2"] //集合
}
object_name.key3 = function(){
    console.log("function");
}
object_name.key3();

// 动态类型
interface IPoint { 
    x:number 
    y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
// 错误 
// var newPoint2 = addPoints({x:1},{x:4,y:3})