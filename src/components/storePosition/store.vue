<template>
  <div class="store">
    <div class="container">
      <h1>門市據點</h1>
      <div class="selectArea d-flex align-items-center">
        <h5>選擇地區</h5>
        <select class="" name="">
          <option value="台北市" selected>台北市</option>
          <option value="新北市">新北市</option>
          <option value="台中市">台中市</option>
        </select>
      </div>
      <div class="album">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true"
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
              <router-link to="/storepage">
                <button class="btn btn-dark">詳細資訊</button></router-link
              >
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-2.png?raw=true"
              />
              <div class="card-body">
                <h3 class="border-bottom pb-2">台北綠園店</h3>
                <div class="mt-3">
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> call </span>
                    <h4>電話：(02)000-2345</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> schedule </span>
                    <h4>營業時間：10:00-21:00</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> location_on </span>
                    <h4>地址：台北市中正區復興南路 132-1 號</h4>
                  </div>
                </div>
              </div>
              <button class="btn btn-dark">詳細資訊</button>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-3.png?raw=true"
              />
              <div class="card-body">
                <h3 class="border-bottom pb-2">台中清水旗艦店</h3>
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
                    <h4>地址：台中市清水區經南一路 23 號 8 樓</h4>
                  </div>
                </div>
              </div>
              <button class="btn btn-dark">詳細資訊</button>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-4.png?raw=true"
              />
              <div class="card-body">
                <h3 class="border-bottom pb-2">高雄中正形象店</h3>
                <div class="mt-3">
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> call </span>
                    <h4>電話：(07)000-2345</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> schedule </span>
                    <h4>營業時間：10:00-21:00</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> location_on </span>
                    <h4>地址：高雄市苓雅區中正路 38 號 12 樓</h4>
                  </div>
                </div>
              </div>
              <button class="btn btn-dark">詳細資訊</button>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-5.png?raw=true"
              />
              <div class="card-body">
                <h3 class="border-bottom pb-2">高雄夢時代店</h3>
                <div class="mt-3">
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> call </span>
                    <h4>電話：(07)000-1234</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> schedule </span>
                    <h4>營業時間：10:00-21:00</h4>
                  </div>
                  <div class="d-flex">
                    <span class="material-symbols-outlined"> location_on </span>
                    <h4>營業時間：10:00-21:00</h4>
                  </div>
                </div>
              </div>
              <button class="btn btn-dark">詳細資訊</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.store {
  margin-top: 96px;
  margin-bottom: 80px;
}

.store h1 {
  font: normal normal bold 48px/72px Source Han Sans TW;
  color: #000000;
  border-left: 8px solid #9f1213;
  padding-left: 16px;
  margin-bottom: 33px;
}

.store h5 {
  margin: 0px;
  font: normal normal normal 24px/36px Source Han Sans TW;
  color: #000000;
  margin-right: 16px;
}

.store select {
  width: 304px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ced4da;
  color: #495057;
}

.store .selectArea {
  margin-bottom: 46px;
}

.store h3 {
  font: normal normal normal 24px/36px Source Han Sans TW;
  color: #212529;
}

.store h4 {
  font: normal normal normal 20px/30px Source Han Sans TW;
  color: #212529;
}

.store .material-symbols-outlined {
  margin-right: 8px;
}

.store button {
  border-radius: 0px;
  width: 100%;
  height: 59px;
}

.store .card {
  height: 100%;
}

.store .card-body {
  padding: 8px 16px 8px 28px;
}
</style>
