//有返回值
function greet() {
    return "hello";
}
function caller() {
    var msg = greet();
    console.log(msg);
}
caller();
//带参数
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
//可选参数 ？
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // 正确
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
//默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//剩余参数
function buildNames(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildNames("Joseph", "Samuel", "Lucas", "MacKinzie");
//构造函数
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
//递归
function factorial(number) {
    if (number <= 0) { // 停止执行
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // 调用自身
    }
}
;
console.log(factorial(6)); // 输出 720
//lambda函数  箭头函数
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //输出结果为 110
var foo2 = function (x) {
    x = 10 + x;
    console.log(x);
};
foo2(100);
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
