<template>
  <section class="professionalWork d-flex align-items-center flex-column">
    <h2 class="fs-48">用專業的心，做專業的事</h2>

    <div class="album">
      <div class="container">
        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col d-flex flex-column align-items-center">
            <span class="material-symbols-outlined"> paid </span>
            <h5 class="card-text fs-4">單一價格</h5>
            <div class="card-body">
              <p class="fs-6">無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <span class="material-symbols-outlined"> schedule </span>
            <h5 class="card-text fs-4">20 分鐘即可取件</h5>
            <div class="card-body">
              <p class="fs-6">
                為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20
                分鐘即可完成。
              </p>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <span class="material-symbols-outlined"> favorite </span>
            <h5 class="card-text fs-4">安心售後服務</h5>
            <div class="card-body">
              <p class="fs-6">
                我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
              </p>
            </div>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <span class="material-symbols-outlined"> voicemail </span>
            <h5 class="card-text fs-4">關於鏡片</h5>
            <div class="card-body">
              <p class="fs-6">使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
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
.professionalWork {
  box-sizing: border-box;
  padding: 80px 0;
  background-color: #fbf2f2;
  color: #650300;
}

.professionalWork h2 {
  font-weight: bold;
  margin-bottom: 33px;
}

.professionalWork .col span {
  font-size: 84px;
  margin-bottom: 18px;
}

.professionalWork h5 {
  font-weight: bold;
  margin-bottom: 8px;
}

.professionalWork .card-body p {
  color: #000000;
}
</style>
