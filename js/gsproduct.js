$(function(){
    // 商铺信息
    var shopId=0;
    var areaId=0;
    function shop(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsshop',
            dataType:'json',
            success:function(info){
                // console.log(info);
                $('ul.shop').html(template('tpl_1',info))
            }
        })
    }
    shop();
    // 商铺区域信息
    function shoparea(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsshoparea',
            dataType:'json',
            success:function(info){
                // console.log(info);
                $('ul.area').html(template('tpl_2',info))
            }
        })
    }
    shoparea();
    // 商品信息
    function products(shopId,areaId){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid:shopId,
                areaid:areaId
            },
            dataType:'json',
            success:function(info){
                // console.log(info);
                $('ul.pro').html(template('tpl_3',info))
            }
        })
    }
    products(shopId,areaId);
    // 点击事件
    $('.shop_btn').on('click',function(){
        // console.log(1);
        $(this).find('i.fa-caret-down').toggleClass('fa-caret-up')
        $('ul.shop').stop().slideToggle();
    })
    $('ul.shop').on('click','li',function(){
        // console.log(1);
        $(this).find('i').addClass('fa fa-check').parent().siblings().find('i').removeClass('fa fa-check');
        shopId=$(this).data('id');
        // console.log(shopId);
        products(shopId,areaId);
    })

    $('.area_btn').on('click',function(){
        // console.log(1);
        $(this).find('i.fa-caret-down').toggleClass('fa-caret-up')
        $('ul.area').stop().slideToggle();
    })
    $('ul.area').on('click','li',function(){
        // console.log(1);
        $(this).find('i').addClass('fa fa-check').parent().siblings().find('i').removeClass('fa fa-check');
        areaId=$(this).data('id');
        products(shopId,areaId);
        // console.log(areaId);
    })
})