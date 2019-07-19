var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//用于标识方法返回值的类型，表示该方法没有返回值。
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("run");
    };
    return Site;
}());
var obj = new Site();
obj.name();
// 创建类的数据成员
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log(this.engine);
    };
    return Car;
}());
var objs = new Car("sss");
console.log(objs.engine);
objs.disp();
// 类的继承
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp2 = function () {
        console.log("圆的面积:  " + this.Area);
    };
    return Circle;
}(Shape));
var obj2 = new Circle(223);
obj2.disp2();
//  不支持继承多个类，但支持多重继承
// class Child extends Root {} 
// class Leaf extends Child {} 
// 继承类的方法重写
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    return StringPrinter;
}(PrinterClass));
//  instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj3 = new Person();
var isPerson = obj3 instanceof Person;
console.log("obj3 对象是 Person 类实例化来的吗？ " + isPerson);
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj4 = new AgriLoan(10, 1);
console.log("利润为 : " + obj4.interest + "，抽成为 : " + obj4.rebate);
