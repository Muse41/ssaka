$(function(){      
    $('#nav .gnb > li').each(function(){/*m_nav에 li별로 동작*/
       var depth2_sub = $(this).find('.depth2_box'); /*depth2 을 찾는다*/
       $(this).hover(function(){/*m_nav에 li별 hover했을때*/
          depth2_sub.stop().slideDown(300);
       },function(){
          depth2_sub.hide();
       })
    })
 })

 