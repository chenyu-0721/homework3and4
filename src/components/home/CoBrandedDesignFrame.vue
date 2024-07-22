<template>
  <section class="coBrandedDesignFrame">
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <h2 class="">聯名設計鏡框</h2>
      <div class="album">
        <div class="">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 text-center g-3">
            <div class="col d-flex flex-column align-items-center">
              <img
                class="imgWeb"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1.png?raw=true"
              />
              <img
                class="imgApp"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1-sm.png?raw=true"
              />
              <div class="card-body border">
                <h3 class="card-text">DOUBLE A+</h3>
              </div>
            </div>
            <div class="col d-flex flex-column align-items-center">
              <img
                class="imgWeb"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2.png?raw=true"
              />
              <img
                class="imgApp"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2-sm.png?raw=true"
              />
              <div class="card-body border">
                <h3 class="card-text">YOUTH</h3>
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
.coBrandedDesignFrame {
  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg.png?raw=true');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
}

.coBrandedDesignFrame .imgWeb {
  display: block;
}

.coBrandedDesignFrame .imgApp {
  display: none;
}

.coBrandedDesignFrame h2 {
  font: normal normal bold 48px/72px Source Han Sans TW;
  color: #ffffff;
  margin-bottom: 48px;
}

.coBrandedDesignFrame .col img {
  max-width: 100%;
  height: auto;
}

.coBrandedDesignFrame .card-body {
  background: #ffffff;
  width: 100%;
}

.coBrandedDesignFrame .card-body h3 {
  font: italic normal 900 48px/72px Roboto;
  color: #aa0601;
}

.coBrandedDesignFrame .col {
  padding: 0px;
}

@media (max-width: 768px) {
  .coBrandedDesignFrame {
    background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true');
  }

  .coBrandedDesignFrame .card-body h3 {
    font: italic normal 900 48px/72px Roboto;
    color: #aa0601;
  }
}

@media (max-width: 375px) {
  .coBrandedDesignFrame {
    padding: 40px 0;
  }

  .coBrandedDesignFrame .container {
    padding: 0px 14px 0 13px;
  }
  .coBrandedDesignFrame h2 {
    font: normal normal bold 24px/36px Source Han Sans TW;
    margin-bottom: 24px;
  }

  .coBrandedDesignFrame .col img {
    width: 348px;
    height: 240px;
  }

  .coBrandedDesignFrame .card-body {
    width: 348px;
    height: 88px;
  }

  .coBrandedDesignFrame .card-body h3 {
    font: italic normal 900 48px/72px Roboto;
    color: #aa0601;
  }

  .coBrandedDesignFrame .col {
    padding: 0px;
  }
}
</style>
