<template>
  <section class="navList">
    <div class="container">
      <ul class="nav row text-center">
        <li class="nav-item">
          <a class="nav-link text-black" href="#" @click.prevent="handleCustomEvent('optical')"
            >OPTICAL</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#" @click.prevent="handleCustomEvent('sunglasses')"
            >SUNGLASSES</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#" @click.prevent="handleCustomEvent('functional')"
            >FUNCTIONAL</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['clickType']) // 定義發出的事件名稱

const handleCustomEvent = (value) => {
  emit('clickType', value) // 發出 'clickType' 事件
  console.log(value)
}
</script>
<style>
.navList .nav-item,
.navList .nav-link {
  padding: 0px;
}

.navList .nav-link {
  padding: 16px 0px;
  font-size: 32px;
  color: #000000;
}

.navList li {
  border: 1px solid #dcdcdc;
  width: 33.333%;
}

.navList li:hover {
  border-bottom: 5px solid #aa0601;
}

.navList a:focus {
  border-bottom: 5px solid #aa0601;
}

@media (max-width: 768px) {
  .navList .container {
    max-width: 100%;
  }
  .navList .nav-link {
    font-size: 24px;
  }
}

@media (max-width: 500px) {
  .navList .container {
    max-width: 100%;
  }
  .navList .nav-link {
    font-size: 16px;
  }
  .navList li {
    width: 33.333%;
    height: 56px;
  }
}
</style>
