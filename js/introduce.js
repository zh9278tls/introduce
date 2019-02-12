var $one_page = $('.one_page'),
    $two_page = $('.two_page'),
    $three_page = $('.three_page'),
    $four_page=$('.four_page'),
    $bg_box = $('.bg_box'),
    $music = $('#music'),
    $audio_btn = $('#audio-btn'),
    $media = $music.find('#media');
var oSec = document.getElementsByClassName("page");
    
function load(){
    $media[0].play();
}
load();

var flag=false;
$audio_btn.click(function(){
       if(!flag){
           //$(this).css({"-webkit-animation-iteration-count":"0"});
           $(this).css({"-webkit-animation-play-state":"paused"});
           //音乐停止
           media.pause();
           flag=true;
       }else{
           //$(this).css({"-webkit-animation-iteration-count":"infinite"});
           $(this).css({"-webkit-animation-play-state":"running"});
           //音乐播放
           media.play();
           flag=false;
       }
   })

// var startX = 0,
// startY = 0,
// index=0;

// function touchStart(evt){
// try{
//     var touch = evt.touches[0], //获取第一个触点
//             x = Number(touch.pageX), //页面触点X坐标
//             y = Number(touch.pageY); //页面触点Y坐标
//     //记录触点初始位置
//     startX = x;
//     startY = y;
// }catch(e){
//     console.log(e.message)
// }
// }

// function touchMove(evt){
// try{
//     var touch = evt.touches[0], //获取第一个触点
//             x = Number(touch.pageX), //页面触点X坐标
//             y = Number(touch.pageY); //页面触点Y坐标
//     //判断滑动方向
//     console.log('startY',startY,'y',y);
//     if (y - startY < 0) {
//         console.log('上滑了！');
//         // console.log(evt.target);
//         // var mainView = myApp.addView('.view-main', {domCache: true});
//         // evt.target.parentNode.parentNode.id.split('page')[1]=='page1'
//         // evt.target.parentNode.parentNode.id=='page1'
//         if(evt.target.parentNode.parentNode.id=='page1'){
//             $one_page.css({
//                 transform:'translateY(-13.3rem)',
//                 transition:'transform 1.5s'
//             })
//             $two_page.show();
//             $two_page.css({
//                 transform:'translateY(-13.3rem)',
//                 transition:'transform  1.5s forwards'
//             })
//         }
//         else if(evt.target.parentNode.id || evt.target.parentNode.parentNode.id =='page2'){
//             $two_page.css({
//                 transform:'translateY(-27.3rem)',
//                 transition:'transform  1.5s '
//             })
//             $three_page.show();
//             $three_page.css({
//                 transform:'translateY(-26.7rem)',
//                 transition:'transform 1.5s '
//             })
//         }else if(evt.target.parentNode.parentNode.parentNode.parentNode.id || evt.target.parentNode.parentNode.parentNode.id || evt.target.parentNode.parentNode.id =='page3'){
//             // $three_page.hide();
//             $three_page.css({
//                 transform:'translateY(-40.3rem)',
//                 transition:'transform  1.5s'
//             })
//             $four_page.show();
//             $four_page.css({
//                 transform:'translateY(-40rem);',
//                 transition:'transform  1.5s'
//             })
//         }
//     }else{
//         if( y- startY > 0){
//             if(evt.target.parentNode.parentNode.id=='page1'){
//                 return;
//             }else if(evt.target.parentNode.id || evt.target.parentNode.parentNode.id =='page2'){
//                 console.log('下滑了！');
//                 $two_page.css({
//                     transform:'translateY(0rem)',
//                     transition:'transform  1.5s'
//                 })
//                 $one_page.css({
//                     transform:'translateY(0rem)',
//                     transition:'transform 1.5s'
//                 })
//             }else if(evt.target.parentNode.parentNode.parentNode.parentNode.id || evt.target.parentNode.parentNode.parentNode.id || evt.target.parentNode.parentNode.id =='page3'){
//                 console.log('下滑了！');
//                 $three_page.css({
//                     // display:'none',
//                     transform:'translateY(-13.3rem)',
//                     transition:'transform  1.5s'
//                 })
//                 $two_page.css({
//                     display:'block',
//                     transform:'translateY(-13.3rem)',
//                     transition:'transform 1.5s forwards'
//                 })
//             }else if(evt.target.id || evt.target.parentNode.id || evt.target.parentNode.parentNode.id || evt.target.parentNode.parentNode.parentNode.id =='page4'){
//                 console.log(evt.target);
//                 $four_page.css({
//                     transform:'translateY(-26.7rem)',
//                     transition:'transform  1.5s'
//                 })
//                 $three_page.css({
//                     // display:'block',
//                     transform:'translateY(-13.3rem)',
//                     transition:'transform 1.5s'
//                 })
//             }else{
//                 return ;
//             }
//         }
        
//     }
// }catch(e){
//     console.log(e.message);
// }
// }
// function bindEvent(){
//     document.addEventListener('touchstart',touchStart,false);
//     document.addEventListener('touchmove',touchMove,false);
//     // document.addEventListener('touchend',touchEnd,false);
// }

// bindEvent();
// let str = 'up';
function move(el,fn){//回调函数
    let str = 'up';
    el.ontouchstart = function(e){
        this.y = e.touches[0].pageY;
    }
    el.ontouchend = function(e){
        let y = e.changedTouches[0].pageY - this.y;
        if(y>0){
            str = 'down'
        }else{
            str = 'up'
        }
        fn(str);
    }
}
move(oSec[0],function(str){
    console.log(str);
    if(str == 'up'){
        // oSec[0].style.display = 'none';
        // oSec[1].style.display = 'block';
        $(oSec[0]).css({
            transform:'translateY(-13.3rem)',
            transition:'transform 1.5s'
        })
        play_show();
        $(oSec[1]).show();
        $(oSec[1]).css({
            transform:'translateY(-13.3rem)',
            transition:'transform  1.5s forwards'
        })
    }else{
        $(oSec[0]).css({
            transform:'translateY(-100%)',
            transition:'transform 1.5s'
        })
        play_show();
        $(oSec[3]).show();
        $(oSec[3]).css({
            transform:'translateY(-40rem)',
            transition:'transform  1.5s forwards'
        })
    }
})
move(oSec[1],function(str){
    console.log(str);
    if(str == 'up'){
        // $(oSec[1]).style.display = 'none';
        // $(oSec[2]).style.display = 'block';
        $(oSec[1]).css({
            transform:'translateY(-27.3rem)',
            transition:'transform  1.5s '
        })
        play_show();
        $(oSec[2]).show();
        $(oSec[2]).css({
            transform:'translateY(-26.7rem)',
            transition:'transform 1.5s '
        })
    }else{
        // $(oSec[1]).style.display = 'none';
        // $(oSec[0]).style.display = 'block';
        $(oSec[1]).css({
            transform:'translateY(0rem)',
            transition:'transform  1.5s'
        })
        play_show();
        $(oSec[0]).css({
            transform:'translateY(0rem)',
            transition:'transform 1.5s'
        })
    }
})
move(oSec[2],function(str){
    console.log(str);
    if(str == 'up'){
        // $(oSec[2]).style.display = 'none';
        // $(oSec[3]).style.display = 'block';
        $(oSec[2]).css({
            transform:'translateY(-13.3rem)',
            transition:'transform  1.5s'
        })
        play_show();
        $(oSec[3]).show();
        $(oSec[3]).css({
            transform:'translateY(-40rem);',
            transition:'transform  1.5s'
        })
    }else{
        // $(oSec[2]).style.display = 'none';
        // $(oSec[1]).style.display = 'block';
        $(oSec[2]).css({
            // display:'none',
            transform:'translateY(-13.3rem)',
            transition:'transform  1.5s forwards'
        })
        play_show();
        $(oSec[1]).css({
            display:'block',
            transform:'translateY(-13.3rem)',
            transition:'transform 1.5s forwards'
        })
    }
})
move(oSec[3],function(str){
    console.log(str);
    if(str == 'down'){
        $(oSec[2]).css({
            // display:'none',
            transform:'translateY(-26.7rem)',
            transition:'transform  1.5s'
        })
        play_show();
        $(oSec[3]).css({
            // display:'block',
            transform:'translateY(-26.6rem)',
            transition:'transform 1.5s forwards'
        })
    }else{
        // $(oSec[2]).style.display = 'none';
        // $(oSec[1]).style.display = 'block';
        
    }
})



