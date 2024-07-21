<template>
  <section class="coBrandedDesignFrame">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fs-48">聯名設計鏡框</h2>
      <div class="album">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 text-center g-2">
            <div class="col">
              <img
                class="imgWeb"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1.png?raw=true"
              />
              <img
                class="imgApp"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1-sm.png?raw=true"
              />
              <div class="card-body">
                <h3 class="card-text fs-48">DOUBLE A+</h3>
              </div>
            </div>
            <div class="col">
              <img
                class="imgWeb"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2.png?raw=true"
              />
              <img
                class="imgApp"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2-sm.png?raw=true"
              />
              <div class="card-body">
                <h3 class="card-text fs-48">YOUTH</h3>
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

@media (max-width: 768px) {
  .coBrandedDesignFrame {
    background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true');
  }

  .coBrandedDesignFrame .imgApp {
    display: block;
  }

  .coBrandedDesignFrame .imgWeb {
    display: none;
  }
}

.coBrandedDesignFrame h2 {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 48px;
}

.coBrandedDesignFrame .col img {
  max-width: 100%;
  height: auto;
}

.coBrandedDesignFrame .card-body {
  background: #ffffff;
}

.coBrandedDesignFrame .card-body h3 {
  color: #aa0601;
  font-style: italic;
}

.coBrandedDesignFrame .col {
  padding: 0px;
}
</style>
