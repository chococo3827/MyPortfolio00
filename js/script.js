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
    .fromTo('#aboutMe .title .a',{x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('#aboutMe .title .b',{x:'100%'},{x:'0%', ease:'none', duration:5},0)

    // my skill title
    gsap.timeline({
        scrollTrigger:{
            trigger: '#mySkill',
            start: '0% 100%',
            end: '0% 10%',
            scrub: 1,
            markers: true
        }
    })
    .to('.wrap', {backgroundColor:'#000', color:'#fff', ease:'none', duration:5},0)
    .fromTo('#mySkill .title .a',{x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('#mySkill .title .b',{x:'100%'},{x:'0%', ease:'none', duration:5},0)
    // .to('#mySkill .title', {position:'fixed', ease:'none', left:'0', top:'0', width:'100%', duration:5},0)
})