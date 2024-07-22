<template>
  <main>
    <NavList @clickType="handleCustomEvent" />
    <SeriesFrames />
    <Banner :type="bannerType" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import NavList from '../components/seriesFrames/NavList.vue'
import SeriesFrames from '../components/seriesFrames/Image.vue'
import Banner from '../components/seriesFrames/Banner.vue'

const bannerType = ref('') // 定義 reactive 的變數來存儲 Banner 的 type

const handleCustomEvent = (value) => {
  bannerType.value = value // 更新 bannerType 的值
  console.log(bannerType.value)
}
</script>

<style></style>
