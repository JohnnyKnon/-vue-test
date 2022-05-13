<template>
  <div id="main-slider-total-wrap">
    <section id="main-slider">
      <div></div>
    </section>
    <section id="main-text">
      <h1 class="main-text-title">{{ $t('message.title') }}</h1>

      <p class="main-text-description">
        {{ $t('message.description') }}<br />{{ $t('message.descriptionTwo')
        }}<br />{{ $t('message.descriptionThree') }}
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: 'main-slider',
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
/* slider part but not working now */
#main-slider-total-wrap {
  /* position */
  position: relative;
  /* size */
  width: 100vw;
  height: 750px;
  /* margin */
  padding-top: 60px;
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
}

#main-slider {
  /* position */
  position: absolute;
  /* size */
  width: 100%;
  height: 100%;
  /* z-index */
  z-index: -1;
}
#main-slider > div {
  /* size */
  width: 100%;
  height: 100%;
  /* background */
  background: url(../../public/images/slider/BG4.jpg) no-repeat center/cover;
  background-attachment: fixed;
  /* filter */
  filter: brightness(70%);
}
/* Reponsive */
@media screen and (max-width: 768px) {
  #main-slider > div{
    /* background */
    background-attachment:local;
  }
  
}
/* main text */
#main-text {
  /* font */
  font-family: var(--font-kr);
  color: var(--color-white);
  /* max-width */
  max-width: 1400px;
  /* size */
  width: 85%;
  /* padding */
  padding-bottom: 120px;
}
.main-text-title {
  /* font */
  font-size: 2rem;
  /* padding */
  padding-bottom: 10px;
  /* border */
  border-bottom: 1px solid var(--scd-bg-color);
}

.main-text-description {
  /* font */
  font-size: 1rem;
  /* text */
  line-height: 24px;
  /* padding */
  padding-top: 10px;
}

.isNowLangTexts {
  /* display */
  display: block;
}
/* Reponsive */
@media screen and (max-width: 700px) {
  #main-slider-total-wrap {
    /* size */
    height: 600px;
  }
}
@media screen and (max-width: 768px) {
  .main-text-title {
    /* font */
    font-size: 1.2rem;
  }
  .main-text-description {
    /* font */
    font-size: 0.75rem;
  }
}
</style>
