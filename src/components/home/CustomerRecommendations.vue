<template>
  <section class="customerRecommendations d-flex align-items-center flex-column">
    <h2 class="">顧客推薦</h2>
    <div class="album">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-1.png?raw=true"
              />
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="content">
                  <p class="card-text">Jessy</p>
                  <p>眼鏡品質優良，下次還會想來這邊購買！</p>
                </div>
                <span>2021/06/20</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-2.png?raw=true"
              />
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="content">
                  <p class="card-text">凱倫</p>
                  <p>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p>
                </div>
                <span>2021/04/18</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-3.png?raw=true"
              />
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="content">
                  <p class="card-text">悠悠</p>
                  <p>謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</p>
                </div>
                <span>2020/12/25</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-4.png?raw=true"
              />
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="content">
                  <p class="card-text">Kyuan</p>
                  <p>服務很好，品質沒有任何問題，非常喜歡。</p>
                </div>
                <span>2020/10/31</span>
              </div>
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
.customerRecommendations {
  margin: 80px 0;
}

.customerRecommendations h2 {
  font: normal normal bold 48px/72px Source Han Sans TW;
  color: #650300;
  margin-bottom: 48px;
}

.customerRecommendations .col img {
  width: 100%;
  height: auto;
}

.customerRecommendations .col .card {
  height: 100%;
  font: normal normal medium 16px/24px Source Han Sans TW;
  color: #000000;
  box-shadow: 0px 2px 6px #00000029 !important;
}

.customerRecommendations .card-body p {
  font: normal normal normal 16px/24px Source Han Sans TW;
  color: #000000;
}

.customerRecommendations .card-body span {
  font: normal normal normal 14px/21px Source Han Sans TW;
  color: #707070;
}

@media (max-width: 768px) {
  .customerRecommendations {
    margin: 80px 0;
  }
}

@media (max-width: 500px) {
  .customerRecommendations {
    margin: 4mm 0;
  }

  .customerRecommendations h2 {
    font: normal normal bold 24px/36px Source Han Sans TW;
  }

  .customerRecommendations .card-body p {
    font: normal normal normal 16px/24px Source Han Sans TW;
    margin: 8px 0;
  }

  .customerRecommendations .card-body span {
    font: normal normal normal 14px/21px Source Han Sans TW;
  }
}
</style>
