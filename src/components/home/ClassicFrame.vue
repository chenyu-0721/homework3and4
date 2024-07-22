<template>
  <section class="classicFrame">
    <div class="d-flex flex-column align-items-center">
      <h2 class="">經典系列鏡框</h2>
    </div>
    <div class="album">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-1.png?raw=true"
            />
            <div class="card-body">
              <h3 class="card-text">OPTICAL</h3>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-2.png?raw=true"
            />
            <div class="card-body">
              <h3 class="card-text">SUNGLASSES</h3>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-3.png?raw=true"
            />
            <div class="card-body">
              <h3 class="card-text">FUNCTIONAL</h3>
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
.classicFrame {
  padding: 80px 0;
}

.classicFrame h2 {
  font: normal normal bold 48px/72px Source Han Sans TW;
  color: #650300;
}

.classicFrame .col img {
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
}

.classicFrame .col h3 {
  font: italic normal 900 48px/72px Roboto;
  color: #aa0601;
  text-align: center;
}

@media (max-width: 768px) {
  .classicFrame {
    padding: 80px 0;
  }

  .classicFrame .col img {
    width: 336px;
    height: 336px;
  }
}

@media (max-width: 375px) {
  .classicFrame {
    padding: 40px 0;
  }

  .classicFrame h2 {
    font: normal normal bold 24px/36px Source Han Sans TW;
    margin-bottom: 24px;
  }

  .classicFrame .col h3 {
    margin-bottom: 24px;
  }

  .classicFrame .col img {
    width: 348px;
    height: 348px;
  }
}
</style>
