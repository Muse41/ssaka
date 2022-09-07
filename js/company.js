$(function(){
    $('.sec1 .img_box').each(function(){ 
        if($(window).width() <= 720){ 
          var img = $(this).find('img');
          var img_pc = img.attr('src'); 
          var img_mo = img_pc.replace('_pc','_mo')
          img.attr('src',img_mo);
       }else{
          var img = $(this).find('img');
          var img_mo = img.attr('src'); 
          var img_pc = img_mo.replace('_mo','_pc')
            img.attr('src',img_pc);
          }
     })  
      $(window).resize(function(){
        // 윈도우 창을 사용자가 움직이기 시작하면 이미지변수 다시 불러와야 함
      $('.sec1 .img_box').each(function(){ 
        if($(window).width() <= 720){ 
          var img = $(this).find('img');
          var img_pc = img.attr('src'); 
          var img_mo = img_pc.replace('_pc','_mo')
          img.attr('src',img_mo);
       }else{
          var img = $(this).find('img');
          var img_mo = img.attr('src'); 
          var img_pc = img_mo.replace('_mo','_pc')
            img.attr('src',img_pc);
          }
      })  
    })
    })