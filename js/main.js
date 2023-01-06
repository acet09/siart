"use strict";
// *** header ***
// header slideDown-Up
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


// nav fadeIn-Out
const navbg = document.querySelector('.navleft');
const navbg2 = document.querySelector('.navright');
const navlogo = document.querySelector('.mainlogo');
const headerbg = document.querySelector('.headerbg');

navbg.addEventListener('mouseenter', function () {
  navaddcall();
});
navbg.addEventListener('mouseleave', function () {
  navremovecall();
});
navbg2.addEventListener('mouseenter', function () {
  navaddcall();
});
navbg2.addEventListener('mouseleave', function () {
  navremovecall();
});

function navaddcall() {
  navlogo.classList.add('logofade');
  headerbg.classList.add('headerslide');
}
function navremovecall() {
  navlogo.classList.remove('logofade');
  headerbg.classList.remove('headerslide');
}

// nav focus event
// tab키로 focuse 되면 하단 메뉴가 열린다.
// navmain 목록들을 quetyselector로 받아와 변수에 저장
// addEventListerner 설정 해당 항목에 on class 부여
// css on class에는 
const navmenuMain = document.querySelectorAll('.navmenu__main');
// console.log(navmenuMain);



/*
  열기 버튼 클릭하면 
  1. display: none or block 
  2. animation설정된 class add or remove(css속성을 animation으로 옮기기)
  settimeout 안써보고 하는 방향으로 가보자
*/ 


// searchbt background fadeIn-Out
const searchbutton = document.querySelector('.search__btn');
const searchbackground = document.querySelector('.searchbg');
const searchbox = document.querySelector('.search__box');
const searchclose = document.querySelector('.search--close');
const searchfind = document.querySelector('.search--icon');

searchbutton.addEventListener("click", (event) => {
  event.preventDefault();
  searchbackground.classList.add('show');
  searchbox.classList.remove('hide');
  searchbox.classList.add('show');
});

searchclose.addEventListener("click", (event) => {
  event.preventDefault();
  searchbackground.classList.remove('show');
  searchbox.classList.add('hide');
  // searchbox.classList.remove('show');

  setTimeout(() => {
    searchbox.classList.remove('show');
  }, 1000);  
});

searchbackground.addEventListener('click', (event) => {
  event.preventDefault();
  searchbackground.classList.remove('show');
  searchbox.classList.add('hide');
  // searchbox.classList.remove('show');
  
  setTimeout(() => {
    searchbox.classList.remove('show');
  }, 1000);
  
})

searchfind.addEventListener("click", (event) => {
  event.preventDefault();
  alert("검색어를 입력해주세요.");
});


// sidemenu gnb(web)
const sidemenuOpen = document.querySelector('.sidemenu__btn');
const sidemenugnb = document.querySelector('.sidemenu__gnb');
const sidemenuclose = document.querySelector('.sidemenu--close');
const windowscrollLock = document.body;

sidemenuOpen.addEventListener("click", (event) => {
  event.preventDefault();
  sidemenugnb.style.cssText = 'left: 0%; transition: all 0.5s ease-out 0s;'
  windowscrollLock.style.overflow = 'hidden'
});


sidemenuclose.addEventListener("click", (event) => {
  event.preventDefault();
  sidemenugnb.style.cssText = 'left: 100%; transition: all .5s ease-out 0s; '
  windowscrollLock.style.overflow = 'auto'
});

// sidemenu gnb(mobile)
// sidemenu left
const sidemenu_M_BtnLeft = document.querySelector('.sidemenu__btn--left');
const sidemenu_M_GnbLeft = document.querySelector('.sidemenu__gnb--left');
const sidemenu_M_bg = document.querySelector('.mobile--bg');
const sidemenu_M_closeLeft = document.querySelector('.sidemenu--closebtn--left');

sidemenu_M_BtnLeft.addEventListener('click', () => {
  sidemenu_M_GnbLeft.style.cssText = 'left: 0%; transition: all .35s ease-out 0s;'
  document.body.style.overflow = 'hidden';
  sidemenu_M_bg.classList.remove('fade');
  sidemenu_M_bg.classList.add('active');
});

sidemenu_M_closeLeft.addEventListener('click', () => {
  sidemenu_M_GnbLeft.style.cssText = 'left: -100%; transition: all .35s ease-out 0s;'
  document.body.style.overflow = 'auto';
  sidemenu_M_bg.classList.remove('fade');
  sidemenu_M_bg.classList.remove('active');
});

// sidemenu left gnb nav acodian menu
const sidemenu_M_gnbList = document.querySelectorAll('.sidemenu__left--list');
const sidemenu_M_gnbsub = document.querySelectorAll('.sidemenu__left--sub');

for(let i = 0; i < sidemenu_M_gnbList.length; i++) {
  sidemenu_M_gnbList[i].addEventListener('click', () => {
    // 토글 해결중
    
    // console.log(sidemenu_M_gnbList[i]);

    // sidemenu_M_gnbList.forEach((items) => {
    //   items.classList.remove('on');
    // });
    // sidemenu_M_gnbsub.forEach((items) => {
    //   items.style.display = ('none');
    // });

    // sidemenu_M_gnbList[i].classList.remove('on');
    // sidemenu_M_gnbsub[i].style.display = ('block');    
    
    if(sidemenu_M_gnbList[i].className == 'sidemenu__left--list') {
      sidemenu_M_gnbList[i].className = 'sidemenu__left--list on'
      sidemenu_M_gnbsub[i].style.display = ('block');
      sidemenu_M_gnbsub[i].style.maxHeight = sidemenu_M_gnbsub[i].scrollHeight + 'px';
    } else {
      sidemenu_M_gnbList[i].className = 'sidemenu__left--list'
      sidemenu_M_gnbsub[i].style.maxHeight = null;
      setTimeout(function(){
        sidemenu_M_gnbsub[i].style.display = ('none');
      },500);
          
    }


  });
}








// sidemenu right
const sidemenu_M_BtnRight = document.querySelector('.sidemenu__btn--right');
const sidemenu_M_GnbRight = document.querySelector('.sidemenu__gnb--right');
const sidemenu_M_closeRight = document.querySelector('.sidemenu--closebtn--right');

sidemenu_M_BtnRight.addEventListener('click', () => {
  sidemenu_M_GnbRight.style.cssText = 'right: 0%; transition: all .35s ease-out 0s;'
  document.body.style.overflow = 'hidden';  
  sidemenu_M_bg.classList.remove('fade');
  sidemenu_M_bg.classList.add('active');
});

sidemenu_M_closeRight.addEventListener('click', () => {
  sidemenu_M_GnbRight.style.cssText = 'right: -100%; transition: all .35s ease-out 0s;'
  document.body.style.overflow = 'auto';
  sidemenu_M_bg.classList.remove('fade');
  sidemenu_M_bg.classList.remove('active');
});

// Side menu events due to window reset
const bodyWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const bodyRealWidth = window.innerWidth;
  document.body.style.overflow = ('auto');
  if (bodyRealWidth != bodyWidth) {
    sidemenugnb.style.cssText = 'left: 100%;'
    sidemenu_M_GnbLeft.style.cssText = 'left: -100%'
    sidemenu_M_GnbRight.style.cssText = 'right: -100%'
    sidemenu_M_bg.classList.remove('active');
    sidemenu_M_bg.classList.add('fade');
  }
});



// queryselectorAll로 받은 node.List.forEach 반복문 작성
// 
// 🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈
// 각각의 sidemenu들은 숨겨진 상태에서 display: none 상태로 만들어
// 사용자들의 불필요한 tab이동을 막아야됨(display:none으로 숨김상태 오프젝트 다 막아야됨)
// display + transition 조합(x) , display + animation 조합을 활용해보자


// 1. display:none으로 tab키 이동 막기 
// 2. tab키 focusevent에 반응하는 javascript



// sidemenu left(web)
// language text
const sidemenuLang = document.querySelectorAll('.lang--text');
for (let i = 0; i < sidemenuLang.length; i++) {
  sidemenuLang[i].addEventListener('click', (e) => {
    e.preventDefault();
    sidemenuLang.forEach((items) => {
      items.classList.remove('active');
    });
    sidemenuLang[i].classList.add('active');
  });
}

// sidemenuleft nav(web)
const sidemenuContents = document.querySelectorAll('.sidemenu__contents'),
  sidemenuBtn = document.querySelectorAll('.sidemenu--maintext'), 
  sidemenuBg = document.querySelectorAll('.sidemenu__bg'),
  sidemenuSub = document.querySelectorAll('.sidemenu__sub'),
  sidemenuLine = document.querySelectorAll('.sidemenu__line>span');

for (let i = 0; i < sidemenuBtn.length; i++) {
  sidemenuBtn[i].addEventListener('mouseenter', (e) => {
    e.preventDefault();
    // Background Img
    sidemenuBg.forEach((items) => {
      items.classList.remove('active');
    });
    sidemenuBg[i].classList.add('active');
    sidemenuBg[i].style.transform = "scale(1.0)";
    // Line
    sidemenuLine[i].classList.add('active');
    // Sub menu
    sidemenuSub.forEach((items) => {
      items.classList.remove('active');
    });
    sidemenuSub[i].classList.add('active');
  });

  sidemenuContents[i].addEventListener('mouseleave', (e) => {
    e.preventDefault();
    // Background Img
    sidemenuBg.forEach((items) => {
      items.classList.remove('active');
      items.style.transform = "scale(1.035)";
    });
    sidemenuBg[0].classList.add('active');
    // Line
    sidemenuLine[i].classList.remove('active');
    // Sub menu
    sidemenuSub.forEach((items) => {
      items.classList.remove('active');
    });
  });
}

// sidemenu animation(web)
const sidemenuList = document.querySelectorAll('.sidemenu__list');
const sidemenuLink = document.querySelectorAll('.sidemenu__link');

document.addEventListener('DOMContentLoaded', function () {
  for (let n = 0; n < sidemenuContents.length; n++) {
    sidemenuContents[n].style.top = ('150px');
    sidemenuContents[n].style.opacity = ('0');
    sidemenuContents[n].style.transition = ('none');
  }
  for (let i = 0; i < sidemenuList.length; i++) {
    sidemenuList[i].style.top = ('50px');
    sidemenuList[i].style.opacity = ('0');
    sidemenuList[i].style.transition = ('none');
  }
  for (let a = 0; a < sidemenuLink.length; a++) {
    sidemenuLink[a].style.top = ('150px');
    sidemenuLink[a].style.opacity = ('0');
    sidemenuLink[a].style.transition = ('none');
  }
});

sidemenuOpen.addEventListener('click', () => {
  for (let n = 0; n < sidemenuContents.length; n++) {
    setTimeout(() => {
      sidemenuContents[n].style.top = ('0px');
      sidemenuContents[n].style.opacity = ('1');
      sidemenuContents[n].style.transition = ('all 1s');
    }, (n + 1) * 100);
  }
  for (let i = 0; i < sidemenuList.length; i++) {
    function sideList() {
      sidemenuList[i].style.top = ('0px');
      sidemenuList[i].style.opacity = ('1');
      sidemenuList[i].style.transition = ('all 1s');
    }
    setTimeout(sideList, (i + 1) * 100);
  }
  for (let a = 0; a < sidemenuLink.length; a++) {
    setTimeout(() => {
      sidemenuLink[a].style.top = ('0px');
      sidemenuLink[a].style.opacity = ('1');
      sidemenuLink[a].style.transition = ('all 1.3s');
    }, (a + 1) * 200);
  }
});

sidemenuclose.addEventListener('click', () => {
  for (let n = 0; n < sidemenuContents.length; n++) {
    sidemenuContents[n].style.top = ('150px');
    sidemenuContents[n].style.opacity = ('0');
    sidemenuContents[n].style.transition = ('none');
  }
  for (let i = 0; i < sidemenuList.length; i++) {
    sidemenuList[i].style.top = ('50px');
    sidemenuList[i].style.opacity = ('0');
    sidemenuList[i].style.transition = ('none');
  }
  for (let a = 0; a < sidemenuLink.length; a++) {
    sidemenuLink[a].style.top = ('150px');
    sidemenuLink[a].style.opacity = ('0');
    sidemenuLink[a].style.transition = ('none');
  }
});


// *** banner ***
var swiper__banner = new Swiper(".mySwiper--banner", {
  speed: 1000,
  navigation: {
    nextEl: ".banner-next",
    prevEl: ".banner-prev",
  },
  pagination: {
    clickable: true,
    el: ".banner-pagination-mobile",
  },
});


// *** SI STORY ***
// thumb
var thumbs = new Swiper(".swiper-story-contents", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  width: '100%',
});

// banner swiper + bullet
var story__bullet = ['Material', 'Inspiration', 'Artist', 'View'];
var swiperBullet = new Swiper(".mySwiper-story", {
  speed: 1000,
  pagination: {
    el: '.swiper-story-bullet',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (story__bullet[index]) + '</span></div>';
    }
  },
  navigation: {
    nextEl: '.story-next',
    prevEl: '.story-prev',
  },
  thumbs: {
    swiper: thumbs,
  },
});


// *** SI COLLECTION ***
// swiper new
var swiper__new = new Swiper(".mySwiper-new", {
  spaceBetween: 50,
  speed: 1000,
  scrollbar: {
    el: ".new-scroll",
  },
  navigation: {
    nextEl: ".new-next",
    prevEl: ".new-prev",
  },
  observer: true,
  observeParents: true,
});


// swiper best
var swiper__best = new Swiper(".mySwiper-best", {
  spaceBetween: 100,
  speed: 1000,
  scrollbar: {
    el: ".best-scroll",
  },
  navigation: {
    nextEl: ".best-next",
    prevEl: ".best-prev",
  },
  observer: true,
  observeParents: true,
});

// tab swiper z-index 
const tab__btn = document.querySelectorAll('.tab__text>a');
const tab__slide = document.querySelectorAll('.tab__swiper');

for (let i = 0; i < tab__btn.length; i++) {
  tab__btn[i].addEventListener('click', (e) => {
    e.preventDefault();
    tab__btn.forEach((item) => {
      item.classList.remove('active');
    });
    tab__slide.forEach((item) => {
      item.classList.remove('active');
    });
    tab__btn[i].classList.add('active');
    tab__slide[i].classList.add('active');
  });
}


// *** SI NEWS ***
var news__bullet = ['장 미쉘 바스키야 특별전', '선인 엽서 공모전', '뉴스레터 102호'];
var swiperBullet = new Swiper(".mySwiper-news", {
  speed: 1000,
  pagination: {
    el: '.swiper-news-bullet',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><strong> EVENT </strong><br><span>' + (news__bullet[index]) + '</span></div>';
    }
  },
  navigation: {
    nextEl: ".news-next",
  },
  scrollbar: {
    el: ".news-scroll",
  },
});


// maps__searchBTN
const maps__search = document.querySelector('.maps__input--btn');
maps__search.addEventListener('click', () => {
  alert('매장명 및 지역명을 입력해주세요.');
});

//  *** footer family menu ***
const family__open = document.querySelector(".footer__open>a");
const family__close = document.querySelector(".footer__close");
const family__menu = document.querySelector(".footer__listbox");

family__open.addEventListener('click', (e) => {
  e.preventDefault();
  family__menu.style.height = ('140px');
});

family__close.addEventListener('click', (e) => {
  e.preventDefault();
  family__menu.style.height = ('0px');
});


// *** top button event ***
const topbtn = document.getElementById('topbtn');
const topbtn__text = document.querySelector('.top--move');
topbtn__text.onclick = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const topbtn__open = document.querySelector('.side--open');
const topbtn__close = document.querySelector('.side--close');
const topbtn__banner = document.querySelector('.topbtn__sidemenu');
topbtn__open.addEventListener('click', (e) => {
  e.preventDefault();
  topbtn__banner.classList.add('active');
  searchbackground.classList.add('open');
  topbtn.style.zIndex = '6';
});
topbtn__close.addEventListener('click', (e) => {
  e.preventDefault();
  topbtn__banner.classList.remove('active');
  searchbackground.classList.remove('open');
  topbtn.style.zIndex = '1';
});

document.addEventListener('scroll', () => {
  if (window.scrollY > '0') {
    topbtn__text.classList.add('hide');
  } else {
    topbtn__text.classList.remove('hide');
  }
});


// *** topbtn Intersection Observer ***
const topbtn_op = {
  root: null,
  rootMargin: "0px",
  threshold: .001,
}
const topbtn_observer = new IntersectionObserver(entries => {
  entries.forEach(entries => {
    if (entries.isIntersecting) {
      topbtn.classList.add('active');
    } else {
      topbtn.classList.remove('active');
    }
  });
}, topbtn_op);

const topbtn_ob = document.querySelectorAll('#footer');
topbtn_ob.forEach(el => topbtn_observer.observe(el));


// *** section Intersection Observer *** 
const options = {
  root: null,
  rootMargin: "0px",
  threshold: .4,
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, options);
const titleList = document.querySelectorAll('.observer');
titleList.forEach(el => observer.observe(el));


// 반드시 지울것 새로고침 시 상단 이동 코드임🎈
// *** browser refresh ***
// window.onload = function () {
//   body.classList.remove('scroll-down');
//   setTimeout(function () {
//     titleList.forEach((items) => {
//       items.classList.remove('active');
//     });
//     scrollTo(0, 0);
//   }, 100);
// }








