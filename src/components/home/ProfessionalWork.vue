<template>
  <section class="professionalWork d-flex align-items-center flex-column">
    <h2>用專業的心，做專業的事</h2>

    <div class="album">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-1.png?raw=true"
            />
            <h5 class="card-text">單一價格</h5>
            <div class="card-body">
              <p class="">無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-2.png?raw=true"
            />
            <h5 class="card-text">20 分鐘即可取件</h5>
            <div class="card-body">
              <p class="">
                為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20
                分鐘即可完成。
              </p>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-3.png?raw=true"
            />
            <h5 class="card-text">安心售後服務</h5>
            <div class="card-body">
              <p class="">
                我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
              </p>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              class="glass"
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-sectioin2-4.png?raw=true"
            />
            <h5 class="card-text">關於鏡片</h5>
            <div class="card-body">
              <p class="">使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.professionalWork {
  background: #fbf2f2 0% 0% no-repeat padding-box;
  padding: 80px 0px;
}

.professionalWork h2 {
  font: normal normal bold 48px/72px Source Han Sans TW;
  color: #650300;
}

.professionalWork .col img {
  width: 84px;
  height: 84px;
}

.professionalWork .col .glass {
  width: 100px;
  height: 84px;
}

.professionalWork h5 {
  font: normal normal bold 24px/36px Source Han Sans TW;
  color: #650300;
}

.professionalWork .card-body p {
  font: normal normal normal 16px/24px Source Han Sans TW;
  color: #000000;
}

@media (max-width: 768px) {
  .professionalWork {
    padding: 40px 0px;
  }
  .professionalWork .col img {
    width: 83px;
    height: 83px;
  }

  .professionalWork h5 {
    font: normal normal bold 24px/36px Source Han Sans TW;
    color: #650300;
  }

  .professionalWork .card-body p {
    font: normal normal normal 16px/24px Source Han Sans TW;
    color: #000000;
  }
}

@media (max-width: 500px) {
  .professionalWork .col img {
    margin: 32px 0 24px 0;
  }

  .professionalWork h2 {
    font: normal normal bold 24px/36px Source Han Sans TW;
    color: #650300;
  }
}
</style>
