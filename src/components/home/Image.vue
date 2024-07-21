<template>
  <section class="bgImage d-flex align-items-center">
    <div class="container d-flex align-items-end flex-column">
      <h3 class="fs-36">Promise-Desert 2020 早春系列</h3>
      <h1 class="fs-64">看得清，才能看得遠</h1>
      <button type="button" class="btn fs-5">立即購買</button>
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

@media (max-width: 768px) {
  .bgImage {
    background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true');
  }
}

.bgImage h3 {
  color: #650300;
}

.bgImage h1 {
  color: #650300;
  font-weight: bold;
}

.bgImage button {
  color: #ffffff;
  background-color: #aa0601;
}

.bgImage button:hover {
  background-color: pink;
}
</style>
