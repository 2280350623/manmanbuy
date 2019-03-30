
$(function(){
    // 请求菜单栏
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function(info){
            // console.log(info);
            $('ul.menu').html(template('tpl_1',info));
        }
    })

    function product(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            dataType:'json',
            success: function(info){
                $('ul.products').html(template('tpl_2',info))
            }
        })
    }
    product();

    // 点击事件
    $('ul.menu').on('click','[data-id=7]',function(){
        // console.log(1);
        $(this).parent().parent().toggleClass('now');
    })
})