<template>
  <section id="subinfo">
      <!-- news -->
    <div class="news">
      <div class="subinfo-info-wrap">
        <h1 class="news-title">{{ $t('message.category[0]') }}</h1>
        <p>
          <span class="bold">{{ $t('message.subinfoBold[0]') }}</span
          ><br />
          {{ $t('message.subinfo[0]') }}
        </p>
      </div>
      <a href="#"
        >{{ $t('message.subinfoBtn[0]') }} <i class="fas fa-angle-right"></i
      ></a>
    </div>
    <!-- devinfo -->
    <div class="devInfo">
      <div class="subinfo-info-wrap">
        <h1 class="news-title">{{ $t('message.category[1]') }}</h1>
        <p>
          <span class="bold">{{ $t('message.subinfoBold[1]') }}</span
          ><br />
          {{ $t('message.subinfo[1]') }}
        </p>
      </div>
      <a href="#"
        >{{ $t('message.subinfoBtn[1]') }} <i class="fas fa-angle-right"></i
      ></a>
    </div>
    <!-- design -->
    <div class="desgin">
      <div class="subinfo-info-wrap">
        <h1 class="news-title">{{ $t('message.category[2]') }}</h1>
        <p>
          <span class="bold">{{ $t('message.subinfoBold[2]') }}</span
          ><br />
          {{ $t('message.subinfo[2]') }}<br />
        </p>
      </div>
      <a href="http://www.mdh.kr/"
        >{{ $t('message.subinfoBtn[2]') }} <i class="fas fa-angle-right"></i
      ></a>
    </div>
    <!-- partnership -->
    <div class="partnership">
      <div class="subinfo-info-wrap">
        <h1 class="news-title">{{ $t('message.category[3]') }}</h1>
        <p>
          <span class="bold">{{ $t('message.subinfoBold[3]') }}</span>
          <br />
          {{ $t('message.subinfo[3]') }}

        </p>
      </div>
      <a href="#"
        >{{ $t('message.subinfoBtn[3]') }} <i class="fas fa-angle-right"></i
      ></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main-sub-info',
  components: {},
  data() {
    return {
        
    };
  },
  methods: {
      
  },
};
</script>

<style>
#subinfo {
  /* max-width */
  max-width: 1400px;
  /* size */
  width: 90%;
  /* margin */
  margin: 0 auto;
  /* padding */
  padding: 50px 0;
  /* flex */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
#subinfo > div {
  /* size */
  width: 350px;
  height: 300px;
  /* padding */
  padding: 30px;
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
/* borderleft div */
#subinfo > div:not(.news) {
  /* border */
  border-left: 1px solid var(--scd-bg-color);
}
.subinfo-info-wrap {
  /* font */
  font-family: 'Noto Sans KR', 'Raleway', sans-serif;
}
.subinfo-info-wrap > h1 {
  /* font */
  font-weight: var(--weight-regular);
  font-size: 1rem;
  color: var(--main-color);
  /* padding */
  padding-bottom: 5px;
}
.subinfo-info-wrap > p > span {
  /* font */
  font-weight: var(--weight-bold);
  font-size: 1.3rem;
  color: var(--colot-text);
  /* display */
  display: block;
}
.subinfo-info-wrap > p {
  /* font */
  font-size: 0.75rem;
  color: var(--color-text);
  /* text */
  text-align: justify;
  line-height: 20px;
}

#subinfo > div > a {
  /* font */
  font-family: var(--font-kr);
  font-size: 1.1rem;
  color: var(--color-dark-highlight);
}
#subinfo > div > a:hover {
  /* border */
  border-bottom: 1px solid var(--color-dark-highlight);
}

/* Responsive */
@media screen and (max-width: 1555px) {
  #subinfo > div {
    /* size */
    width: 310px;
    height: 300px;
  }
  .subinfo-info-wrap > p {
  /* font */
  font-size: 0.7rem;
  }
}
@media screen and (max-width: 1377px) {
  #subinfo > div {
    /* size */
    width: 250px;
    height: 300px;
  }
}
</style>
