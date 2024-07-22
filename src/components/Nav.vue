<template>
  <section class="mainNav">
    <div class="container">
      <header class="">
        <div>
          <a href="/">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true"
          /></a>
        </div>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/seriesframes" class="nav-link" aria-current="page"
              >系列鏡框</router-link
            >
          </li>
          <li class="nav-item"><a href="#" class="nav-link">門市據點</a></li>
          <li class="nav-item"><a href="#" class="nav-link">部落格</a></li>
          <li class="nav-item"><a href="#" class="nav-link">常見問題</a></li>
        </ul>
      </header>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.mainNav {
  background-color: #aa0601;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-content: center;
}

.mainNav header img {
  width: 80px;
  height: 49px;
}

.mainNav .nav-link {
  color: white;
  font-size: 20px;
}

.mainNav .nav-link:focus,
.mainNav .nav-link:hover {
  color: #f6e6e5;
}

.mainNav header {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 500px) {
  .mainNav {
    padding: 0px;
  }

  .mainNav header {
    display: flex;
    flex-direction: column;
  }

  .mainNav .nav {
    flex-direction: row;
    justify-content: space-between;
  }
  .mainNav .nav-pills {
    display: flex;
    flex-wrap: wrap;
  }
  .mainNav .nav-item {
    flex: 1 1 50%;
    text-align: center;
  }

  .mainNav .nav-link {
    border: 1px solid white;
    padding: 12px;
    border-radius: 0px !important;
  }
  .mainNav {
    display: block;
    padding-bottom: 0px;
  }
  .mainNav .container {
    padding: 0px;
  }

  .mainNav header img {
    margin: 12px 15px;
  }
}
</style>
