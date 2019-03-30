
$(function(){
    // 请求菜单栏
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getsitenav',
        dataType:'json',
        success:function(info){
            console.log(info);
            $('ul.nav').html(template('tpl_1',info));
        }
    })
})