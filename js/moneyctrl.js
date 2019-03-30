$(function(){
    // 面包屑导航
    var pages = 1;
    var pageMax = 1;
    var arr=[];
    product();
    function product(pageid){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            dataType:'json',
            data:{
                pageid:pageid||1
            },
            success: function(info){
                console.log(info);
                $('ul.products').html(template('tpl_1',info))
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
    
    
    // 点击事件
    $('.pagination').on('click', '.next', function () {
        console.log(1,pages,pageMax);
        pages++;
        if (pages > pageMax) {
            pages = pageMax;
        }
        product(pages);
        // console.log($('#sel').children().eq(1));
        $('#sel').children().eq(pages-1).prop('selected','selected')
    })
    $('.pagination').on('click', '.prev', function () {
        // console.log(1);
        pages--;
        if (pages < 1) {
            pages = 1;
        }
        product(pages);
        $('#sel').children().eq(pages-1).prop('selected','selected')
    })
    // 下拉框 change 事件
    $('#sel').on('change',function(){
        // console.log($(this).val());
        pages=+$(this).val();
        product(pages);
    })
    
    // 点击跳转
    $('ul.products').on('click','li',function(){
        var id=$(this).data('id');
        // var num=$(this).data('num');
        // var name=$(this).data('name');
        // var speak=$(this).find('.time').text();
        // location.href='sq_detail.html?categoryId='+id+'products_'+num+'detailName+'+name+'?speak-'+speak;
        location.href='sq_detail.html?categoryId='+id
    })
})