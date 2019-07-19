var global_num = 12;  //全局变量
class Numbers{
    num_val = 13;   //类变量
    static sval = 10;   //静态变量

    storeNum():void{
        var local_num = 14; //局部变量
    }
}
console.log("全局变量为："+global_num);
console.log(Numbers.sval);//静态变量
var obj = new Numbers();
console.log("类变量："+obj.num_val);