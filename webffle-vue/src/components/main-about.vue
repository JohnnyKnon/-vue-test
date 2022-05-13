<template>
   <section id="main-about">
       <canvas class="main-about-bg"></canvas>
       <div class="main-about-wrap">
           <header class="main-about-title"
            data-aos="zoom-out-up"
            data-aos-duration="1500"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
           >
               <span>About</span>
               <h1>A business partner that connects people around the world and makes their global debut</h1>
           </header>
           <article class="main-about-contents">
                <h2 class="sub-title"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out"
                >
                   {{ $t('message.aboutUs[0]') }}
                </h2>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out"
                >
                    {{ $t('message.aboutUs[1]') }}
                </p>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out"
                >
                    {{ $t('message.aboutUs[2]') }}
                </p>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out"
                >
                   {{ $t('message.aboutUs[3]') }}
                </p>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out"
                >
                   {{ $t('message.aboutUs[4]') }}
                </p>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-out"
                >
                    {{ $t('message.aboutUs[5]') }}
                </p>
               
           </article>
            
       </div>
       <div class="custom-shape-divider-bottom-1652329476">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
            </svg>
        </div>
   </section>
</template>

<script>
    export default{
        name: 'main-about',
        data() {
            return {
                
            }
        },
        components:{

        }
    }
    
</script>

<style>
    #main-about{
        /* position */
        position: relative;
        /* padding */
        padding-top: 50px;
        padding-bottom: 250px;
        /* background */
        background-color: var(--third-bg-color);
          /* overflow */
        overflow: hidden;
    }
    .main-about-bg{
        /* position */
        position: absolute;
        top: 0;
        left: 0;
        /* z-index */
        z-index: 5;
    }

    .main-about-wrap{
        /* max-width */
        max-width: 1300px;
        /* size */
        width: 90%;
        /* margin */
        margin: 0 auto;
        /* z-index */
        z-index: 10;
    }

    .main-about-title{
        /* font */
        font-family: var(--font-eng);
    }

    .main-about-title span{
        /* font */
        font-size: 1.5rem;
        color: var(--main-color);
    }

    .main-about-title h1{
        /* font */
        font-size: 3.2rem;
        color: var(--color-highlight);
        /* text */
        text-align: left;
        /* padding */
        padding-bottom: 40px;
    }
    /* Reponsive */
    @media screen and (max-width: 768px) {
        .main-about-title h1{
        /* font */
        font-size: 2.5rem;
    }
    }

    .main-about-contents{
        /* font */
        font-family: var(--font-kr);
        font-weight: var(--weight-light);
        color: var(--color-white);
    }

    .main-about-contents h2{
        /* font */
        font-weight: var(--weight-regular);
        font-size: 1rem;
        color: var(--color-dark-grey);
        /* text */
        word-spacing: 4px;
         /* padding */
        padding-bottom: 15px;
    }

    .main-about-contents p{
        /* font */
        font-size: 0.9rem;
        /* text */
        text-align: justify;
        /* padding */
        padding-bottom: 20px;
    }


    /* SVG */
    .custom-shape-divider-bottom-1652329476 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-bottom-1652329476 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.5px);
        height: 150px;
        transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1652329476 .shape-fill {
    fill: #FFF7ED;
    }
  
</style>