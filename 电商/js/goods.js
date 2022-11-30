$(function(){
    //2.获取数据
    function getNewsList() {
        $.get('http://114.132.65.169/api/goods', function (res) {
            //if(res.status !== 200) 
            // return alert('数据请求失败了')
            // for(var i = 0; i < res.data.length; i++) {
            //     res.data[i].tags = res.data[i].tags.split(',')
            // }
            console.log(res)
            //调用模板的方法
            var htmlStr = template('lb-Goods',res)
            $('#goods-list').html(htmlStr)
        })
        
    }
    getNewsList()
})