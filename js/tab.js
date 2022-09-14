$(function(){
    $('.tabSet').each(function(){
        var anchor = $(this).find('.tabs a');
        var this_panel = $(this).find('.panel');

        var anchor_on = $(this).find('.tabs a.on');//초기
        var href_on = anchor_on.attr('href');
        $(href_on).show();
        
        anchor.each(function(){
            var href = anchor.attr('href');

            $(this).click(function(event){
                event.preventDefault(); //
                href = $(this).attr('href');
                anchor.removeClass('on');
                $(this).addClass('on');
                this_panel.hide();
                $(href).show();
            })
        })
    })

    $('#bars').click(function(){
        $('#nav_pop').animate({left:'0'},400);
    })

    $('.panels .close').click(function(){
        $('#nav_pop').animate({left:'-100%'},400); //%나 px같이 단위 들어갈땐 반드시 ' ' 따옴표를 붙여야 함!!
    })

    $('#btn1 > li.link_on .sub').show();
    $('#btn1 > li').each(function(){
        $(this).click(function(){     
            var sub = $(this).find('.sub')
         $('#btn1 > li').removeClass('link_on');
         $(this).addClass('link_on'); 
                
            //$(sub).slideDown(); 

           $('.sub').slideUp();
             $(sub).slideToggle();             

        
    })
})  

        

})