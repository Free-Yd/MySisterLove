//开启音乐（手机端不需自动播放）
window.ontouchstart = function () {
    document.getElementById('music').play();
}

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
var img = ['images/bg/bg.jpg', 'images/bg/bg1.jpg', 'images/bg/bg2.jpg', 'images/bg/bg3.jpg', 'images/bg/bg4.jpg'];
var page4_off = true;
var page5_off = true;

var n = 0;

for (var i = 0; i < img.length; i++) {
    var oImg = new Image();
    oImg.src = img[i];
    oImg.onload = function () {
        n++;
        if (n == img.length) {
            $('.g_box').css('top', '-100%');
        }
    }

}


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
        if (num == 3 && page4_off) {
            page4_off = false;
            Page4();
        }
        if (num == 4 && page5_off) {
            page5_off = false;
            Page5();
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
    var word2 = ['— —', '偌', '大', '个', '城', '市', '，', '让', '我', '遇', '见', '你', '，', '从', '那', '一', '刻', '起', '，', '我', '就', '知', '道', '，', '你', '就', '是', '我', '的', '命', '中', '注', '定', '~'];
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
    $('#demo3_img3').css({
        transitionDelay: '2s',
        transform: 'scale(10) rotate(-5deg)',
        opacity: '1'
    });
    $('#demo3_img2').css({
        transitionDelay: '4s',
        transform: 'scale(10) rotate(12deg)',
        opacity: '1'
    });
    $('#demo3_img1').css({
        transitionDelay: '6s',
        transform: 'scale(10) rotate(-14deg)',
        opacity: '1'
    });
}
//4>第四页效果

function CountDown() {
    var timer = null;
    var oTimeBox = document.getElementById('timeBox');
    var will = new Date();
    will.setFullYear(2017, 04, 07);
    will.setHours(10, 0, 0);

    function time() {
        var now = new Date();
        var time_miao = (will.getTime() - now.getTime()) / 1000;
        //---------------------------------------得出总秒，要除1000；他最开始单位是毫秒
        var date = Math.floor(time_miao / (60 * 60 * 24));
        var h_miao = time_miao % (60 * 60 * 24);
        //----------------------------------------得出几天，且剩余几秒
        var hours = Math.floor(h_miao / 3600);
        var m_miao = h_miao % 3600;
        //---------------------------------------得出几小时，且剩余几秒
        var sec = Math.floor(m_miao / 60);
        var s_miao = Math.floor(m_miao % 60);
        //----------------------------------------得出几分，且剩余几秒
        oTimeBox
            .innerHTML = '~~距婚礼还有' +
            toDouble(date) + '天' +
            toDouble(hours) + '时' +
            toDouble(sec) + '分' +
            toDouble(s_miao) + '秒~~';
    }
    timer = setInterval(time, 1000);
    //------------------------------------00:00:00模式------
    function toDouble(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
};
CountDown();

function Page4() {
    $('#demo4').css('transform', 'scale(3) translateY(-30%)');
}
//5>第五页效果
function Page5() {
    $('#demo5').css('display', 'block');
    for (var i = 0; i < $('#demo5 li').length; i++) {
        $('#demo5 li').eq(i).addClass('animated bounceInLeft').css({
            webkitAnimationDelay: (i + 1) + 's',
            animationDelay: (i + 1) + 's',
            webkitAnimationDuration: '1.2s',
            animationDuration: '1.2s'
        });
    }
};
