$(function () {
    var id = location.search;
    id = +id.split('?')[1];
    console.log(id);
    function pro(id) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcouponproduct',
            data: {
                couponid: id
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $('ul.cou_products').html(template('tpl_1', info));
            }
        })
    }
    pro(id);

    // 点击事件
    $('ul.cou_products').on('click', 'li', function () {
        // console.log(1);
        var src=$(this).find('img').attr('src');
        // console.log(src);
        $('.swiper-slide').children().attr('src',src);
        $('.lunbo').css('display','block');
    })
    $('.return').on('click',function(){
        $('.lunbo').css('display','none');
    })

    var mySwiper = new Swiper('.swiper-container',{
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    })

})