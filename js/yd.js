//触摸屏幕开启音乐（手机端不需自动播放）

//window.ontouchstart = function () {
//    document.getElementById('music').play();
//}

//判断屏幕旋转

function orientationChange() {
    switch (window.orientation) {　　
        case -90:
            alert('请竖屏下观看');
            break;　　
        case 90:
            alert('请竖屏下观看');
            break;
    }
};

// 添加事件监听 

addEventListener('load', function () {
    orientationChange();
    window.onorientationchange = orientationChange;
});

//切换图片与swiper

var num = 0;
var img = ['images/bg/bg.jpg', 'images/bg/bg1.jpg', 'images/bg/bg2.jpg', 'images/bg/bg3.jpg', 'images/bg/bg4.jpg', 'images/bg/bg5.jpg', 'images/bg/bg6.jpg', 'images/bg/bg7.jpg', 'images/bg/bg8.jpg'];

//1>初始赋予背景图  第一页效果
function Bg_img() {
    $('#bg').attr('src', img[num]);
    $('.g_bg').removeClass('g_bg0');
    $('.g_bg').addClass('g_bg1');
    $('#wrapper .swiper-slide').eq(num).css('background-image', 'url(' + img[num] + ')');
}
Bg_img();

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: false,
    onSlideNextStart: function (swiper) {
        $('.g_bg').removeClass('g_bg1');
        $('.g_bg').addClass('g_bg0');
    },
    onSlideNextEnd: function (swiper) {
        num++;
        Bg_img();
        if (num == 1 && $('#word span').length == 0) {
            Page2();
        }
        if (num == 2 && $('#demo3 img').length == 0) {
            Page3();
        }
    },
    onSlidePrevStart: function (swiper) {
        $('.g_bg').removeClass('g_bg1');
        $('.g_bg').addClass('g_bg0');
    },
    onSlidePrevEnd: function (swiper) {
        num--;
        Bg_img();
    },
});
//2>第二页效果
function Page2() {
    var word2 = ['— —', '在', '偌', '大', '个', '城', '市', '中', '，', '让', '我', '遇', '到', '你', '，', '从', '这', '一', '刻', '起', '，', '我', '就', '知', '道', '，', '你', '就', '是', '我', '的', '命', '中', '注', '定', '~'];
    var time2 = 0;
    for (var i = 0; i < word2.length; i++) {
        $('#word').append('<span class="fl animated bounceInDown" style="-webkit-animation-delay:' + 0.4 * i + 's;animation-delay:' + 0.4 * i + 's;">' + word2[i] + '</span>');
        time2 = 0.4 * i;
    };
    $('#demo2').css('transition', time2 + 's').addClass('demo_imgChange');
};
//3>第三页效果
function Page3() {
    var img3 = ['images/demo/demo3_1.png', 'images/demo/demo3_2.png', 'images/demo/demo3_3.png', 'images/demo/demo3_4.png'];
    var moveName = ['imgMove1', 'imgMove2', 'imgMove3', 'imgMove4', 'imgMove5', 'imgMove6', 'imgMove7', 'imgMove8', 'imgMove9']
    for (var i = 0; i < 30; i++) {
        $('#demo3').append('<img src="' + img3[parseInt(Math.random() * 4)] + '" alt="" class="imgmove" style=" left:' + parseInt(Math.random() * 90) + '%; top:' + parseInt(Math.random() * 90) + '%; animation-name:' + moveName[parseInt(Math.random() * 9)] + ';-webkit-animation-name:' + moveName[parseInt(Math.random() * 9)] + '; animation-delay:' + (Math.random() * 5).toFixed(1) + 's; " >')
    }
    $('#demo3_img3').css({transitionDelay:'2s',transform:'scale(10) rotate(-5deg)',opacity:'1'});
    $('#demo3_img2').css({transitionDelay:'4s',transform:'scale(10) rotate(12deg)',opacity:'1'});
    $('#demo3_img1').css({transitionDelay:'6s',transform:'scale(10) rotate(-14deg)',opacity:'1'});
}
