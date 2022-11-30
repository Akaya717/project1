     $(function(){
        // 初始化右侧滚动条
        // 这个方法定义在scroll.js中
        resetui()

    //绑定一个发送按钮的点击事件，将文本框的内容渲染到聊天框中
      $('#btnSend').on('click',function(){
        //拿到文本框里面的值
        var text = $('#textpt').val().trim()
        // console.log(text)
        //判断值是否长度小于或者等于0
        if (text.length<=0) {
            return $('#textpt').val('')
        }
     //将text的值追加到聊天窗口当中
      $('#talk_list').append(
       '<li class="right_word"><img src="img/person02.png"></img><span>' + text + '</span></li>'
      )
      //清空输入框内容
      $('#textpt').val('')
      //重置滚动条
      resetui()
      getMsg(text)
      })
      //将消息发送到接口请求回复消息
     function getMsg(text){
        $.ajax({
            method:'GET',
            url:'http://www.liulongbin.top:3006/api/robot',
            data:{
                spoken:text
            },
            success:function(res){
                // console.log(res)
                var msg = res.data.info.text
                $('#talk_list').append('<li class="left_word"><img src="img/person01.png"></img><span>' + msg + '</span></li>')
                //清空输入框内容
                $('#textpt').val('')
                //重置滚动条
                resetui()
                //将请求回来的消息转换为语音消息
                getVoice(msg)
            }
            

        })
     }
     //发送消息，将消息转为语音消息
     function getVoice(msg) {
         $.ajax({
             method: 'GET',
             url:'http://www.liulongbin.top:3006/api/synthesize',
             data:{
                text: msg
                },
            success: function (res) {
                if (res.status === 200) {
                    //将得到的语言消息追加audio,让音频自动播放
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }
    //给键盘绑定一个事件
    $('#textpt').on('keyup',function(e){
        if(e.keyCode === 13) {
            $('#btnSend').click()
        }
    })
    
    
})