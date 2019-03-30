$(function () {
    // 一级分类
    renderFirst()
    function renderFirst() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcategorytitle',
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                // 模板引擎
                $('.category>ul').html(template('tpl_1', info));
            }
        })
    }

    // 点击渲染
    $('.category>ul').on('click','li.menu',function(){
        // console.log(1);
        $(this).find('.btn').toggleClass('fa-chevron-down')
        var id=$(this).data('id');
        var that=this;
        // console.log(id);
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcategory',
            data: {
                titleid: id
            },
            success: function (info) {
                console.log(info);
                // 模板引擎
                $(that).find('.list').html(template('tpl_2', info))
            }
        })
        $(that).find('.list').stop().toggle()
    })

    // 点击跳转
    $('.category>ul').on('click','a.btn',function(){
        // console.log(1);
        var id=$(this).data('id');
        // var name=$(this).text();
        location.href='products.html?categoryId='+id;
    })
})

