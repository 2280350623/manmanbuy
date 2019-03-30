$(function(){
    var id = location.search;
    id = id.split('=')[1];
    id=+id.substring(0, id.indexOf("pro"))
    var num= location.search;
    num=num.split('_')[1];
    num=+num.substring(0, num.indexOf("detail"))
    var name=location.search;
    name=name.split('+')[1];
    name=decodeURI(name);
    name=name.substring(0, name.indexOf("?"));
    var sp_num=location.search;
    sp_num=sp_num.split('-')[1];
    sp_num=decodeURI(sp_num);
    // console.log(sp_num);
    // console.log(name);
    // console.log(num);
    // console.log(id);
    second(id);
    function second(id) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcategorybyid',
            data: {
                categoryid: id,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                info.name=name;
                $('ul.nav').html(template('tpl_1', info));
            }
        })
    }
    third(num);
    function third(num){
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproduct',
            data: {
                productid: num,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                info.sp_num=sp_num;
                $('.d_main').html(template('tpl_2', info));
            }
        })
    }

    speak(num);
    function speak(num){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getproductcom',
            data:{
                productid:num
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                $('ul.content').html(template('tpl_3',info))
            }
        })
    }
})