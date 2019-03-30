$(function(){
    zq();
    function zq(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getinlanddiscount',
            dataType:'json',
            success:function(info){
                console.log(info);
                $('ul.pro').html(template('tpl_1',info));
            }
        })
    }
    // 点击跳转
    $('ul.pro').on('click','li',function(){
        var id=$(this).data('id');
        // var num=$(this).data('num');
        // var name=$(this).data('name');
        // var speak=$(this).find('.time').text();
        // location.href='sq_detail.html?categoryId='+id+'products_'+num+'detailName+'+name+'?speak-'+speak;
        location.href='in_detail.html?categoryId='+id
    })
})