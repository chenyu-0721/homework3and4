<template>
  <section class="classicFrame">
    <div class="d-flex flex-column align-items-center">
      <h2 class="fs-48">經典系列鏡框</h2>
    </div>
    <div class="album">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4">
          <div class="col">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-1.png?raw=true"
            />
            <div class="card-body">
              <h3 class="card-text fs-48">OPTICAL</h3>
            </div>
          </div>
          <div class="col">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-2.png?raw=true"
            />
            <div class="card-body">
              <h3 class="card-text fs-48">SUNGLASSES</h3>
            </div>
          </div>
          <div class="col">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-3.png?raw=true"
            />
            <div class="card-body">
              <h3 class="card-text fs-48">FUNCTIONAL</h3>
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
  box-sizing: border-box;
  padding: 80px 0;
}

.classicFrame h2 {
  color: #650300;
  font-weight: bold;
  margin-bottom: 48px;
}

.classicFrame .col img {
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
}

.classicFrame .col h3 {
  color: #aa0601;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  flex-wrap: wrap;
}
</style>
