<template>
  <div class="storePage">
    <div class="container">
      <h1>門市據點</h1>
      <div class="selectArea d-flex align-items-center">
        <h5>選擇分店</h5>
        <select v-model="selectedstorePage" class="" name="">
          <option value="台北中山旗艦店" selected>台北中山旗艦店</option>
          <option value="台北綠園店">台北綠園店</option>
          <option value="台中清水旗艦店">台中清水旗艦店</option>
          <option value="高雄中正形象店">高雄中正形象店</option>
          <option value="高雄夢時代店">高雄夢時代店</option>
        </select>
      </div>

      <div class="container marketing">
        <div class="row featurette">
          <div class="col-md-5 order-md-1 webimginfo">
            <div class="card">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/storepage-1.png?raw=true"
              />
              <div class="card-body">
                <h3 class="border-bottom pb-2">台北中山旗艦店</h3>
                <div class="mt-3">
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> call </span>
                    <h4>電話：(02)000-1234</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> schedule </span>
                    <h4>營業時間：10:00-21:00</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> location_on </span>
                    <h4>地址：台北市中山區南京東路25巷2-1號</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 order-md-1 appimginfo">
            <div class="card d-flex flex-row">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/storepage-1.png?raw=true"
              />
              <div class="card-body">
                <h3 class="border-bottom pb-2">台北中山旗艦店</h3>
                <div class="mt-3">
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> call </span>
                    <h4>電話：(02)000-1234</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> schedule </span>
                    <h4>營業時間：10:00-21:00</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> location_on </span>
                    <h4>地址：台北市中山區南京東路25巷2-1號</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-7 order-md-2 webimginfo">
            <gmp-map center="25.052026748657227,121.53743743896484" zoom="14" map-id="DEMO_MAP_ID">
              <gmp-advanced-marker
                position="25.052026748657227,121.53743743896484"
                title="My location"
              ></gmp-advanced-marker>
            </gmp-map>
          </div>
          <div class="col-md-12 order-md-2 appimginfo">
            <gmp-map center="25.052026748657227,121.53743743896484" zoom="14" map-id="DEMO_MAP_ID">
              <gmp-advanced-marker
                position="25.052026748657227,121.53743743896484"
                title="My location"
              ></gmp-advanced-marker>
            </gmp-map>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedstorePage = ref('台北中山旗艦店') // 初始值
</script>

<style>
.storePage {
  margin-top: 96px;
  margin-bottom: 80px;
}

.storePage h1 {
  font: normal normal bold 48px/72px Source Han Sans TW;
  color: #000000;
  border-left: 8px solid #9f1213;
  padding-left: 16px;
  margin-bottom: 33px;
}

.storePage h5 {
  margin: 0px;
  font: normal normal normal 24px/36px Source Han Sans TW;
  color: #000000;
  margin-right: 16px;
}

.storePage select {
  width: 304px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ced4da;
  color: #495057;
}

.storePage .selectArea {
  margin-bottom: 46px;
}

.storePage h3 {
  font: normal normal normal 24px/36px Source Han Sans TW;
  color: #212529;
}

.storePage h4 {
  font: normal normal normal 20px/30px Source Han Sans TW;
  color: #212529;
}

.storePage .material-symbols-outlined {
  margin-right: 8px;
}

.storePage button {
  border-radius: 0px;
  width: 100%;
  height: 59px;
}

.storePage .card {
  height: 100%;
}

.storePage .card-body {
  padding: 8px 16px 8px 28px;
}

.storePage gmp-map {
  height: 100%;
}

.storePage .webimginfo {
  display: block;
}

.storePage .appimginfo {
  display: none;
}

@media (max-width: 768px) {
  .storePage .container {
    width: 100%;
  }

  .storePage img {
    width: 50%;
  }

  .storePage .card {
    border: 0px;
  }

  .storePage .card-body {
    border: 1px solid #ced4da;
    margin-left: 24px;
  }
  /* Tablet */
  .storePage gmp-map {
    margin-top: 40px;
    height: 348px; /* Adjust this value as needed */
  }

  .storePage h3 {
    font: normal normal normal 24px/36px Source Han Sans TW;
    color: #212529;
  }

  .storePage h4 {
    font: normal normal normal 20px/30px Source Han Sans TW;
    color: #212529;
  }

  .storePage .appimginfo {
    display: block;
  }
  .storePage .webimginfo {
    display: none;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 1000px !important;
    }
  }
}

@media (max-width: 556px) {
  .storePage img {
    width: 100%;
  }

  .storePage {
    margin-top: 40px;
    margin-bottom: 64px;
  }

  .storePage .card-body {
    margin-left: 0px;
  }
  .storePage h1 {
    font: normal normal bold 24px/36px Source Han Sans TW;
  }

  .storePage h5 {
    font: normal normal normal 16px/24px Source Han Sans TW;
    margin-right: 8px;
  }

  .storePage select {
    width: 276px;
  }

  .storePage .selectArea {
    margin-bottom: 46px;
  }

  .storePage h3 {
    font: normal normal normal 24px/36px Source Han Sans TW;
    color: #212529;
  }

  .storePage h4 {
    font: normal normal normal 20px/30px Source Han Sans TW;
    color: #212529;
  }
  .storePage .appimginfo {
    display: none;
  }
  .storePage .webimginfo {
    display: block;
  }
}
</style>
