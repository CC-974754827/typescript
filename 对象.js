var object_name = {
    key1: "value1",
    key2: "value",
    key3: function () {
        // 函数
    },
    key4: ["content1", "content2"] //集合
};
object_name.key3 = function () {
    console.log("function");
};
object_name.key3();
