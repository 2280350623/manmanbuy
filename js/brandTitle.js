$(function () {
    // 一级分类
    renderFirst()
    function renderFirst() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getbrandtitle',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                // 模板引擎
                $('.brandTitle>ul').html(template('tpl_1', info));
            }
        })
    }

    // 点击跳转
    $('.brandTitle>ul').on('click','li',function(){
        // console.log(1);
        var id=$(this).data('id');
        // var name=$(this).text();
        location.href='brandProducts.html?brandtitleId='+id;
    })
})

