/**
 * 
 * @param {data}需要发送到服务器的数据
 * @return {str} 需要拼接后返回的数据字符串
 */
function reData(data) {
    //定义一个空数组
    var att = []
    //用循环读取data里面的参数值，并保存到数组当中
    for(var k in data ){
        att.push(k + '=' + data[k])//k=data[k] age = 20
    }
    return att.join('&')
}
/**
 * 
 */
 function myajax(options) {
    //创建一个xhr对象作数据请求
    var xhr = new XMLHttpRequest()
    //调用拼接参数的函数，完成参数拼接
    var qs = reData(options.data)
    //判断请求类型
    if(options.method.toUpperCase() === 'GET') {
    //open
    xhr.open(options.method,options.url+ '?' + qs)
    //send
    xhr.send()
    }else if(options.method.toUpperCase() === 'POST') {
    xhr.open(options.method,options.url)
    xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded')
    xhr.send(qs)
    }
    
    //拿到监听事件
     xhr.onreadystatechange = function() {
     if(xhr.readyState === 4 & xhr.status === 200) {
     var res = JSON.parse(xhr.responseText)
     options.success(res)
     }
     }
    
    }