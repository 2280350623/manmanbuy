$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcoupon',
        dataType:'json',
        success:function(info){
            console.log(info);
            $('.cou_cont').html(template('tpl_1',info))
        }
    })

    // 点击事件
    $('.cou_cont').on('click','li',function(){
        var id=$(this).data('id');
        var href=$(this).data('href');
        location.href=href+'?'+id;
    })
})