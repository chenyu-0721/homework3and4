<template>
  <section class="mainNav flexPostion">
    <div class="container">
      <header class="">
        <div>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true"
          />
        </div>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" class="nav-link fs-5" aria-current="page">系列鏡框</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link fs-5">門市據點</a></li>
          <li class="nav-item"><a href="#" class="nav-link fs-5">部落格</a></li>
          <li class="nav-item"><a href="#" class="nav-link fs-5">常見問題</a></li>
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
}

.mainNav header img {
  width: 80px;
  height: 49px;
}

.mainNav .nav-link {
  color: white;
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
    border-radius: 0px !important;
  }
  .mainNav .flexPostion {
    display: none;
  }
  .mainNav .container {
    padding: 0px;
  }

  .mainNav header img {
    margin: 15px;
  }
}

.mainNav .flexPostion {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
