<template>
   <section id="main-intro">
       <div class="main-intro-wrap">
           <!-- svg image -->
           <img class="light" src="../../public/images/svg/light.svg" />
           <h1 class="main-intro-title"><span class="main-intro-important">{{ $t('message.mainIntroTitle[0]') }}</span><br/>{{ $t('message.mainIntroTitle[1]') }}</h1>
           <p class="main-intro-description">
               {{ $t('message.mainIntroDescription') }}
           </p>
           <div class="main-intro-type">
               <section class="intro-type-box edu">
                   <i class="fas fa-book-reader"></i>
                   <h2>{{ $t('message.mainIntroType[0]') }}</h2>
                   <p>{{ $t('message.mainIntroTypeDescription[0]') }}</p>
               </section>
               <section class="intro-type-box btb-kr">
                  <i class="fas fa-user-tie"></i>
                  <h2>{{ $t('message.mainIntroType[1]') }}</h2>
                  <p>{{ $t('message.mainIntroTypeDescription[1]') }}</p>
               </section>
               <section class="intro-type-box btb-asia">
                   <i class="fas fa-globe-asia"></i>
                  <h2>{{ $t('message.mainIntroType[2]') }}</h2>
                  <p>{{ $t('message.mainIntroTypeDescription[2]') }}</p>
               </section>
           </div>
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

    }
}
</script>

<style>

    #main-intro{
        /* padding */
        padding: 50px 0;
        /* background */
        background-color: var(--scd-bg-color);
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
        width: 200px;
    }

    .main-intro-important{
        /* font */
        font-size: 2.8rem;
        color: var(--main-color);
    }

    .main-intro-title{
        /* font */
        font-family: var(--font-kr);
        font-size: 1.8rem;
        color: var(--color-dark-grey);
        /* text */
        text-align: center;
        /* padding */
        padding-bottom: 20px;
    }

    .main-intro-description{
        /* font */
        font-family: var(--font-kr);
        font-size: 0.9rem;
        color: var(--color-dark-grey);
        /* text */
        text-align: center;
        /* size */
        width: 335px;
        /* padding */
        padding: 0 10px;
    }
    

    .main-intro-type{
        /* padding */
        padding-top: 30px;
        /* flex */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .intro-type-box{
        /* font */
        font-family:var( --font-kr);
        /* padding */
        padding: 20px;
        /* size */
        width: 255px; height: 255px;
        /* border */
        border: 4px solid var(--color-dark-highlight);
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
         padding: 0 10px;
     }

    

</style>