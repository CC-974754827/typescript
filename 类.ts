//用于标识方法返回值的类型，表示该方法没有返回值。
class Site{
    name():void{
        console.log("run");
    }
}
var obj = new Site();
obj.name();

// 创建类的数据成员
class Car{
    // 字段
    engine: string;
    // 构造函数
    constructor(engine:string){
        this.engine = engine;
    }
    // 方法
    disp():void{
        console.log(this.engine);
    }
}
var objs = new Car("sss");
console.log(objs.engine);
objs.disp();

// 类的继承
class Shape { 
    Area:number;
    constructor(a:number) { 
       this.Area = a;
    } 
 } 
  
 class Circle extends Shape { 
    disp2():void { 
       console.log("圆的面积:  "+this.Area);
    } 
 }
 var obj2 = new Circle(223); 
 obj2.disp2();
//  不支持继承多个类，但支持多重继承
// class Child extends Root {} 
// class Leaf extends Child {} 

// 继承类的方法重写
class PrinterClass { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
 } 
  
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    } 
 }


//  instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
class Person{ } 
var obj3 = new Person() 
var isPerson = obj3 instanceof Person; 
console.log("obj3 对象是 Person 类实例化来的吗？ " + isPerson);

/*
public（默认） : 公有，可以在任何地方被访问。
protected : 受保护，可以被其自身以及其子类和父类访问。
private : 私有，只能被其定义所在的类访问。*/


// 类可以实现接口
interface ILoan { 
    interest:number 
 } 
  
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
  
 var obj4 = new AgriLoan(10,1) 
 console.log("利润为 : "+obj4.interest+"，抽成为 : "+obj4.rebate );

 
