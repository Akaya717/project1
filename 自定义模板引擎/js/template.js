$(function() {
    //调用模板引擎
    //定义数据
    var data = {name:'lzl',age:3,gender:'男',address:'东土大唐'}
    //调用模板引擎
    var htmlStr = template('tpl-user',data)
    //渲染HTML结构
    document.getElementById('user-box').innerHTML = htmlStr


    //第一个是参数模板的id,第二个参数是数据
    function template(id, data) {
        //获取到模板id的HTML
        var str =document.getElementById(id).innerHTML
        //正则表达式：获取到{{}}里面的字符串
        var zz = /{{\s*([a-zA-Z]+)\s*}}/
        //定义个空的匹配结果
        var res = null
        //循环匹配
        while(res = zz.exec(str)) {
            //替换真实数据为模板内容
            str = str.replace(res[0],data[res[1]])
        }
        //返回替换后的字符串
        return str
    }
})