$(function() {

   function getTest() {
   //待验证字符串
   var str = '<div>我是{{name}},今年{{age}}岁了</div>'
   var zz =/{{\s*([a-zA-Z]+)\s*}}/
   var data = { name: 'lzl', age: 3 }

   var res= null
   //把replace与循环相结合
   while(res = zz.exec(str)) {
      //res[0]指的是{{name}}；res[1]指的是name
     str = str.replace(res[0],data[res[1]])
   }
   console.log(str)
   }

   getTest()
})

