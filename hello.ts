//字符串
var message:string = "hello world";
console.log(message);

var years:number = 2;
var words:string = `this year is ${years}`;

//数组
let arr1:number[] = [1,2];
let arr2:Array<number> = [1,2];

//元组  数组中元素的数据类型都是相同的，如果存储的元素数据类型不同，则需要使用元组
let f: [string,number];
f = ['run',1];
console.log(f[0]);

//枚举
enum Color{Red,Blue};
let c: Color = Color.Blue;
console.log(c);     //1

//Any类型：任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型
//1、变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查，示例代码如下：
let s: any = 1;    // 数字类型
s = 'I am who I am';    // 字符串类型
s = false;    // 布尔类型
//改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例代码如下：
let b: any = 4;
b.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
b.toFixed();    // 正确
//定义存储各种类型数据的数组时，示例代码如下：
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;

