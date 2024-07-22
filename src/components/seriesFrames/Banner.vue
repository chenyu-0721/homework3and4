<template>
  <section class="banner">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <h1 v-if="props.type === 'optical' || props.type === ''" class="text-black">
        Celluloid Combi
      </h1>
      <h2 v-if="props.type === 'optical' || props.type === ''" class="text-black">
        賽璐珞鈦金屬混合鏡框
      </h2>
      <h1 v-if="props.type === 'sunglasses'" class="text-black">2020 NEW COLLECTION Combi</h1>
      <h2 v-if="props.type === 'sunglasses'" class="text-black">賽璐珞鈦金屬混合鏡框</h2>
      <div class="album">
        <div class="container">
          <div
            v-if="props.type === 'optical' || props.type === ''"
            class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3 mt-2"
          >
            <div class="col" v-for="product in paginatedProducts" :key="product">
              <img
                :src="`https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-${product}.png?raw=true`"
              />
              <div class="card-body d-flex justify-content-between pt-2">
                <h4 class="card-text text-black">BJ41600S</h4>
                <h4 class="text-danger">NTD3,490</h4>
              </div>
              <div class="box">
                <div class="brownBox"></div>
                <div class="brownLightBox"></div>
              </div>
            </div>
          </div>
          <div
            v-if="props.type === 'sunglasses'"
            class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3"
          >
            <div class="col" v-for="product in 6" :key="product">
              <img
                :src="`https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-${product}.png?raw=true`"
              />
              <div class="card-body d-flex justify-content-between pt-2">
                <h4 class="card-text text-black">BJ41600S</h4>
                <h4 class="text-danger">NTD3,490</h4>
              </div>
              <div class="box">
                <div class="brownBox"></div>
                <div class="brownLightBox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">上一頁</a>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">下一頁</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted, defineProps } from 'vue'

// 定義接收的 props
const props = defineProps({
  type: String
})

// 設定狀態和邏輯
const state = reactive({
  products: Array.from({ length: 12 }, (_, i) => i + 1),
  currentPage: 1,
  itemsPerPage: 12
})

const updateItemsPerPage = () => {
  const width = window.innerWidth
  if (width <= 500) {
    state.itemsPerPage = 4
  } else if (width <= 768) {
    state.itemsPerPage = 10
  } else {
    state.itemsPerPage = 12
  }
  // 重設當前頁面為 1
  state.currentPage = 1
}

const logType = () => {
  console.log('Banner Type:', props.type)
}

// 當前頁面數量的計算屬性
const totalPages = computed(() => Math.ceil(state.products.length / state.itemsPerPage))

// 分頁的產品計算屬性
const paginatedProducts = computed(() => {
  const start = (state.currentPage - 1) * state.itemsPerPage
  const end = start + state.itemsPerPage
  return state.products.slice(start, end)
})

// 改變頁面
const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    state.currentPage = page
  }
}

// 組件掛載時和卸載時的副作用處理
onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage)
})
</script>

<style>
.banner {
  margin: 80px 0;
}

.banner .container {
  max-width: 1400px;
}

.banner h1 {
  font: normal normal medium 42px/63px Roboto;
  color: #000000;
}

.banner h2 {
  font: normal normal normal 32px/48px Source Han Sans TW;
  color: #000000;
}

.banner h4 {
  font: normal normal medium 24px/36px Roboto;
  color: #000000;
}

.banner img {
  width: 100%;
}

.banner .brownBox {
  width: 24px;
  height: 24px;
  background: #5f3e2d;
  border-radius: 5px;
  margin-right: 5px;
}

.banner .brownLightBox {
  width: 24px;
  height: 24px;
  background: #b75929;
  border-radius: 5px;
}

.banner .box {
  display: flex;
  margin-bottom: 60px;
}

.banner .page-link {
  background: white;
  color: black;
}

.banner .page-link:hover {
  background: black;
  color: white;
}

.banner .page-link:focus {
  background: black;
  color: white;
}

@media (max-width: 768px) {
  .banner .box {
    display: flex;
    margin-bottom: 40px;
  }
}

@media (max-width: 375px) {
  .banner {
    margin: 40px 0;
  }

  .banner h1 {
    font: var(--unnamed-font-style-normal) normal medium 24px/36px Roboto;
  }

  .banner h2 {
    font: normal normal normal 24px/36px Source Han Sans TW;
    margin-bottom: 24px;
  }
  .banner .box {
    display: flex;
    margin-bottom: 24px;
  }
  .banner ul {
    padding-top: 56px;
  }
}
</style>
