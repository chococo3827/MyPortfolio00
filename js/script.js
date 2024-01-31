// splitting js
$(function(){
    Splitting();
})
// scrolla js
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})
// svg 애니메이션
// $(function(){
//     $('.svgAni').find('#svgAni01').each(function(i, path){
//         const length = path.getTotalLength();
//         // alert(length)
//     })
// })

// simplyScroll
$(function(){
    $('#home .imgList').simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false
    })
})

// gnbBtn toggle
$(function(){
    $('.gnbBtn').click(function(){
        $(this).toggleClass('active');
        $('.gnb').fadeToggle();
    })
})

// GSAP 애니메이션
$(function(){
    // about me title
    gsap.timeline({
        scrollTrigger:{
            trigger: '#aboutMe',
            start: '0% 100%',
            end: '0% 10%',
            scrub: 1,
            // markers: true
        }
    })
    .to('.wrap', {backgroundColor:'#fff', color:'#000', ease:'none', duration:5},0)
    .to('.gnbBtn span', {backgroundColor:'#000', ease:'none', duration:5},0)
    .fromTo('#aboutMe .title .a',{x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('#aboutMe .title .b',{x:'100%'},{x:'0%', ease:'none', duration:5},0)

    // my skill title
    gsap.timeline({
        scrollTrigger:{
            trigger: '#mySkill',
            start: '0% 90%',
            end: '0% 10%',
            scrub: 1,
            // markers: true
        }
    })
    .to('.wrap', {backgroundColor:'#000', color:'#fff', ease:'none', duration:5},0)
    .to('.gnbBtn span', {backgroundColor:'#fff', ease:'none', duration:5},0)
    .fromTo('#mySkill .title .a',{x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('#mySkill .title .b',{x:'100%'},{x:'0%', ease:'none', duration:5},0)
    // .to('#mySkill .title', {position:'fixed', ease:'none', left:'0', top:'0', width:'100%', duration:5},0)

    // my work 양쪽에서 나타나기
    gsap.timeline({
        scrollTrigger:{
            trigger: '#myWork',
            start: '0% 100%',
            end: '0% 10%',
            scrub: 1,
            // markers: true
        }
    })
    .fromTo('#myWork .title .a',{x:'-200%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('#myWork .title .b',{x:'200%'},{x:'0%', ease:'none', duration:5},0)

    // contact video 애니메이션
    gsap.timeline({
        scrollTrigger:{
            trigger: '#contact',
            start: '0% 80%',
            end: '100% 100%',
            scrub: 1,
            // markers: true
        }
    })
    .to('.wrap', {backgroundColor:'#fff', color:'#000', ease:'none', duration:5},0)
    .fromTo('.contactVideo video', {'clip-path':'inset(60% 60% 60% 60% round 30%)'},
    {'clip-path':'inset(0% 0% 0% 0% round 0%)',ease:'none', duration:10}, 0)
})

// 포토샵 디자인 모달창 띄우기
$(function(){
    $('#myWork .design .content .inner a img').click(function(){
        $('.modal').show();

        let imgSrc = $(this).attr('src');
        let imgAlt = $(this).attr('alt');
        $('.modal img').attr('src', imgSrc);
        $('.modal img').attr('alt', imgAlt);

        $('.modal').click(function(){
            $('.modal').hide();
        })
    })
})



// rest in nature
// 모바일 모드
function openMobile(){
    const url = '/project01/index.html';
    const name = 'Rest in Nature-mobile'
    const option = 'width = 450, height = 700';
    window.open(url, name, option);
}
// 태블릿 모드
function openTablet(){
    const url = '/project01/index.html';
    const name = 'Rest in Nature-tablet'
    const option = 'width = 1024';
    window.open(url, name, option);
}

// Musign page
// 모바일 모드
function openMobile4(){
    const url = '/뮤자인/index.html';
    const name = 'canvas-mobile'
    const option = 'width = 450, height = 700';
    window.open(url, name, option);
}
// 태블릿 모드
function openTablet4(){
    const url = '/뮤자인/index.html';
    const name = 'canvas-tablet'
    const option = 'width = 1024';
    window.open(url, name, option);
}

// login page
// 모바일 모드
function openMobile2(){
    const url = '/momentum/index.html';
    const name = 'LoginPage-mobile'
    const option = 'width = 450, height = 700';
    window.open(url, name, option);
}
// 태블릿 모드
function openTablet2(){
    const url = '/momentum/index.html';
    const name = 'LoginPage-tablet'
    const option = 'width = 1024';
    window.open(url, name, option);
}

// Canvas page
// 모바일 모드
function openMobile3(){
    const url = '/MEME-MAKER/index.html';
    const name = 'canvas-mobile'
    const option = 'width = 450, height = 700';
    window.open(url, name, option);
}
// 태블릿 모드
function openTablet3(){
    const url = '/MEME-MAKER/index.html';
    const name = 'canvas-tablet'
    const option = 'width = 1024';
    window.open(url, name, option);
}