var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var sites = new Array("Google", "Runoob", "Taobao", "Facebook");
for (var i = 0; i < sites.length; i++) {
    console.log(sites[i]);
}
// 解构
var arr = [12, 13];
var x = arr[0], y = arr[1]; // 将数组的两个元素赋值给变量 x 和 y
console.log(x);
console.log(y);
// for 语句来循环输出数组的各个元素
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
// 作为参数传递给函数
var sites = new Array("Google", "Runoob", "Taobao", "Facebook");
function disp(arr_sites) {
    for (var i = 0; i < arr_sites.length; i++) {
        console.log(arr_sites[i]);
    }
}
disp(sites);
// 作为函数的返回值
function disp1() {
    return new Array("Google", "Runoob", "Taobao", "Facebook");
}
var sites = disp1();
for (var a in sites) {
    console.log(sites[a]);
}
