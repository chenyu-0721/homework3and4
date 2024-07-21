<template>
  <section class="callMe">
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <h2 class="fs-48">聯絡我們</h2>
        <p class="fs-5">
          我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
        </p>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label fs-6">姓名</label>
        <input type="name" class="form-control labelColor" id="name" placeholder="陳小明" />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label fs-6">連絡電話</label>
        <input type="phone" class="form-control labelColor" id="name" placeholder="0912-345-678" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label fs-6">電子郵件</label>
        <input
          type="email"
          class="form-control labelColor"
          id="email"
          placeholder="example@email.com"
        />
      </div>
      <div class="mb-3">
        <label for="feedback" class="form-label fs-6">意見反饋</label>
        <textarea
          class="form-control labelColor"
          id="feedback"
          placeholder="請輸入您的意見"
          rows="4"
        ></textarea>
      </div>
      <div class="form-check">
        <input class="form-check-input checkboxStyle" type="checkbox" value="" id="iknow" />
        <label class="form-check-label fs-6" for="iknow"
          >我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label
        >
      </div>
      <div class="btnStyle d-flex justify-content-center">
        <button class="btn">確認送出</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.callMe {
  background-color: #fbf2f2;
  padding: 80px 0;
}

.callMe .container {
  max-width: 636px;
}

.callMe h2 {
  color: #650300;
  font-weight: bold;
  margin-bottom: 48px;
}

.callMe p {
  color: #000000;
  margin-bottom: 24px;
}

.callMe label {
  color: #000000;
}

.callMe .btnStyle {
  margin-top: 48px;
}

.callMe button {
  width: 416px;
  background-color: #aa0601;
  color: #ffffff;
  border-radius: 0px;
}

.callMe button:hover {
  background-color: #650300;
  color: #ffffff;
}

.callMe .labelColor {
  background-color: #fbf2f2;
  border: 1px solid black;
  border-radius: 0;
}

.callMe .checkboxStyle {
  border: 1px solid black;
}
</style>
