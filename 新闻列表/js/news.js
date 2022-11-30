$(function(){
    //事件过滤器（时间）
    template.defaults.imports.dateFomat = function (date) {
        //将字符串的时间转换为时间类型的对象
        var newdate = new Date(date)
        //要操作的内容
        var y = newdate.getFullYear() //获取年
        var m = newdate.getMonth() + 1//获取月
        var d = newdate.getDate()//获取日
        var h = newdate.getHours()//获取小时
        var i = newdate.getMinutes()//获取分钟
        var s = newdate.getSeconds()//获取秒数
        //要返回的值
        return y + '-' + m + '-' + d + '&nbsp;&nbsp;&nbsp;' + h +':' + i + ':' + s
    }
    //2.获取新闻的数据
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function (res) {
            //判断是否请求成功
            if(res.status !== 200) 
            return alert('新闻请求失败了')
            for(var i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags.split(',')
            }
            console.log(res)
            //4.调用模板的方法
            var htmlStr = template('tpl-news',res)
            $('#news-list').html(htmlStr)
        })
        
    }
    getNewsList()
})