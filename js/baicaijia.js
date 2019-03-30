$(function () {
    var id=0;
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.navbar ul').html(template('tpl_1', info));
            var w = 10;
            $('.navbar ul li').each((i, v)=>{
                w += $('.navbar ul li').eq(i).outerWidth()
            });
            $('.navbar ul').width(w)
            new IScroll('.navbar', {
                scrollX: true
            })
        }
    });
    // 点击事件
    $('.navbar').on('click', 'a', function () {
        $(this).css('border-bottom', '.04rem /* 3/75 */ solid #d90000').parent().siblings().children().css('border-bottom', 'none');
        id=+$(this).data('id');
        console.log(id);
        pros(id);
    })
    pros(id);
    function pros(id){
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data:{
                titleid:id
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $('.bc_main ul.cont').html(template('tpl_2',info))
            }
        })
    }
})