<template>
   <section id="main-intro">
       <div class="main-intro-wrap">
           <!-- svg image -->
           <img class="light" src="../../public/images/svg/light.svg" />
           <h1 class="main-intro-title" 
           data-aos="fade-down"
           data-aos-duration="1500"
           data-aos-easing="ease-in-out"      
           ><span class="main-intro-important">{{ $t('message.mainIntroTitle[0]') }}</span><br/>{{ $t('message.mainIntroTitle[1]') }}</h1>
           <p class="main-intro-description" 
           data-aos="fade-down"
           data-aos-duration="1500"
           data-aos-delay="200"
           data-aos-easing="ease-in-out"
           >
               {{ $t('message.mainIntroDescription') }}
           </p>
           <div class="main-intro-type">
               <section class="intro-type-box edu"
               data-aos="fade-up"
               data-aos-duration="1500"
               data-aos-delay="500"
               data-aos-easing="ease-in-out"
               >
                   <i class="fas fa-book-reader"></i>
                   <h2>{{ $t('message.mainIntroType[0]') }}</h2>
                   <p>{{ $t('message.mainIntroTypeDescription[0]') }}</p>
               </section>
               <section class="intro-type-box btb-kr"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-easing="ease-in-out"
               >
                  <i class="fas fa-user-tie"></i>
                  <h2>{{ $t('message.mainIntroType[1]') }}</h2>
                  <p>{{ $t('message.mainIntroTypeDescription[1]') }}</p>
               </section>
               <section class="intro-type-box btb-asia"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-easing="ease-in-out"
               >
                   <i class="fas fa-globe-asia"></i>
                  <h2>{{ $t('message.mainIntroType[2]') }}</h2>
                  <p>{{ $t('message.mainIntroTypeDescription[2]') }}</p>
               </section>
           </div>
       </div>
       <div class="custom-shape-divider-bottom-1652330795">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
            </svg>
        </div>
   </section>
</template>

<script>

export default{
    name: 'main-intro',
    data() {
        return {
            
        }
    },
    components:{

    },
    methods: {
         
    },
}
</script>

<style>

    #main-intro{
        /* position */
        position: relative;
        /* padding */
        padding: 20px 0;
        /* background */
        background-color: var(--scd-bg-color);
          /* overflow */
        overflow-x: hidden;
    }
    .main-intro-wrap{
        /* max-width */
        max-width: 1400px;
        /* size */
        width: 90%;
        /* margin */
        margin: 0 auto;
        /* flex */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    /* svg img */
    .light{
        /* size */
        width: 240px;
    }

    .main-intro-important{
        /* font */
        font-size: 2.5rem;
        color: var(--main-color);
    }

    .main-intro-title{
        /* font */
        font-family: var(--font-kr);
        font-size: 1.2rem;
        color: var(--color-dark-grey);
        /* text */
        text-align: center;
        /* padding */
        padding-bottom: 30px;
    }

    .main-intro-description{
        /* font */
        font-family: var(--font-kr);
        font-size: 0.9rem;
        color: var(--color-dark-grey);
        /* text */
        text-align: center;
        /* size */
        width: 90%;
        /* padding */
        padding: 0 10px;
    }
    

    .main-intro-type{
        /* padding */
        padding-top: 50px;
        padding-bottom: 150px;
        /* flex */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 35px;
    }

    .intro-type-box{
        /* font */
        font-family:var( --font-kr);
        /* padding */
        padding: 20px;
        /* size */
        width: 260px; height: 260px;
        /* border */
        border: 5px solid var(--color-dark-highlight);
        border-radius: 50%;
        /* flex */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .intro-type-box > i{
        /* font */
        font-size: 4rem;
        color: var(--color-dark-highlight);
    }

    .intro-type-box > h2{
        /* font */
        font-size: 1.25rem;
        color: var(--color-dark-highlight);
        /* padding */
        padding: 5px 0;
    }

     .intro-type-box > p{
         /* font */
         font-size: 0.85rem;
         color: var(--color-dark-grey);
         /* text */
         text-align: center;
         /* padding */
         padding: 0 11px;
     }

    .custom-shape-divider-bottom-1652330795 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-bottom-1652330795 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 150px;
    }

    .custom-shape-divider-bottom-1652330795 .shape-fill {
        fill: #848484;
    }

    

</style>