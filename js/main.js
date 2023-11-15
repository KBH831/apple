$(function () {
  // a.height() : 컨텐츠 높이
  // a.innerHeight() : 패딩까지 높이
  // a.outerHeight() : 보더까지 높이
  // a.outerHeight(true) : 마진까지 높이

  // var let const

  const firstMenu = $(".h-nav>.main-m>li"),
    header = $("header"),
    headerHeight = header.outerHeight();

  firstMenu.mouseenter(function () {
    let currentMenu = $(this); // 선택한 li를 currentMenu 저장
    let subHeight = currentMenu.find("ul").outerHeight(); // 선택한 li 안에 있는 ul을 찾아서 ul의 높이(submenu) 저장
    console.log(currentMenu, subHeight); //높이얼마나 나오는지 console 찍기
    header.stop().animate(
      {
        height: headerHeight + subHeight + "px",
      },
      300
    ); // header 높이를 header높이 + submenu 높이
    $(".main-m ul").hide();
    currentMenu.find("ul").show(); // 선택한 li의 ul을 찾아서 보이기
    $(".headerbg").fadeIn(1000);
    $("header").addClass("active");
  });
  $("header").mouseleave(function () {
    // header 높이 다시 조정하기
    header.stop().animate(
      {
        height: headerHeight + "px",
      },
      300
    ); // header 높이를 header 높이 만큼만
    $(this).find(".sub-m1, .sub-m2, .sub-m3").hide(); // 선택한 li의 ul을 찾아서 숨기기
    $(".headerbg").fadeOut();
    $("header").removeClass("active");
  });

  $(".play").click(function () {
    $(this).toggleClass("play-start");
    let temp = $(this).hasClass("play-start");
    let video = $(".container .group1 > .box4 > video")[0];
    if (temp) {
      console.log("멈춤");
      video.pause();
    } else {
      console.log("시작");
      video.play();
    }
  });

  // $('.bx-wrapper .bx-controls-auto .bx-stop').click(function(){
  //   $('.bx-start').addClass('active')
  //   $('.bx-stop').removeClass('active')
  // })
  // $('.bx-wrapper .bx-controls-auto .bx-start').click(function(){
  //   $('.bx-stop').addClass('active')
  //   $('.bx-start').removeClass('active')

  // })


  // $('.banner-play').click(function(){
  //   $(this).toggleClass('banner-play-start');
  //   let temp = $(this).hasClass('banner-play-start')
  //   if(temp){
  //     bxbn.auto.false()
  //   }else{
  //     bxbn.auto.true()
  //   }
  // })



  $('.banner-play').click(function(){
    $(this).toggleClass('banner-play-start');
    let temp = $(this).hasClass('banner-play-start')
    if(temp){
      bxbn.stopAuto()
    }else{
      bxbn.startAuto()
    }
  })




  let bxbn = $(".slider").bxSlider({
    mode: "horizontal", // slide 이동 방향 설정 'horizontal' 'vertical' 'fade'
    auto: true, // 슬라이드 자동 전환 여부
    pager: true, // 물방울 여부
    controls: false, // 이전, 다음 버튼 <>
    slideWidth: 1250, // slide 크기
    slideMargin: 10, // slide간의 간격
    maxSlides: 1, // slide 최대 노출되는 개수
    minSlides: 1, // slide 최소 노출 개수
    moveSlides: 1, // slide 이동시 개수
    autoHover: true, // slide에 마우스 올리면 자동전환 되는것을 멈출 것인지 여부
    infiniteLoop: true, // 무한반복
    speed: 2000,
    clickable: true,
    // autoControls: true, // 시작, 중지 버튼
    touchEnabled: navigator.maxTouchPoints > 0, // a태그 안먹힐때 오류 방지
  });
});
