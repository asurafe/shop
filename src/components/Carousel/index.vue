<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper(this.$refs.mySwiper, {
            loop: true,
            // 分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 翻页按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
