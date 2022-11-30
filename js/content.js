//获取评论列表
function getContent(){
    $.ajax({
        method:'get',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function (res) {
            // console.log(res)
            //判断是否请求成功
            if (res.status !== 200)
                return alert('获取评论列表失败')
            //拿到数据里面的数组
            var rows = []
            //循环操作dom
            $.each(res.data,function(i,item){

                // var str ='<li class="list-group-item"><span class="badge" style="background-color:  lightcoral;">评论时间:' + item.time + '</span><span class="badge" style="background-color: lightgreen;">评论人:' + item.username + '</span>' + item.content + '</li>'

                //模板引擎相比字符串型更好阅读维护，不容易出错
                //模板引擎是根据程序员指定的模板引擎和数据，自动生成完整的动态html
                

              //添加数组元素到数组当中
               rows.push(str)
            })
            //把dom添加到我们的页面当中
            $('#ulcontent').empty().append(rows.join(''))
        }
    })
}
//调用下获取列表的方法
getContent()
$(function(){
    //阻止表单的默认提交行为
    $('#f1').submit(function(e){
        //阻止表单自己提交
        e.preventDefault()
        //获取表单的数据
        var data = $(this).serialize()
        //将数据发送到服务端
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            //根据回调的结果，判断是否添加成功
            if(res.status !== 201){
                return alert('发表评论失败')
            }
            //成功添加后，刷新评论列表
            getContent()
            $('#f1')[0].reset()
        })
    })

    
})