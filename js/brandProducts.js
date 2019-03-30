$(function () {
    // 一级分类
    var id = location.search;
    id = id.split('=')[1];
    // id=+id.substring(0,1);
    console.log(id);
    second(id)
    function second(id) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getbrand',
            data:{
                brandtitleid:id
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $('ul.list').html(template('tpl_1',info))
            }
        })
    }

    function product(id, pages) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getbrandproductlist',
            data: {
                brandtitleid: id,
                pagesize: pages
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $('ul.products').html(template('tpl_2', info));
            }
        })
    }
    product(id, 4);

    // 点击跳转
    $('ul.products').on('click','li',function(){
        var id=$(this).data('id');
        var num=$(this).data('num');
        var name=$(this).data('name');
        var speak=$(this).find('.time').text();
        location.href='detail.html?categoryId='+id+'products_'+num+'detailName+'+name+'?speak-'+speak;
    })
})

