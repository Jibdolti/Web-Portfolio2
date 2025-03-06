$(window).scroll(function(){
    let winScr = $(this).scrollTop();
    if(winScr > 100) {
        $('header').addClass('on')
    } else {
        $('header').removeClass('on')
    }

    $('#section_box .section_part section').each(function(){
        let partWrapTop = $('#section_box').offset().top;
        let partTop = $(this).offset().top;
        let partIdx = $(this).index();
        if(winScr >= partTop - 100){
            $('header .gnb li').eq(partIdx).addClass('on').siblings().removeClass('on')
        } 
        if(winScr < partWrapTop) {
            $('header .gnb li').removeClass('on')

        }
    })
})

$('header .gnb li').click(function(){
    let partIdx = $(this).index();
    let partWrapTop = $('#section_box .section_part section').eq(partIdx).offset().top;
    $('html,body').animate({scrollTop: partWrapTop})
})

$(document).ready(function() {
    // 브라우저에서 저장된 숫자 가져오기
    let pnum = localStorage.getItem('pnum');
    let lastVisitDate = localStorage.getItem('lastVisitDate');

    // 오늘 날짜 가져오기
    let today = new Date().toISOString().split('T')[0];

    // 만약 pnum이 없다면, 랜덤 숫자 생성 (5~20 사이)
    if (!pnum) {
        pnum = Math.floor(Math.random() * 16) + 5;
        localStorage.setItem('pnum', pnum);
        localStorage.setItem('lastVisitDate', today);
    }

    // 마지막 방문일이 오늘이 아니라면, 숫자에 2를 더해줌
    if (lastVisitDate !== today) {
        pnum += 2;
        localStorage.setItem('pnum', pnum);
        localStorage.setItem('lastVisitDate', today);
    }

    // 페이지에 pnum 표시
    $('.pnum').text(pnum);

    // 클릭 시 숫자 증가
    $('.phone').click(function() {
        pnum++;
        localStorage.setItem('pnum', pnum);
        $('.pnum').text(pnum);
    });
});


$('header nav .gnb li').click(function(){
    $(this).addClass('on')
});


$('.titOrange').click(function(){
    let docH = $(document).height();
    let winH = $(window).height();
    $('html,body').animate({scrollTop:docH - winH}, 2000)
});

$('#section2 .content a.screen_mobile').mouseenter(function(){
    let scrH = $(this).height();
    let imgH = $(this).find('img').height();
    $(this).find('img').css({top:-imgH + scrH})
}).mouseleave(function(){
    $(this).find('img').css({top:0})
})

$('.career').click(function(e){
    e.preventDefault()
    $('.popup1').fadeIn(200).css({display:'flex'})
})
$('.btn_close').click(function(e){
    e.preventDefault()
    $('.popup').fadeOut(200)
})
$('.licence').click(function(e){
    e.preventDefault()
    $('.popup2').fadeIn(200).css({display:'flex'})
})