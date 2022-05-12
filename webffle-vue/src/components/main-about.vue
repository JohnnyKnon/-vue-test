<template>
   <section id="main-about">
       <canvas class="main-about-bg"></canvas>
       <div class="main-about-wrap">
           <header class="main-about-title">
               <span>About</span>
               <h1>A business partner that connects people around the world and makes their global debut</h1>
           </header>
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
        padding-bottom: 150px;
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
    }

    .main-about-wrap{
        /* max-width */
        max-width: 1300px;
        /* size */
        width: 100%;
        /* margin */
        margin: 0 auto;
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
        width: calc(100% + 1.3px);
        height: 150px;
        transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1652329476 .shape-fill {
    fill: #FFF7ED;
    }
  
</style>