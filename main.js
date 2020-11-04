$(function(){

$(window).on('load',function(){
    $('.preloader').delay(500).fadeOut('slow',function(){
        $(this).attr('style','display: none !important');
    });
});



    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.scrollToTop').fadeIn();
        }else{
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function(){
        $('html,body').animate({scrollTop : 0},800);
        return false;
    });


    // $('.datepicker').datepicker({
    //     ok: '',
    //     clear: 'Clear selection',
    //     close: 'Cancel'
    //     })
});


let myChart = document.getElementById('myChart').getContext('2d');
let massPopChart = new Chart(myChart,{
    type:'horizontalBar',
    data:{
        labels:['Boston','monstr','towken','samarqand','moskva'],
        datasets:[{
            label:'Population',
            data:[
                22122,
                22323,
                34343,
                23242,
                12343
            ],
            backgroundColor:'green'
        }]
    },
    options:{}
})
