$(function () {
    // 面包屑导航
    var pages = 1;
    var pageMax = 1;
    var arr=[];
    var id = location.search;
    id = id.split('=')[1];
    // id=+id.substring(0,1);
    // console.log(id);
    nav(id)
    function nav(id) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcategorybyid',
            data: {
                categoryid: id,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $('ul.nav').html(template('tpl_1', info));
            }
        })
    }
    function product(id, pages) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid: id,
                pageid: pages
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $('ul.products').html(template('tpl_2', info));
                pageMax = Math.ceil(info.totalCount / info.pagesize);
                // console.log(pageMax);
                if(arr.length<pageMax){
                    for ( var i = 0 ; i < pageMax; i++) {
                        var txt = '<option class="options" value="'+ (i+1) + '">' + (i+1) + '/' + pageMax + '</option>';
                        arr.push(txt);
                    }
                    $('#sel').html(arr);
                }
            }
        })
    }
    product(id, 1);


    // 点击事件
    $('.pagination').on('click', '.next', function () {
        // console.log(1);
        pages++;
        if (pages > pageMax) {
            pages = pageMax;
        }
        product(id, pages);
        // console.log($('#sel').children().eq(1));
        $('#sel').children().eq(pages-1).prop('selected','selected')
    })
    $('.pagination').on('click', '.prev', function () {
        // console.log(1);
        pages--;
        if (pages < 1) {
            pages = 1;
        }
        product(id, pages);
        $('#sel').children().eq(pages-1).prop('selected','selected')
    })
    // 下拉框 change 事件
    $('#sel').on('change',function(){
        // console.log($(this).val());
        pages=+$(this).val();
        product(id,pages);
    })

    // 点击跳转
    $('ul.products').on('click','li',function(){
        var id=$(this).data('id');
        var num=$(this).data('num');
        var name=$(this).data('name');
        var speak=$(this).find('.time').text();
        location.href='detail.html?categoryId='+id+'products_'+num+'detailName+'+name+'?speak-'+speak;
    })
})