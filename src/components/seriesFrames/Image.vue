<template>
  <section class="image">
    <div class="">
      <img
        class="img-fluid"
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-1.png?raw=true"
        alt="Product Header 1"
      />
      <img
        class="img-fluid"
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-2.png?raw=true"
        alt="Product Header 2"
      />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.image img {
  width: 50%;
  max-height: 296px;
  object-fit: cover;
}

@media (max-width: 500px) {
  .image img {
    height: 136px;
    object-fit: cover;
  }
}
</style>
