<template>
  <footer>
    <div class="container">
      <div class="border-bottom">
        <div class="list d-flex justify-content-between">
          <div class="webDisplay">
            <div class="d-flex flex-column">
              <ul class="nav-list d-flex pt-2">
                <li><a href="#">首頁</a></li>
                <li><a href="#">系列鏡框</a></li>
                <li><a href="#">門市據點</a></li>
                <li><a href="#">部落格</a></li>
                <li><a href="#">常見問題</a></li>
              </ul>
              <p class="text-white mt-4 info">
                <span class="material-symbols-outlined">call</span>0800-000-00
              </p>
              <p class="text-white info">
                <span class="material-symbols-outlined">mail</span>glasses@business.com
              </p>
            </div>
          </div>
          <div class="appDisplay">
            <div class="d-flex flex-column">
              <p class="text-white info">
                <span class="material-symbols-outlined">call</span>0800-000-00
              </p>
              <p class="text-white info">
                <span class="material-symbols-outlined">mail</span>glasses@business.com
              </p>
            </div>
          </div>
          <div class="footerLogo">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic-social-fb.png?raw=true"
              alt="Facebook"
            />
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_ig.png?raw=true"
              alt="Instagram"
            />
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_line.png?raw=true"
              alt="Line"
            />
          </div>
        </div>
      </div>

      <div class="center mt-3 pb-3">
        <p class="bottomText">Copyright © 2020 Glasses. All rights reserved.</p>
        <ul class="d-flex footer-links">
          <li>隱私權政策</li>
          <li>服務條款</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer {
  background-color: #aa0601;
  padding-top: 60px;
}

footer a {
  text-decoration: none;
  font: normal normal normal 16px/24px Source Han Sans TW;
  color: #ffffff;
  margin-right: 15px;
}

footer a:hover {
  color: pink;
}

footer .list {
  margin-bottom: 20px;
}

footer ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

footer li {
  font: normal normal normal 14px/21px Source Han Sans TW;
  letter-spacing: 0px;
  color: #ffffff;
}

footer .footerLogo img {
  width: 48px;
  height: 48px;
  margin-right: 16px;
}

footer .info {
  font: normal normal normal 36px/54px Source Han Sans TW;
  color: #ffffff;
}

footer .material-symbols-outlined {
  font-size: 36px;
  margin-right: 22px;
}

footer .footer-links li {
  margin-right: 16px;
}

footer .center {
  display: flex;
  justify-content: space-between;
}

footer .center .bottomText {
  font: normal normal normal 16px/24px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
}

footer .webDisplay {
  display: block;
}

footer .appDisplay {
  display: none;
}

@media (max-width: 768px) {
  footer {
    padding-top: 56px;
  }

  footer .footerLogo img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 595px) {
  footer .center {
    align-items: start;
    flex-direction: column;
  }

  footer .webDisplay {
    display: none;
  }

  footer .appDisplay {
    display: block;
  }

  footer {
    padding-top: 24px;
  }

  footer .footerLogo img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  footer .info {
    font: normal normal normal 16px/24px Source Han Sans TW;
  }

  footer .material-symbols-outlined {
    font-size: 18px;
    margin-right: 11px;
  }

  footer .list {
    margin-bottom: 5px;
  }

  footer .center .bottomText {
    font: normal normal normal 16px/24px Roboto;
  }

  footer li {
    font: normal normal normal 16px/24px Source Han Sans TW;
  }
}
</style>
