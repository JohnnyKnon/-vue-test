<template>
  <!-- Navigation -->
  <nav-webffle></nav-webffle>
  <!-- main slider -->
  <main-slider></main-slider>
  <!-- Footer -->
  <footer-webffle></footer-webffle>
</template>

<script>
import NavWebffle from './components/nav-webffle.vue'
import MainSlider from './components/slider-section.vue'
import FooterWebffle from './components/footer.vue'

export default {
  name: 'App',
  components: {
    NavWebffle,
    MainSlider,
    FooterWebffle,
  },
  data() {
    return {
      
    }
  },
}
</script>


<style>
/* Variable */
  :root{
    /* font */
    --font-kr: 'Noto Sans KR', sans-serif;
    --font-eng: 'Raleway', sans-serif;
    --font-highlight: 'Palette Mosaic', cursive;
    /* weight */
    --weight-light: 300;
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-bold: 700;
    --weight-black: 900;
    /* color */
    --main-color: #FF9B00;
    --bg-color: #FFF7ED;
    --scd-bg-color: #DFE0DF;
    --color-text: #524438;
    --color-highlight: #00D4B5;
    --color-dark-highlight: #009B81;
    --color-black: #000;
    --color-white: #fff;
  }

  *{
    /* reset */
    margin: 0;
    padding: 0;
    /* box-size */
    box-sizing: border-box;
  }
  
  body{
    /* background */
    background-color: var(--bg-color) ;
    /* overflow */
    overflow-x: hidden;
  }

  li{
    /* list */
    list-style: none;
  }

  a{
    /* text */
    text-decoration: none;
    /* cursor */
    cursor: pointer;
  }

</style>
