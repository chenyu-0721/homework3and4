<template>
  <section class="bgImage d-flex align-items-center">
    <div class="container d-flex align-items-end flex-column">
      <h3>Promise-Desert 2020 早春系列</h3>
      <h1>看得清，才能看得遠</h1>
      <button type="button" class="btn">立即購買</button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.bgImage {
  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header.png?raw=true');
  background-size: cover;
  background-repeat: no-repeat;
  height: 787px;
}

.bgImage h3 {
  font: normal normal normal 36px/54px Source Han Sans TW;
  color: #650300;
}

.bgImage h1 {
  font: normal normal bold 64px/96px Source Han Sans TW;
  color: #650300;
}

.bgImage button {
  background: var(--unnamed-color-aa0601) 0% 0% no-repeat padding-box;
  background: #aa0601 0% 0% no-repeat padding-box;
  font: normal normal medium 20px/30px Source Han Sans TW;
  color: #ffffff;
}

.bgImage button:hover {
  background-color: #650300;
}

@media (max-width: 768px) {
  .bgImage {
    background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true');
    height: 787px;
  }

  .bgImage h1 {
    font: normal normal bold 36px/54px Source Han Sans TW;
  }
  .bgImage h3 {
    font: normal normal normal 18px/35px Source Han Sans TW;
  }
}

@media (max-width: 500px) {
  .bgImage {
    height: 396px;
  }

  .bgImage h3 {
    font: normal normal normal 16px/24px Source Han Sans TW;
  }

  .bgImage h1 {
    font: normal normal bold 24px/36px Source Han Sans TW;
  }

  .bgImage button {
    font: normal normal medium 20px/30px Source Han Sans TW;
  }
}
</style>
