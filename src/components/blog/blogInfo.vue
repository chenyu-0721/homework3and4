<template>
  <div class="blogInfo">
    <div class="container">
      <div>
        <div class="borderBottom">
          <h5>首頁 / 部落格 / 特別企劃 / <span class="love">情人特別企劃</span></h5>
          <div class="d-flex">
            <h4 class="pe-2">#special</h4>
            <h4>#event</h4>
          </div>
          <div class="d-flex justify-content-between">
            <div class="col-md-8">
              <h1>情人特別企劃</h1>
              <h3>2020 Valentine’s Special</h3>
              <img
                class="img-fluid"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-1.png?raw=true"
              />
              <p>
                一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
                本次拍攝的鏡框款式與 NEEDS CLASSIC
                聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
              </p>
              <img
                class="img-fluid"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-2.png?raw=true"
              />
              <p>
                一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
                本次拍攝的鏡框款式與 NEEDS CLASSIC
                聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
              </p>
              <img
                class="img-fluid"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-3.png?raw=true"
              />
              <p>
                一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
                本次拍攝的鏡框款式與 NEEDS CLASSIC
                聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
              </p>
              <img
                class="img-fluid"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-4.png?raw=true"
              />
              <div class="d-flex flex-column">
                <span class="font">2/14(五)-2/20(日)</span>
                <span class="font">至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個 </span>
                <span class="font"> 期間優惠還有~~持他牌鏡框更換鏡片 </span>
                <span class="font"> 薄型非球面鏡片折300元 !</span>
                <span class="font">濾藍光鏡片折500元 </span>
                <span class="font">快快帶上另一半</span>
                <span class="font">讓彼此每一次睜開眼，都被愛的視線包圍</span>
              </div>
              <div class="d-flex align-items-center mt40">
                <a href="/">Share</a>
                <img
                  class="img-fluid me-3 imgIcon"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-facebook.png?raw=true"
                />
                <img
                  class="img-fluid imgIcon"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-instagram.png?raw=true"
                />
              </div>
            </div>
            <div class="col-md-4 ps-3 byeTag">
              <div class="d-flex align-items-center bottomTag mb13">
                <span class="material-symbols-outlined tagInco"> label </span>
                <h2>TAGS</h2>
              </div>
              <div class="d-flex">
                <h4 class="pe-3 tagh4">#special</h4>
                <h4 class="tagh4">#sale</h4>
              </div>
              <div class="d-flex">
                <h4 class="pe-3 tagh4">#new_item</h4>
                <h4 class="tagh4">#interview</h4>
              </div>
              <div class="d-flex">
                <h4 class="pe-3 tagh4">#trivia</h4>
                <h4 class="tagh4">#news</h4>
              </div>
              <h4 class="tagh4">#event</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between next">
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined"> arrow_back </span>
          <h6>上一篇：街頭潮人訪問 1</h6>
        </div>
        <div class="d-flex align-items-center">
          <h6>下一篇：街頭潮人訪問 2</h6>
          <span class="material-symbols-outlined"> arrow_forward </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.blogInfo {
  margin-top: 24px;
}

.blogInfo h5 {
  font: normal normal normal 16px/24px Source Han Sans TW;
  color: #000000;
}

.blogInfo h1 {
  font: normal normal normal 48px/72px Source Han Sans TW;
  color: #000000;
  margin-top: 4px;
}

.blogInfo .love {
  color: #aa0601;
}

.blogInfo .tagh4,
.blogInfo h4 {
  font: normal normal bold 24px/36px Roboto;
  color: #aa0601;
  margin-bottom: 4px;
}

.blogInfo h3 {
  font: normal normal medium 24px/36px Roboto;
  color: #000000;
  margin-bottom: 16px;
}

.blogInfo img {
  margin-bottom: 8px;
}

.blogInfo p {
  font: normal normal normal 16px/24px Source Han Sans TW;
  color: #555555;
  margin-bottom: 40px;
}

.blogInfo .font {
  font: normal normal normal 16px/24px Source Han Sans TW;
  color: #555555;
}

.blogInfo a {
  font: normal normal bold 16px/24px Roboto;
  color: #0a0a0a;
  text-decoration: none;
  margin-right: 16px;
}

.blogInfo .imgIcon {
  width: 24px;
  height: 24px;
}

.blogInfo .mt40 {
  margin-top: 40px;
}

.blogInfo .borderBottom {
  border-bottom: 1px solid #707070;
  padding-bottom: 16px;
  margin-bottom: 24px;
}

.blogInfo h6 {
  margin: 0px;
  font: normal normal normal 16px/24px Source Han Sans TW;
  color: #000000;
}

.blogInfo h2 {
  font: normal normal bold 32px/48px Roboto;
  margin: 0px;
  color: #aa0601;
}

.bottomTag .material-symbols-outlined {
  color: #aa0601;
  font-size: 38px;
}

.blogInfo .next {
  margin-bottom: 80px;
}

@media (max-width: 850px) {
  .blogInfo .tagh4 {
    font: normal normal bold 18px/30px Roboto;
  }
}

@media (max-width: 768px) {
  .blogInfo {
    margin-top: 8px;
  }

  .blogInfo h5 {
  }

  .blogInfo h1 {
    margin: 0px;
  }

  .blogInfo .love {
  }

  .blogInfo h4 {
  }

  .blogInfo h3 {
    margin-bottom: 24px;
  }

  .blogInfo img {
    margin-bottom: 8px;
  }

  .blogInfo p {
    font: normal normal normal 16px/24px Source Han Sans TW;
    color: #555555;
    margin-bottom: 24px;
  }

  .blogInfo h6 {
  }

  .blogInfo h2 {
    font: normal normal bold 16px/24px Roboto;
  }

  .blogInfo .tagh4 {
    font: normal normal bold 16px/24px Roboto;
  }

  .bottomTag .material-symbols-outlined {
    color: #aa0601;
    font-size: 25px;
  }

  .blogInfo .mb13 {
    margin-bottom: 13px;
  }

  .blogInfo .next {
    margin-bottom: 80px;
  }
}

@media (max-width: 550px) {
  .blogInfo {
    margin-top: 16px;
  }

  .blogInfo h1 {
    font: normal normal normal 24px/36px Source Han Sans TW;
  }

  .blogInfo h4 {
    font: normal normal bold 16px/24px Roboto;
  }

  .blogInfo .borderBottom {
    border: 0px;
  }

  .blogInfo .next {
    display: none !important;
  }

  .blogInfo .byeTag {
    display: none !important;
  }
}
</style>
