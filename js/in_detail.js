$(function(){
    var id = location.search;
    id = id.split('=')[1];
    console.log(id);
    zq(id);
    function zq(id){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getdiscountproduct',
            data:{
                productid:id
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                $('.in_main').html(template('tpl_1',info));
            }
        })
    }
})